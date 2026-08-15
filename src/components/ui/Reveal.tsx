import { useInView } from '../../hooks/useInView';
import { cn } from './cn';

interface Props {
  children: React.ReactNode;
  /** Atraso em ms, para escalonar itens de uma mesma lista. */
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'article' | 'header';
}

/*
 * Deslocamento curto na entrada em viewport. Neutralizado por completo
 * sob `prefers-reduced-motion` — nenhum conteúdo depende disto para
 * ser lido.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();

  // Todas as tags aceitas são elementos de bloco com a mesma superfície
  // de props; o alias mantém o JSX tipado sem generics no componente.
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      data-visible={inView}
      className={cn('wm-reveal', className)}
      style={{ '--wm-reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
