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
  /** Altura renderizada da logo em px. Usado quando `fluid` é falso. */
  height?: number;
  /**
   * Modo fluido: a logo ocupa a largura disponível até `maxWidth` e a
   * altura acompanha a proporção original. Para blocos largos, onde a
   * medida que manda é a largura.
   */
  fluid?: boolean;
  maxWidth?: number;
  className?: string;
}

/*
 * A logo nunca recebe filtro, sombra, contorno ou recolorização: cada
 * variação é um arquivo próprio em /public/brand/.
 *
 * A área de proteção — equivalente à altura do "W" do lettering — vive no
 * wrapper, nunca no <img>. Padding aplicado direto na imagem entra no
 * cálculo de largura automática e a achata: o lockup chegou a renderizar
 * com proporção 1.27 no lugar de 1.56.
 *
 * Se o arquivo ainda não estiver em /public/brand/, o componente exibe um
 * marcador legível em vez de uma imagem quebrada.
 */
export function Logo({
  variant = 'mono',
  height = 34,
  fluid = false,
  maxWidth = 420,
  className,
}: Props) {
  const [missing, setMissing] = useState(false);
  const src = asset(site.logo[variant]);
  const onDark = variant === 'white';
  const guard = fluid ? maxWidth * 0.035 : height * 0.28;

  if (missing) {
    return (
      <span
        style={fluid ? { padding: guard, maxWidth } : { height, paddingInline: guard }}
        className={cn(
          'inline-flex items-center justify-center rounded-wm border border-dashed text-center font-sans text-eyebrow font-semibold uppercase',
          onDark
            ? 'border-wm-border-invert text-wm-invert-muted'
            : 'border-wm-border-strong text-wm-muted',
          className,
        )}
      >
        [LOGO {variant.toUpperCase()} — PENDENTE]
      </span>
    );
  }

  return (
    <span
      className={cn('inline-flex items-center justify-center', className)}
      style={fluid ? { padding: guard, maxWidth } : { paddingInline: guard }}
    >
      <img
        src={src}
        alt={site.logo.alt}
        onError={() => setMissing(true)}
        {...(fluid ? {} : { height })}
        style={fluid ? undefined : { height }}
        className={fluid ? 'h-auto w-full' : 'w-auto'}
      />
    </span>
  );
}
