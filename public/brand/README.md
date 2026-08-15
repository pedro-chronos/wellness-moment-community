# Assets de marca — PENDENTE

Nenhum arquivo de logo foi encontrado no momento em que o projeto foi montado.
O componente `src/components/ui/Logo.tsx` referencia os três caminhos abaixo e,
enquanto os arquivos não existirem, exibe um marcador legível no lugar da
imagem — nunca uma imagem quebrada.

Coloque os arquivos aqui, com exatamente estes nomes:

| Arquivo | Variação | Uso |
|---|---|---|
| `wellness-moment-community-lockup.png` | Lockup completo colorido — "Wellness" em verde escuro, "MOMENT" em sage com tracking largo, "community" em script verde escuro | Uso principal, sobre fundos claros |
| `wellness-moment-community-mono.png` | Monocromático verde escuro, apenas "Wellness" + "community", sem "MOMENT" | Header e espaços reduzidos |
| `wellness-moment-community-branca.png` | Versão branca | Fundos escuros e sobre fotografia |

Se preferir SVG (recomendado), troque a extensão nos três caminhos em
`src/content/site.ts` → `site.logo`.

## Regras de aplicação

- A logo nunca recebe filtro, sombra, contorno ou recolorização. Cada fundo usa
  a variação correspondente.
- Área de proteção equivalente à altura do "W". Já aplicada pelo componente
  como padding derivado da altura renderizada.

## Também pendente

- `og-image.jpg` — 1200×630, para a prévia de compartilhamento. A tag `og:image`
  está comentada em `index.html` até o arquivo existir.
- Favicon definitivo. `public/favicon.svg` é um provisório construído apenas
  com as cores de token.
