# Wellness Moment Community — landing page

Vite + React + TypeScript + Tailwind CSS. Sem backend: os CTAs são links
externos. Sem biblioteca de UI pronta — o visual é autoral.

## Rodar o projeto

Requer **Node.js 18 ou superior** (inclui o npm). Baixe em <https://nodejs.org>.

```bash
npm install
```

```bash
npm run dev
```

O servidor sobe em <http://localhost:5173>.

Outros comandos:

```bash
npm run build
```

```bash
npm run typecheck
```

## Onde mexer

| O quê | Onde |
|---|---|
| Todo o texto, links, preço e flags | `src/content/site.ts` |
| Cores, tipografia, espaço, movimento | `src/styles/tokens.css` |
| Título, descrição, Open Graph | `index.html` |
| Logo | `public/brand/` (ver README de lá) |
| Fonte Bestigia | `public/fonts/` (ver README de lá) |

Nenhum valor HEX existe fora de `tokens.css`. Nenhuma copy existe fora de
`site.ts`. Trocar o preço, desligar a faixa das 20 primeiras ou publicar o
link do formulário de marcas são alterações de uma linha, sem tocar em layout.

### Preencher as pendências

```ts
// src/content/site.ts
price: '89',                      // remove o [PENDENTE DEFINIÇÃO] do card
brandFormUrl: 'https://…',        // ativa o CTA de marcas
launchOffer: { enabled: false },  // remove a faixa e o item de FAQ correspondente
```

A regra de cancelamento fica na constante `cancellationRule`, no topo do mesmo
arquivo: ela alimenta ao mesmo tempo `site.cancellationRule` e a resposta do FAQ.

Para as fotografias, preencha `src/` → `site.<seção>.media.src`. O componente
`Media` troca sozinho o placeholder pela imagem real, usando o `alt` que já
está descrito no conteúdo.

## Decisões que valem conhecer antes de editar

- **O fio.** Uma linha vertical de 1px atravessa a página inteira, se ramifica
  na seção do ecossistema e volta a se unir. Vive em `Section.tsx` +
  `ui/Thread.tsx` + as regras `.wm-thread` em `global.css`. Se criar uma seção
  nova, use `<Section>` para que o trecho local se encaixe no anterior.
- **Hierarquia de CTA.** O botão sólido em `--wm-primary` é o maior contraste
  da página e pertence só à assinatura. O CTA de marcas é `variant="outline"` —
  não promova para sólido.
- **Sage não é cor de texto.** `--wm-green-400` sobre o off-white dá 2,0:1 e
  reprova em AA. Ele é linha, borda e detalhe. Sobre o verde escuro, quem
  carrega texto de acento é `--wm-sand-200` (5,66:1).
- **Nada de informação inventada.** Onde o dado não existe, o componente
  `ui/Pending.tsx` marca `[PENDENTE DEFINIÇÃO]` de forma visível. Não substitua
  por texto plausível.
