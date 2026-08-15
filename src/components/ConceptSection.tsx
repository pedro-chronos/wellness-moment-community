import { site } from '../content/site';
import { SectionIntro } from './SectionIntro';
import { Media } from './ui/Media';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 02 — O CONCEITO
 *
 * Aqui a página responde "o que é o Wellness Moment?" antes de pedir
 * qualquer coisa. Layout de duas colunas com a fotografia à esquerda em
 * proporção vertical, e o argumento à direita dentro da largura de leitura.
 *
 * Fecha com o primeiro grande momento tipográfico da página.
 */
export function ConceptSection() {
  const { concept } = site;

  return (
    <Section id="conceito" tone="bg" labelledBy="conceito-titulo">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4 lg:pt-3">
          <Media media={concept.media} />
        </Reveal>

        <div className="lg:col-span-8">
          <SectionIntro
            id="conceito-titulo"
            eyebrow={concept.eyebrow}
            title={concept.title}
            className="max-w-3xl"
          />

          <div className="wm-measure mt-8 space-y-5">
            {concept.body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 70}>
                <p className="text-lead text-wm-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal className="mt-20 lg:mt-28">
        <blockquote className="max-w-4xl border-l border-wm-secondary pl-6 sm:pl-10">
          <p className="font-display text-quote text-wm-ink">
            <span className="block">{concept.highlight[0]}</span>
            <span className="block">{concept.highlight[1]}</span>
          </p>
        </blockquote>
      </Reveal>
    </Section>
  );
}
