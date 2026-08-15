import { site } from '../content/site';
import { SectionIntro } from './SectionIntro';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 08 — PARA QUEM É
 *
 * Estrutura escaneável: a visitante precisa se reconhecer em três segundos,
 * imediatamente antes de a oferta aparecer.
 *
 * O fechamento em três tempos, com recuo crescente, é o eco tipográfico do
 * fio — a mesma ideia de avanço, agora no texto.
 */
const indents = ['pl-0', 'pl-6 sm:pl-12', 'pl-12 sm:pl-24'];

export function AudienceSection() {
  const { audience } = site;

  return (
    <Section tone="bg" labelledBy="publico-titulo">
      <SectionIntro id="publico-titulo" eyebrow={audience.eyebrow} title={audience.title} />

      <ul className="mt-12 grid gap-x-12 gap-y-1 sm:grid-cols-2 lg:mt-16">
        {audience.items.map((item, index) => (
          <Reveal as="li" key={item} delay={index * 50}>
            <span className="flex gap-4 border-b border-wm-border py-5 text-lead text-wm-ink">
              <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-wm-secondary" />
              {item}
            </span>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-14">
        <p className="wm-measure text-lead text-wm-muted">{audience.closing}</p>
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <p className="font-display text-display-md text-wm-ink">
          {audience.cadence.map((line, index) => (
            <span key={line} className={`block ${indents[index]}`}>
              {line}
            </span>
          ))}
        </p>
      </Reveal>
    </Section>
  );
}
