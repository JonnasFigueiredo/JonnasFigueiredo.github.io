const formatador = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatarData = (d: Date) => formatador.format(d);

export const formatarDataISO = (d: Date) => d.toISOString().slice(0, 10);
