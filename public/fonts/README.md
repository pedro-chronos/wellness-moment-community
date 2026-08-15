# Fontes — PENDENTE

## Bestigia (display)

Não está no Google Fonts. O `@font-face` já está declarado em
`src/styles/global.css` e espera dois arquivos nesta pasta:

- `bestigia.woff2`
- `bestigia.woff`

Enquanto eles não existirem, o navegador cai no fallback declarado em
`--wm-font-display` (`'Playfair Display', Georgia, 'Times New Roman', serif`)
sem quebrar o layout — mas o caráter tipográfico da página **não é o final**.

O fallback foi mantido conforme o briefing. Ao adicionar o arquivo real,
inspecione o caráter da fonte e ajuste a pilha em `tokens.css` para um fallback
com métricas próximas — se Bestigia não for uma serifada, `Georgia` está errada
como substituta.

Verifique também a licença de uso comercial/web antes de publicar.

### Atenção no GitHub Pages

O `@font-face` usa o caminho absoluto `/fonts/bestigia.woff2`, que é o correto
para o domínio final (`wellnessjourney.com.br/fonts/...`). No GitHub Pages, que
serve o site a partir de `/wellness-moment-community/`, esse caminho não resolve
e a fonte cairia no fallback.

Isso não afeta nada hoje, porque os arquivos ainda não existem. Quando eles
chegarem, se a prévia do Pages ainda estiver em uso, ajuste o caminho no
`@font-face` em `src/styles/global.css` — ou publique a prévia já no domínio
definitivo.

## Figtree (texto e UI)

Carregada do Google Fonts em `index.html`, apenas nos pesos 400, 500, 600 e 700,
com `display=swap` e `preconnect`. Nada a fazer aqui.

## Formale Script

**Não colocar nesta pasta.** A licença é de uso pessoal e a fonte não pode ser
carregada como webfont nem usada em nenhum texto do site. Ela existe apenas
dentro da imagem da logo. Para usá-la comercialmente seria necessário adquirir
a licença correspondente.
