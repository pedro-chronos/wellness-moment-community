import { site } from '../content/site';
import { Button } from './ui/Button';
import { Eyebrow } from './ui/Eyebrow';
import { Media } from './ui/Media';
import { Reveal } from './ui/Reveal';

/*
 * SEÇÃO 01 — HERO
 *
 * Composição assimétrica: a promessa ocupa sete colunas à esquerda, a
 * fotografia cinco à direita, deslocada para baixo. O h1 da página vive
 * aqui e em nenhum outro lugar.
 *
 * A headline funciona para quem já viveu um evento e para quem chega sem
 * nunca ter ouvido falar — o conceito é explicado logo abaixo, na 02,
 * antes de qualquer pedido.
 */
export function Hero() {
  const { hero } = site;

  return (
    <section id="topo" className="relative px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-28 lg:pt-40">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-display-xl text-wm-ink">
              <span className="block">{hero.headline[0]}</span>
              <span className="block text-wm-muted">{hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="wm-measure mt-8 text-lead text-wm-muted">{hero.subheadline}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-start gap-5">
              <Button href={site.checkoutUrl}>{site.ctaPrimary}</Button>
              <p className="font-sans text-small text-wm-muted">{hero.microcopy}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5 lg:pt-16">
          <div className="relative">
            {/* Moldura fina em sage: o mesmo traço do fio, aqui como enquadramento. */}
            <span
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-wm-secondary"
            />
            <Media media={hero.media} priority />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
