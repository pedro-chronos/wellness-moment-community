import { cn } from './cn';

type Variant = 'primary' | 'primary-invert' | 'outline' | 'outline-invert';
type Size = 'lg' | 'md';

interface Props {
  children: React.ReactNode;
  /** `null` desabilita o controle: o destino real ainda não existe. */
  href?: string | null;
  variant?: Variant;
  size?: Size;
  className?: string;
  full?: boolean;
  /** Descrição adicional para leitores de tela, quando o rótulo é curto. */
  ariaLabel?: string;
}

/*
 * Hierarquia de CTA da página:
 *
 *   primary        — preenchimento sólido em --wm-primary sobre fundo claro.
 *                    É o maior contraste da página. Conversão de assinatura.
 *   primary-invert — mesma forma e mesmo peso, invertida para as seções de
 *                    fundo escuro. Continua sendo o maior contraste do bloco.
 *   outline        — conversão secundária (marcas). Nunca sólido, nunca na
 *                    cor primária preenchida, para não competir.
 */
// O padding fica só no mapa de tamanhos: se `base` também definisse px/py,
// o utilitário de maior índice venceria na folha gerada e o tamanho `md`
// nunca se aplicaria.
const base =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-wm ' +
  'font-sans text-label font-semibold uppercase no-underline ' +
  'transition-[background-color,color,border-color,transform] duration-200 ease-wm ' +
  'active:translate-y-px';

const variants: Record<Variant, string> = {
  primary: 'bg-wm-primary text-wm-invert hover:bg-wm-surface-deep',
  'primary-invert': 'bg-wm-invert text-wm-primary hover:bg-wm-accent',
  outline:
    'border border-wm-border-strong bg-transparent text-wm-primary hover:border-wm-primary hover:bg-wm-overlay',
  'outline-invert':
    'border border-wm-border-invert bg-transparent text-wm-invert hover:border-wm-invert hover:bg-wm-overlay-invert',
};

const sizes: Record<Size, string> = {
  lg: 'px-8 py-4',
  md: 'px-6 py-3',
};

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'lg',
  className,
  full = false,
  ariaLabel,
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], full && 'w-full', className);

  // Sem destino definido: o controle existe no layout mas não é acionável.
  // Preferimos um botão desabilitado e honesto a um link que não leva a nada.
  if (!href) {
    return (
      <button type="button" disabled aria-label={ariaLabel} className={cn(classes, 'cursor-not-allowed opacity-45')}>
        {children}
      </button>
    );
  }

  const external = href.startsWith('http');

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
