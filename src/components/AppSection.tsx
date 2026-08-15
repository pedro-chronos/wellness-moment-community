import { site } from '../content/site';
import { SectionIntro } from './SectionIntro';
import { Media } from './ui/Media';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 05 — JORNADA WELLNESS
 *
 * Nenhuma tela, funcionalidade ou fluxo do aplicativo é ilustrado aqui:
 * eles ainda não existem em forma definida. O bloco reserva a proporção
 * de uma tela de celular e espera a captura real.
 */
export function AppSection() {
  const { app } = site;

  return (
    <Section id="app" tone="bg" labelledBy="app-titulo">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionIntro
            id="app-titulo"
            eyebrow={app.eyebrow}
            title={app.headline}
            lead={app.body}
          />

          <Reveal delay={120} className="mt-10">
            <p className="border-l border-wm-secondary pl-6 font-display text-display-sm text-wm-ink sm:pl-8">
              <span className="block">{app.highlight[0]}</span>
              <span className="block text-wm-muted">{app.highlight[1]}</span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:col-span-5">
          <div className="mx-auto max-w-[280px] rounded-wm border border-wm-border p-3">
            <Media media={app.media} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
