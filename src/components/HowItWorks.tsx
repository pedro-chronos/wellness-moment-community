import { site } from '../content/site';
import { SectionIntro } from './SectionIntro';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 10 — COMO FUNCIONA
 *
 * Quatro passos numerados. A numeração aqui é legítima: existe uma
 * sequência real entre assinar, entrar, viver e continuar.
 *
 * Vem depois do preço para eliminar o "e depois que eu pagar?" — a última
 * hesitação de quem já decidiu.
 */
export function HowItWorks() {
  const { howItWorks } = site;

  return (
    <Section tone="bg" labelledBy="como-funciona-titulo">
      <SectionIntro
        id="como-funciona-titulo"
        eyebrow={howItWorks.eyebrow}
        title={howItWorks.title}
      />

      <ol className="mt-14 grid gap-px border-t border-wm-border sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {howItWorks.steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.index}
            delay={index * 90}
            className="border-b border-wm-border pb-8 pr-6 pt-8 lg:border-r lg:last:border-r-0"
          >
            <span aria-hidden="true" className="font-display text-numeral text-wm-primary">
              {step.index}
            </span>
            <h3 className="mt-4 font-sans text-eyebrow font-semibold uppercase text-wm-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-body text-wm-muted">{step.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
