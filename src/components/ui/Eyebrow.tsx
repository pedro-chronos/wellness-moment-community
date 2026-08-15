import { cn } from './cn';

interface Props {
  children: React.ReactNode;
  /** Sobre fundo escuro o rótulo usa o sage; sobre claro, o verde profundo. */
  tone?: 'light' | 'dark';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

/*
 * Caixa alta com tracking largo — o eco tipográfico do "MOMENT" da logo.
 * Usado com consistência em todas as seções e nos labels de UI.
 */
export function Eyebrow({ children, tone = 'light', className, as = 'p' }: Props) {
  const Tag = as as 'p';

  return (
    <Tag
      className={cn(
        'font-sans text-eyebrow font-semibold uppercase',
        tone === 'light' ? 'text-wm-muted' : 'text-wm-secondary',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
