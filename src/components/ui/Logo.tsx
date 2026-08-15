import { useState } from 'react';
import { site } from '../../content/site';
import { asset } from '../../lib/asset';
import { cn } from './cn';

type Variant = 'full' | 'mono' | 'white';

interface Props {
  /**
   * full  — lockup completo colorido, sobre fundos claros
   * mono  — monocromático verde escuro, para espaços reduzidos e header
   * white — versão branca, para fundos escuros ou sobre fotografia
   */
  variant?: Variant;
  /** Altura renderizada em px. A área de proteção acompanha essa medida. */
  height?: number;
  className?: string;
}

/*
 * A logo nunca recebe filtro, sombra, contorno ou recolorização: cada
 * variação é um arquivo próprio em /public/brand/.
 *
 * A área de proteção equivale à altura do "W" do lettering. Como o "W"
 * ocupa aproximadamente a altura total do lockup monocromático, o padding
 * é derivado da altura renderizada.
 *
 * Se o arquivo ainda não estiver em /public/brand/, o componente exibe um
 * marcador legível em vez de uma imagem quebrada.
 */
export function Logo({ variant = 'mono', height = 34, className }: Props) {
  const [missing, setMissing] = useState(false);
  const src = asset(site.logo[variant]);
  const onDark = variant === 'white';

  if (missing) {
    return (
      <span
        style={{ height, paddingInline: height * 0.28 }}
        className={cn(
          'inline-flex items-center rounded-wm border border-dashed font-sans text-eyebrow font-semibold uppercase',
          onDark ? 'border-wm-border-invert text-wm-invert-muted' : 'border-wm-border-strong text-wm-muted',
          className,
        )}
      >
        [LOGO {variant.toUpperCase()} — PENDENTE]
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={site.logo.alt}
      height={height}
      style={{ height, paddingInline: height * 0.28 }}
      onError={() => setMissing(true)}
      className={cn('w-auto', className)}
    />
  );
}
