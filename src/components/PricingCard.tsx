import { site } from '../content/site';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';
import { Pending } from './ui/Pending';

function Check() {
  return (
    <svg
      className="mt-1.5 h-3.5 w-3.5 shrink-0"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1.5 7.5 5 11l7.5-8"
        stroke="var(--wm-primary)"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

/*
 * Card de assinatura — o bloco de maior contraste da página.
 *
 * O preço ainda não foi definido e não é inventado aqui: enquanto
 * `site.price` for null, o valor aparece como [PENDENTE DEFINIÇÃO] no
 * lugar exato onde o número vai entrar.
 *
 * A faixa de lançamento é controlada por `site.launchOffer.enabled`.
 * Desligá-la remove um bloco inteiro do fluxo, sem deixar espaço morto
 * nem quebrar o restante do card.
 */
export function PricingCard() {
  const { pricing, launchOffer } = site;

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-wm border border-wm-border-strong bg-wm-bg">
      {launchOffer.enabled && (
        <p className="border-b border-wm-border bg-wm-accent px-8 py-4 font-sans text-small text-wm-ink">
          {launchOffer.text}
        </p>
      )}

      <div className="p-8 sm:p-10">
        {/* Único lugar da página que usa o lockup completo colorido — a
            aplicação principal da marca, sobre fundo claro. */}
        <Logo variant="full" fluid maxWidth={230} className="-ml-[9px]" />
        <p className="mt-4 font-sans text-small text-wm-muted">{pricing.cardSubtitle}</p>

        <p className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <span className="font-display text-display-sm text-wm-ink">R$</span>
          {site.price ? (
            <span className="font-display text-numeral text-wm-ink">{site.price}</span>
          ) : (
            <Pending />
          )}
          <span className="font-sans text-body text-wm-muted">{site.priceInterval}</span>
        </p>

        <ul className="mt-8 space-y-3 border-t border-wm-border pt-8">
          {pricing.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-body text-wm-ink">
              <Check />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-9">
          <Button href={site.checkoutUrl} full>
            {site.ctaPrimary}
          </Button>
        </div>

        <p className="mt-5 text-center font-sans text-small text-wm-muted">{site.hero.microcopy}</p>
      </div>
    </div>
  );
}
