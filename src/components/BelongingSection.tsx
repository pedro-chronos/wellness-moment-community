import { site } from '../content/site';
import { SectionIntro } from './SectionIntro';
import { Media } from './ui/Media';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 06 — PERTENCIMENTO
 *
 * O momento mais emocional da página, e o contraponto direto à objeção
 * "isso é só mais um grupo?". Fotografia à direita, texto à esquerda —
 * espelhando a 02 para que as duas seções de retrato não se repitam.
 */
export function BelongingSection() {
  const { belonging } = site;

  return (
    <Section tone="surface" labelledBy="pertencimento-titulo">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionIntro
            id="pertencimento-titulo"
            eyebrow={belonging.eyebrow}
            title={belonging.title}
          />

          <div className="wm-measure mt-8 space-y-5">
            {belonging.body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 80}>
                <p className="text-lead text-wm-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-12">
            <p className="max-w-2xl font-display text-display-sm text-wm-ink">{belonging.closing}</p>
          </Reveal>
        </div>

        <Reveal delay={140} className="lg:col-span-5 lg:pt-6">
          <Media media={belonging.media} />
        </Reveal>
      </div>
    </Section>
  );
}
