import { site } from '../content/site';
import { BenefitCard } from './BenefitCard';
import { SectionIntro } from './SectionIntro';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 03 — O QUE VOCÊ ENCONTRA DENTRO
 *
 * Mosaico editorial de doze colunas: nada de seis caixas iguais. É a
 * seção que responde "o que eu recebo?" com entregáveis, não adjetivos —
 * e por isso o segundo CTA primário da página vem logo depois dela.
 */
export function BenefitsSection() {
  const { benefits } = site;

  return (
    <Section id="comunidade" tone="surface" labelledBy="beneficios-titulo">
      <SectionIntro id="beneficios-titulo" eyebrow={benefits.eyebrow} title={benefits.title} />

      <div className="mt-14 grid gap-4 sm:gap-5 lg:mt-20 lg:grid-cols-12">
        {benefits.items.map((benefit, index) => (
          <BenefitCard key={benefit.index} benefit={benefit} delay={index * 60} />
        ))}
      </div>

      <Reveal className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
        <Button href={site.checkoutUrl}>{site.ctaPrimary}</Button>
        <p className="font-sans text-small text-wm-muted">{site.hero.microcopy}</p>
      </Reveal>
    </Section>
  );
}
