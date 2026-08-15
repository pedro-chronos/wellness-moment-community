import { site } from '../content/site';
import { Button } from './ui/Button';
import { Eyebrow } from './ui/Eyebrow';
import { Reveal } from './ui/Reveal';

/*
 * SEÇÃO 01 — HERO
 *
 * Coluna única, só tipografia e respiro. Sem bloco de imagem: a marca
 * vive no header, e o topo da página ganha silêncio em vez de uma caixa.
 *
 * Cada elemento tem a sua própria medida — a headline mais larga que o
 * parágrafo, o parágrafo dentro da largura de leitura — para que o texto
 * nunca atravesse a tela inteira em telas grandes. O h1 da página vive
 * aqui e em nenhum outro lugar.
 */
export function Hero() {
  const { hero } = site;

  return (
    <section
      id="topo"
      className="relative px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-32 lg:pt-44"
    >
      <div className="mx-auto w-full max-w-container">
        <Reveal>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl font-display text-display-xl text-wm-ink">
            <span className="block">{hero.headline[0]}</span>
            <span className="block text-wm-muted">{hero.headline[1]}</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="wm-measure mt-8 text-lead text-wm-muted">{hero.subheadline}</p>
        </Reveal>

        <Reveal delay={210}>
          <p className="mt-7 flex items-center gap-4 font-sans text-small text-wm-muted">
            <span aria-hidden="true" className="h-px w-10 shrink-0 bg-wm-secondary" />
            {hero.tagline}
          </p>
        </Reveal>

        <Reveal delay={270}>
          <div className="mt-11 flex flex-col items-start gap-5">
            <Button href={site.checkoutUrl}>{site.ctaPrimary}</Button>
            <p className="font-sans text-small text-wm-muted">{hero.microcopy}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
