import { site } from '../content/site';
import { Button } from './ui/Button';
import { Eyebrow } from './ui/Eyebrow';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 13 — FECHAMENTO
 *
 * O fio chega inteiro até aqui. Bloco invertido para dar o crescendo
 * final, com o CTA na variação clara: mesma forma, mesmo peso, e o maior
 * contraste possível dentro de um fundo escuro.
 */
export function FinalCTA() {
  const { finalCta } = site;

  return (
    <Section tone="dark" labelledBy="fechamento-titulo">
      <Reveal className="max-w-4xl">
        <Eyebrow tone="dark">{finalCta.eyebrow}</Eyebrow>

        <h2 id="fechamento-titulo" className="mt-6 font-display text-display-lg text-wm-invert">
          {finalCta.headline}
        </h2>
      </Reveal>

      <div className="wm-measure mt-8 space-y-5">
        {finalCta.body.map((paragraph, index) => (
          <Reveal key={paragraph} delay={index * 80}>
            <p className="text-lead text-wm-invert-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160} className="mt-14">
        <p className="font-display text-quote text-wm-accent">
          <span className="block">{finalCta.closing[0]}</span>
          <span className="block">{finalCta.closing[1]}</span>
        </p>
      </Reveal>

      <Reveal delay={220} className="mt-12 flex flex-col items-start gap-5">
        <Button href={site.checkoutUrl} variant="primary-invert">
          {site.ctaPrimary}
        </Button>
        <p className="font-sans text-small text-wm-invert-muted">{site.hero.microcopy}</p>
      </Reveal>
    </Section>
  );
}
