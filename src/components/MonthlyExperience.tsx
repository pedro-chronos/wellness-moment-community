import { site } from '../content/site';
import { SectionIntro } from './SectionIntro';
import { Media } from './ui/Media';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 07 — TODO MÊS TEM ALGO NOVO
 *
 * É a seção que sustenta a assinatura, e por isso vem antes do preço:
 * quando o valor aparece na 09, a recorrência já está justificada.
 *
 * Sem calendário e sem "Mês 01 / Mês 02". Não existe cronograma definido,
 * e um exemplo — mesmo rotulado como exemplo — sugeriria uma programação
 * que ainda não foi decidida. O que se comunica aqui são categorias de
 * renovação, em fluxo, com escalonamento na entrada.
 */
export function MonthlyExperience() {
  const { monthly } = site;

  return (
    <Section tone="dark" labelledBy="recorrencia-titulo">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <SectionIntro
          id="recorrencia-titulo"
          eyebrow={monthly.eyebrow}
          title={monthly.headline}
          tone="dark"
          className="lg:col-span-5"
        />

        <ul className="flex flex-wrap gap-2.5 lg:col-span-7 lg:pt-4">
          {monthly.categories.map((category, index) => (
            <Reveal as="li" key={category} delay={index * 55}>
              <span className="inline-block rounded-wm border border-wm-border-invert px-4 py-2.5 font-sans text-label uppercase text-wm-invert">
                {category}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal delay={120} className="mt-16 lg:mt-24">
        <Media media={monthly.media} tone="dark" />
      </Reveal>

      <Reveal delay={80} className="mt-16 lg:mt-20">
        <p className="max-w-4xl font-display text-quote text-wm-invert">
          <span className="block">{monthly.message[0]}</span>
          <span className="block text-wm-accent">{monthly.message[1]}</span>
        </p>
      </Reveal>
    </Section>
  );
}
