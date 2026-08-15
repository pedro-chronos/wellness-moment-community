/**
 * Resolve o caminho de um arquivo da pasta /public respeitando o `base`
 * da build.
 *
 * O Vite reescreve sozinho os caminhos absolutos que aparecem no HTML,
 * mas não os que vivem em strings de JavaScript — como os da logo e das
 * fotografias, que ficam em `site.ts`. Sem isto, `/brand/logo.png` daria
 * 404 no GitHub Pages, onde o site é servido a partir de um subdiretório.
 */
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
