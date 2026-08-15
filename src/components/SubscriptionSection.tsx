import { site } from '../content/site';
import { PricingCard } from './PricingCard';
import { SectionIntro } from './SectionIntro';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 09 — ASSINATURA
 *
 * O pico de conversão da página. Fundo claro de propósito: é o único
 * lugar onde o CTA sólido em --wm-primary alcança o contraste máximo,
 * e nenhum outro elemento por perto disputa atenção com ele.
 *
 * O que sustenta o preço já foi dito nas seções anteriores; aqui só
 * restam a promessa e o botão.
 */
export function SubscriptionSection() {
  const { pricing } = site;

  return (
    <Section id="assinatura" tone="surface" labelledBy="assinatura-titulo">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <SectionIntro id="assinatura-titulo" eyebrow={pricing.eyebrow} title={pricing.title} />
        </div>

        <Reveal delay={120} className="lg:col-span-7 lg:flex lg:justify-end">
          <PricingCard />
        </Reveal>
      </div>
    </Section>
  );
}
