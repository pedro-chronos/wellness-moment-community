import { site } from '../content/site';
import { Button } from './ui/Button';
import { Eyebrow } from './ui/Eyebrow';
import { Pending } from './ui/Pending';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 11 — MARCAS E EMPREENDEDORAS
 *
 * Conversão secundária. Tratamento deliberadamente mais contido: bloco
 * emoldurado, headline em display-md em vez de display-lg, e um CTA em
 * outline — nunca sólido, nunca na cor primária preenchida. Ele não pode
 * competir com o botão de assinatura, que já apareceu duas seções antes.
 *
 * O link do formulário ainda não existe. Enquanto não existir, o botão
 * aparece desabilitado com o marcador de pendência ao lado, em vez de
 * apontar para lugar nenhum.
 */
export function BrandPartnerSection() {
  const { brandPartner } = site;

  return (
    <Section id="marcas" tone="surface" labelledBy="marcas-titulo">
      <Reveal className="max-w-4xl rounded-wm border border-wm-border p-8 sm:p-12">
        <Eyebrow>{brandPartner.eyebrow}</Eyebrow>

        <h2 id="marcas-titulo" className="mt-5 font-display text-display-md text-wm-ink">
          {brandPartner.title}
        </h2>

        <p className="wm-measure mt-6 text-body text-wm-muted">{brandPartner.body}</p>

        <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {brandPartner.items.map((item) => (
            <li key={item} className="flex gap-3 text-body text-wm-ink">
              <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-wm-secondary" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={site.brandFormUrl} variant="outline" size="md">
            {site.ctaSecondary}
          </Button>
          {!site.brandFormUrl && <Pending note="link do formulário de marcas" />}
        </div>
      </Reveal>
    </Section>
  );
}
