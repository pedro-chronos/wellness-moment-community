import { PENDING_LABEL } from '../../content/site';
import { cn } from './cn';

interface Props {
  /** Complemento opcional: [PENDENTE DEFINIÇÃO — regra de cancelamento]. */
  note?: string;
  tone?: 'light' | 'dark';
  className?: string;
}

/*
 * Marcador visível de informação ainda não definida.
 *
 * Regra inviolável do projeto: nada de dado inventado. Preço, regra de
 * cancelamento, links de formulário, redes sociais e páginas legais
 * aparecem assim até que o dado real exista.
 */
export function Pending({ note, tone = 'light', className }: Props) {
  const label = note ? `${PENDING_LABEL.slice(0, -1)} — ${note}]` : PENDING_LABEL;

  return (
    <span
      className={cn(
        'inline-block rounded-wm border border-dashed px-2.5 py-1 font-sans text-eyebrow font-semibold uppercase',
        tone === 'light'
          ? 'border-wm-border-strong text-wm-muted'
          : 'border-wm-border-invert text-wm-invert-muted',
        className,
      )}
    >
      {label}
    </span>
  );
}
