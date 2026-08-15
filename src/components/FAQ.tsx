import { useState } from 'react';
import { site, visibleFaqItems } from '../content/site';
import { SectionIntro } from './SectionIntro';
import { Pending } from './ui/Pending';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 12 — FAQ
 *
 * Accordion com um item aberto por vez. Cada gatilho é um <button> real,
 * com aria-expanded e aria-controls, alcançável por teclado; o painel
 * fechado sai da árvore de acessibilidade via visibility.
 *
 * A resposta sobre cancelamento depende de uma regra da plataforma que
 * ainda não foi definida. Ela aparece como [PENDENTE DEFINIÇÃO] —
 * responder por conta própria aqui seria inventar uma condição comercial.
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" tone="bg" labelledBy="faq-titulo">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <SectionIntro
          id="faq-titulo"
          eyebrow={site.faq.eyebrow}
          title={site.faq.title}
          className="lg:col-span-4"
        />

        <div className="lg:col-span-8">
          <ul className="border-t border-wm-border">
            {visibleFaqItems.map((item, index) => {
              const open = openIndex === index;
              const buttonId = `faq-gatilho-${index}`;
              const panelId = `faq-painel-${index}`;

              return (
                <Reveal as="li" key={item.question} delay={index * 40}>
                  <div className="border-b border-wm-border">
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(open ? null : index)}
                        className="flex min-h-[44px] w-full items-start justify-between gap-6 py-6 text-left font-sans text-lead text-wm-ink transition-colors duration-200 ease-wm hover:text-wm-muted"
                      >
                        {item.question}
                        <span
                          aria-hidden="true"
                          className="relative mt-3 h-3 w-3 shrink-0"
                        >
                          <span className="absolute left-0 top-1/2 h-px w-3 bg-wm-primary" />
                          <span
                            className={`absolute left-1/2 top-0 h-3 w-px bg-wm-primary transition-transform duration-300 ease-wm ${
                              open ? 'scale-y-0' : 'scale-y-100'
                            }`}
                          />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-[grid-template-rows,visibility] duration-300 ease-wm ${
                        open ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="wm-measure pb-7 pr-8 text-body text-wm-muted">
                          {item.answer ?? <Pending note={item.pendingNote} />}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
