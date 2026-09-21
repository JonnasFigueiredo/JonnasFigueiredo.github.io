"""Build downloadable materials from the same authored Markdown used by Astro."""
from pathlib import Path
import html
import json
import re
import zipfile

import markdown
import pymupdf as fitz

ROOT = Path(__file__).resolve().parents[1]
ARTICLES = ROOT / "src/content/artigos"
OUTPUT = ROOT / "public/materiais"
SITE = "https://jonnasfigueiredo.github.io"
CSS = """
body { font-family: sans-serif; font-size: 11pt; line-height: 1.45; color: #222; }
h1 { font-size: 24pt; line-height: 1.15; color: #176252; margin-bottom: 16pt; }
h2 { font-size: 14pt; color: #176252; margin-top: 18pt; margin-bottom: 8pt; page-break-after: avoid; }
p { margin: 0 0 10pt; orphans: 3; widows: 3; }
a { color: #09647b; }
pre { font-family: monospace; font-size: 8pt; white-space: pre-wrap; }
.section-start { page-break-inside: avoid; }
"""


def make_pdf(source, filename):
    raw = source.read_text(encoding="utf-8")
    _, metadata, body = raw.split("---", 2)
    title = re.search(r'^title: "(.*)"$', metadata, re.M)[1]
    body = re.sub(r'\]\((/[^)]+)\)', lambda m: f']({SITE}{m[1]})', body)
    content = f'<h1>{html.escape(title)}</h1>' + markdown.markdown(body)
    content = re.sub(r'(<h2>.*?</h2>\s*<p>.*?</p>)', r'<div class="section-start">\1</div>', content, flags=re.S)
    if "kind: traducao" in metadata:
        notice = (ROOT / "public/licencas/cucumber-website-MIT.txt").read_text(encoding="utf-8")
        content += '<h2 style="page-break-before: always">Licença original</h2><pre>' + html.escape(notice) + '</pre>'
    media = fitz.paper_rect("a4")
    bounds = fitz.Rect(44, 74, media.width - 44, media.height - 58)
    headings = re.findall(r'<h2>(.*?)</h2>', content)
    # MuPDF does not reliably keep headings with the following paragraph.
    # Move headings near the page foot forward, then reflow the whole text.
    for _attempt in range(len(headings) + 1):
        story = fitz.Story(content, user_css=CSS)
        document = story.write_with_links(lambda _n, _filled: (media, bounds, None))
        changed = False
        for heading in headings:
            marker = f'<h2>{heading}</h2>'
            if marker not in content:
                continue
            if any(hit.y0 > bounds.y1 - 80 for page in document for hit in page.search_for(html.unescape(heading))):
                content = content.replace(marker, f'<h2 style="page-break-before: always">{heading}</h2>')
                changed = True
        if not changed:
            break
        document.close()
    for i, page in enumerate(document):
        page.insert_text((44, 34), "Jonnas Figueiredo | Material de apoio", fontsize=9, color=(.09, .38, .32))
        page.draw_line((44, 48), (media.width - 44, 48), color=(.7, .75, .72), width=.5)
        page.insert_text((44, media.height - 28), "jonnasfigueiredo.github.io", fontsize=8)
        page.insert_link({"kind": fitz.LINK_URI, "from": fitz.Rect(44, media.height - 40, 215, media.height - 23), "uri": SITE})
        page.insert_text((media.width - 80, media.height - 28), f"{i+1} / {len(document)}", fontsize=8)
    document.set_metadata({"title": title, "author": "Jonnas Figueiredo"})
    document.subset_fonts()
    document.save(OUTPUT / filename, garbage=4, deflate=True)
    print(f"{filename}: {len(document)} pages")
    document.close()


def make_form():
    document = fitz.open()
    page = document.new_page(width=595, height=842)
    page.insert_text((40, 43), "Nota de investigação", fontsize=23, fontname="hebo", color=(.09, .38, .32))
    page.insert_text((40, 66), "Jonnas Figueiredo | Material de apoio", fontsize=9)
    fields = [
        ("pergunta", "Pergunta", "Qual decisão, produto, perfil ou etapa preciso entender?"),
        ("resposta", "Resposta", "Hipótese ou regra confirmada? Condições, resultado e exceções."),
        ("exemplo", "Exemplo", "Estado inicial, ação, esperado e observado. Ou: não executado."),
        ("fonte", "Fonte", "Trecho aplicável ou registro da confirmação com o responsável."),
        ("pendente", "Pendente", "Dúvida, impacto, quem pode responder e próxima ação."),
    ]
    for i, (name, label, hint) in enumerate(fields):
        top = 105 + i * 129
        page.insert_text((40, top), label, fontsize=12, fontname="hebo")
        page.insert_text((40, top + 16), hint, fontsize=9)
        widget = fitz.Widget()
        widget.field_name = name
        widget.field_label = label + ". " + hint
        widget.field_type = fitz.PDF_WIDGET_TYPE_TEXT
        widget.field_flags = fitz.PDF_TX_FIELD_IS_MULTILINE
        widget.rect = fitz.Rect(40, top + 24, 555, top + 105)
        widget.text_fontsize = 10
        widget.border_width = .7
        widget.border_color = (.6, .65, .63)
        widget.fill_color = (.98, .99, .98)
        page.add_widget(widget)
    page.insert_text((40, 779), "Use dados autorizados. Salve o PDF e confira se as respostas foram preservadas.", fontsize=9)
    page.insert_text((40, 800), SITE + "/palestras/regras-de-negocio", fontsize=8)
    page.insert_link({"kind": fitz.LINK_URI, "from": fitz.Rect(40, 788, 550, 807), "uri": SITE + "/palestras/regras-de-negocio"})
    document.set_metadata({"title": "Nota de investigação de regra de negócio", "author": "Jonnas Figueiredo"})
    document.save(OUTPUT / "nota-preenchivel.pdf", garbage=4, deflate=True)
    document.close()


OUTPUT.mkdir(parents=True, exist_ok=True)
names = json.loads((ROOT / "src/data/materiais.json").read_text(encoding="utf-8"))
for slug, filename in names.items():
    make_pdf(ARTICLES / (slug + ".md"), filename)
make_form()
with zipfile.ZipFile(OUTPUT / "kit-qa.zip", "w", compression=zipfile.ZIP_DEFLATED) as archive:
    for filename in [*names.values(), "nota-preenchivel.pdf", "nota-de-investigacao.md"]:
        archive.write(OUTPUT / filename, filename)
    archive.write(ROOT / "public/licencas/cucumber-website-MIT.txt", "licencas/cucumber-website-MIT.txt")
print("Kit ready.")
