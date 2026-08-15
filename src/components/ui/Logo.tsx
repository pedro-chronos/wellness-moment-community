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
  /**
   * Modo fluido: a logo ocupa a largura disponível até `maxWidth`, com a
   * altura calculada pela proporção original. Para o lockup completo, que
   * é largo e horizontal e não deve ser dimensionado pela altura.
   */
  fluid?: boolean;
  maxWidth?: number;
  className?: string;
}

/*
 * A logo nunca recebe filtro, sombra, contorno ou recolorização: cada
 * variação é um arquivo próprio em /public/brand/.
 *
 * A área de proteção equivale à altura do "W" do lettering, derivada aqui
 * da medida de renderização.
 *
 * Se o arquivo ainda não estiver em /public/brand/, o componente exibe um
 * marcador legível em vez de uma imagem quebrada.
 */
export function Logo({ variant = 'mono', height = 34, fluid = false, maxWidth = 420, className }: Props) {
  const [missing, setMissing] = useState(false);
  const src = asset(site.logo[variant]);
  const onDark = variant === 'white';

  if (missing) {
    return (
      <span
        style={fluid ? { padding: maxWidth * 0.04 } : { height, paddingInline: height * 0.28 }}
        className={cn(
          'inline-flex items-center justify-center rounded-wm border border-dashed text-center font-sans text-eyebrow font-semibold uppercase',
          onDark ? 'border-wm-border-invert text-wm-invert-muted' : 'border-wm-border-strong text-wm-muted',
          className,
        )}
      >
        [LOGO {variant.toUpperCase()} — PENDENTE]
      </span>
    );
  }

  if (fluid) {
    return (
      <img
        src={src}
        alt={site.logo.alt}
        onError={() => setMissing(true)}
        // object-contain + altura automática: a proporção original nunca
        // é esticada, qualquer que seja a largura do container.
        style={{ maxWidth, padding: maxWidth * 0.04 }}
        className={cn('h-auto w-full object-contain', className)}
      />
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
