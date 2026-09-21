import { test, expect } from '@playwright/test';

const pages = ['/', '/guia', '/tecnicas', '/leituras', '/ferramenta', '/sobre', '/links', '/artigos/conversar-com-suporte', '/artigos/tabela-de-decisao'];

test('menu principal leva às seis seções', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Navegação principal' });
  for (const label of ['Guia', 'Técnicas', 'Leituras', 'Ferramenta', 'Sobre', 'Links']) {
    await expect(nav.getByRole('link', { name: label, exact: true })).toBeVisible();
  }
  await nav.getByRole('link', { name: 'Técnicas', exact: true }).click();
  await expect(page.locator('main h1')).toHaveText('Escolha pela dúvida.');
  await expect(page.locator('.part')).toHaveCount(5);
});

test('páginas antigas redirecionam para as novas', async ({ page }) => {
  await page.goto('/biblioteca');
  await expect(page).toHaveURL(/\/tecnicas\/?$/);
  await page.goto('/projetos');
  await expect(page).toHaveURL(/\/sobre\/?#o-que-eu-construo$/);
  await page.goto('/palestras/regras-de-negocio');
  await expect(page).toHaveURL(/\/guia\/?$/);
});

test('artigo mostra capítulo aberto, blocos de estudo e sequência de leitura', async ({ page }) => {
  await page.goto('/artigos/conversar-com-suporte');
  await expect(page.locator('.chapters details[open] summary')).toHaveText('IV · Com quem conversar');
  await expect(page.locator('.chapters a[aria-current=page]')).toHaveText('Conversar com o suporte');
  await expect(page.locator('blockquote.msg').first()).toContainText('Mensagem de exemplo');
  await expect(page.locator('blockquote.ask').first()).toBeVisible();
  await expect(page.locator('.pitfalls p').first()).toBeVisible();
  await expect(page.locator('.practice')).toContainText('Fiz este exercício');
  await expect(page.getByRole('navigation', { name: 'Continuar o estudo' })).toContainText('Conversar com a operação');
});

test('textos não usam travessão nem ressalvas de fonte antigas', async ({ page }) => {
  for (const path of ['/guia', '/artigos/tabela-de-decisao', '/artigos/caso-caixa', '/artigos/example-mapping-em-portugues', '/artigos/perguntas-que-destravam']) {
    await page.goto(path);
    const text = await page.locator('main').innerText();
    expect(text, path).not.toMatch(/[—–]/);
    expect(text, path).not.toContain('Na ficção do roteiro');
    expect(text, path).not.toContain('tradução não oficial');
  }
});

test('ferramenta carrega um exemplo e monta a nota', async ({ page }) => {
  await page.goto('/ferramenta');
  await page.getByLabel('Exemplo para estudo').selectOption('rafael');
  await page.getByRole('button', { name: 'Abrir exemplo' }).click();
  await page.getByRole('tab', { name: /Conferir/ }).click();
  await expect(page.locator('#table-work')).toBeVisible();
  await page.getByRole('tab', { name: /Registrar/ }).click();
  await expect(page.locator('#compiled-note')).toHaveValue(/EXEMPLO FICTÍCIO PARA ESTUDO/);
});

test('privacidade informa que as estatísticas estão desativadas', async ({ page }) => {
  await page.goto('/privacidade');
  await expect(page.getByText('O Google Analytics está desativado neste site.', { exact: false })).toBeVisible();
});

test('página do QR reúne os três projetos e dá acesso ao guia', async ({ page }) => {
  await page.goto('/links/');
  await expect(page.locator('.project h3')).toHaveText(['Proteu QA', 'Hefesto', 'Hermes']);
  await expect(page.getByRole('link', { name: 'Conhecer na Chrome Web Store' })).toHaveAttribute('href', /edpjppimngkekieldgokejdccfpiehgn$/);
  await expect(page.getByRole('link', { name: 'Conhecer mais projetos no GitHub' })).toHaveAttribute('href', 'https://github.com/JonnasFigueiredo');
  await page.getByRole('link', { name: 'Abrir o guia', exact: true }).click();
  await expect(page.locator('main h1')).toHaveText('Comece com uma decisão.');
});

test('filtro de leituras mostra o tema e permite voltar à lista completa', async ({ page }) => {
  await page.goto('/leituras');
  const total = await page.locator('.reading').count();
  await page.getByRole('button', { name: 'Aprendizagem', exact: true }).click();
  await expect(page.locator('.reading:visible')).toHaveCount(2);
  await expect(page.locator('#reading-count')).toHaveText('2 leituras');
  await expect(page.locator('.reading:visible').first()).toContainText('Dunlosky');
  await page.getByRole('button', { name: 'Todos', exact: true }).click();
  await expect(page.locator('.reading:visible')).toHaveCount(total);
});

test('nota persiste por escolha e pede confirmação antes de substituir', async ({ page }) => {
  await page.goto('/ferramenta');
  await page.getByLabel('Pergunta', { exact: true }).fill('Quando bloquear a expedição?');
  await page.getByLabel('Guardar neste navegador', { exact: true }).check();
  await page.reload();
  await expect(page.getByLabel('Pergunta', { exact: true })).toHaveValue('Quando bloquear a expedição?');
  await page.getByRole('button', { name: 'Nova investigação', exact: true }).click();
  await expect(page.locator('#replace-dialog')).toBeVisible();
  await page.getByRole('button', { name: 'Manter investigação', exact: true }).click();
  await expect(page.getByLabel('Pergunta', { exact: true })).toHaveValue('Quando bloquear a expedição?');
  await page.getByLabel('Exemplo para estudo').selectOption('rafael');
  await page.getByRole('button', { name: 'Abrir exemplo', exact: true }).click();
  await page.getByRole('button', { name: 'Substituir', exact: true }).click();
  await page.getByRole('tab', { name: /Conferir/ }).click();
  await page.getByLabel('Prática de investigação').selectOption('limites');
  await page.getByLabel('Fronteira a investigar').fill('500 caracteres');
  await page.getByRole('button', { name: 'Adicionar caso', exact: true }).click();
  await expect(page.locator('.case-item')).toHaveCount(3);
  await page.getByRole('button', { name: 'Remover caso 3', exact: true }).click();
  await expect(page.locator('.case-item')).toHaveCount(2);
  await page.getByRole('tab', { name: /Registrar/ }).click();
  await expect(page.getByLabel('Nota de investigação')).toHaveValue(/Fronteira: 500 caracteres/);
  await page.getByLabel('Guardar neste navegador', { exact: true }).uncheck();
  await page.reload();
  await expect(page.getByLabel('Pergunta', { exact: true })).toHaveValue('');
});

test('guia e página de links continuam acessíveis sem JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/links/');
  await page.getByRole('link', { name: 'Abrir o guia', exact: true }).click();
  await expect(page.locator('main h1')).toHaveText('Comece com uma decisão.');
  await expect(page.locator('main')).toContainText('Recortar');
  await context.close();
});

test('sem ID de medição não há pedido de consentimento nem rastreamento', async ({ page }) => {
  const tracking: string[] = [];
  page.on('request', request => {
    if (/google-analytics|googletagmanager/.test(request.url())) tracking.push(request.url());
  });
  await page.goto('/');
  await page.getByRole('link', { name: 'Começar pelo guia' }).click();
  await expect(page.locator('#analytics-consent')).toHaveCount(0);
  await expect(page.locator('#analytics-preferences')).toBeHidden();
  expect(tracking).toEqual([]);
});

for (const width of [360, 390, 1440]) {
  test(`sem rolagem horizontal em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 500 ? 844 : 1000 });
    for (const path of pages) {
      await page.goto(path);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), path).toBeTruthy();
      await expect(page.locator('main h1')).toHaveCount(1);
      await page.screenshot({ path: `test-results/screenshots/${width}-${path.replace(/\//g, '_') || 'home'}.png`, fullPage: true });
    }
  });
}

test('configured analytics waits for consent, sanitizes URLs, and supports withdrawal', async ({ page }) => {
  const requests: string[] = [];
  await page.route('**/www.googletagmanager.com/**', async route => {
    requests.push(route.request().url());
    await route.fulfill({ contentType: 'application/javascript', body: '/* Deliberately mocked: never contact Google in tests. */' });
  });
  await page.route('**/*google-analytics.com/**', route => route.abort());
  await page.goto('/?private=should-not-be-sent#secret');
  await page.evaluate(async () => {
    document.body.insertAdjacentHTML('beforeend', '<section id="analytics-consent" data-measurement-id="G-TESTONLY" hidden><button data-consent="accepted">Allow test</button><button data-consent="denied">Deny test</button></section>');
    const moduleUrl = '/src/scripts/analytics.ts';
    const { initAnalytics } = await import(/* @vite-ignore */ moduleUrl);
    initAnalytics();
  });
  await expect(page.locator('#analytics-consent')).toBeVisible();
  expect(requests).toHaveLength(0);
  await page.getByRole('button', { name: 'Deny test' }).click();
  expect(requests).toHaveLength(0);
  await page.getByRole('button', { name: 'Preferências de estatísticas' }).click();
  await page.getByRole('button', { name: 'Allow test' }).click();
  await expect.poll(() => requests.length).toBe(1);
  const queue = await page.evaluate(() => (window as any).dataLayer.map((entry: IArguments) => Array.from(entry)));
  expect(queue.filter((entry: unknown[]) => entry[0] === 'event' && entry[1] === 'page_view')).toHaveLength(1);
  expect(JSON.stringify(queue)).not.toContain('should-not-be-sent');
  expect(JSON.stringify(queue)).not.toContain('#secret');
  await page.getByRole('button', { name: 'Preferências de estatísticas' }).click();
  await page.getByRole('button', { name: 'Deny test' }).click();
  await expect.poll(() => page.evaluate(() => localStorage.getItem('jonnas-analytics-consent'))).toBe('denied');
  expect(requests).toHaveLength(1);
});
