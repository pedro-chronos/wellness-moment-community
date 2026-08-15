import type { Benefit, BenefitVariant } from '../content/site';
import { Reveal } from './ui/Reveal';
import { cn } from './ui/cn';

interface Props {
  benefit: Benefit;
  delay?: number;
}

/*
 * Bloco do mosaico da seção 03.
 *
 * Quatro pesos diferentes para que os seis itens não virem seis caixas
 * idênticas: um bloco de abertura largo, um bloco de apoio, três blocos
 * regulares e um bloco em faixa que fecha a grade.
 *
 * O numeral em display é o que dá escala editorial ao conjunto. Ele é
 * decorativo e fica escondido de leitores de tela: a ordem dos itens não
 * carrega significado.
 */
const spans: Record<BenefitVariant, string> = {
  feature: 'lg:col-span-7 p-8 sm:p-10',
  accent: 'lg:col-span-5 p-7 sm:p-8',
  default: 'lg:col-span-4 p-7 sm:p-8',
  wide: 'lg:col-span-12 p-7 sm:p-10',
};

export function BenefitCard({ benefit, delay = 0 }: Props) {
  const isFeature = benefit.variant === 'feature';
  const isWide = benefit.variant === 'wide';

  return (
    <Reveal
      as="article"
      delay={delay}
      className={cn(
        'group flex h-full rounded-wm border border-wm-border bg-wm-bg transition-colors duration-300 ease-wm hover:border-wm-border-strong',
        spans[benefit.variant],
        isWide ? 'flex-col gap-6 md:flex-row md:items-center md:gap-14' : 'flex-col',
      )}
    >
      <div className={cn(isWide && 'md:w-2/5 md:shrink-0')}>
        <span
          aria-hidden="true"
          className={cn(
            // O areia sobre o off-white daria 1,65:1 e o numeral sumiria.
            // Sobre fundo claro quem carrega o numeral é o verde.
            'block font-display text-wm-muted transition-colors duration-300 ease-wm group-hover:text-wm-primary',
            isFeature ? 'text-numeral' : 'text-display-sm',
          )}
        >
          {benefit.index}
        </span>

        <h3
          className={cn(
            'mt-4 font-display text-wm-ink',
            isFeature ? 'text-display-md' : 'text-display-sm',
          )}
        >
          {benefit.title}
        </h3>
      </div>

      <p
        className={cn(
          'wm-measure text-wm-muted',
          isWide ? 'text-lead' : 'mt-4',
          isFeature && 'mt-5 text-lead',
        )}
      >
        {benefit.body}
      </p>
    </Reveal>
  );
}
