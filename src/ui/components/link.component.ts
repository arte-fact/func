export const linkComponent = (url: string, ...children: string[]): string =>
  `<a href="${url}">${children.join('\n')}</a>`;
