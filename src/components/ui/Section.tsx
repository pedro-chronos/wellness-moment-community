import { Thread } from './Thread';
import { cn } from './cn';

type Tone = 'bg' | 'surface' | 'dark' | 'deep';

interface Props {
  id?: string;
  tone?: Tone;
  children: React.ReactNode;
  /** O fio atravessa todas as seções; só o hero e o footer o dispensam. */
  thread?: boolean;
  className?: string;
  /** Rótulo acessível quando a seção não abre com um heading próprio. */
  ariaLabel?: string;
  labelledBy?: string;
}

/*
 * Casca de seção: alterna o fundo para dar ritmo à página, aplica o padding
 * vertical generoso do grid editorial e hospeda o trecho local do fio.
 *
 * O fio corre na borda esquerda do container e o conteúdo é recuado por
 * --wm-rail. Como as seções são contíguas e todas usam o mesmo container,
 * os trechos se alinham e a linha atravessa a página sem interrupção.
 *
 * `on-dark` marca os blocos invertidos e ajusta, num só lugar, a cor do fio
 * e o anel de foco de tudo que estiver dentro.
 */
const tones: Record<Tone, string> = {
  bg: 'bg-wm-bg text-wm-ink',
  surface: 'bg-wm-surface text-wm-ink',
  dark: 'on-dark bg-wm-surface-alt text-wm-invert',
  deep: 'on-dark bg-wm-surface-deep text-wm-invert',
};

export function Section({
  id,
  tone = 'bg',
  children,
  thread = true,
  className,
  ariaLabel,
  labelledBy,
}: Props) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={labelledBy}
      className={cn('relative scroll-mt-24 px-5 sm:px-8 lg:px-10', tones[tone], className)}
    >
      {/* O padding vertical vive no container para que o trecho do fio
          cubra a altura inteira da seção e encontre o trecho seguinte. */}
      <div className="relative mx-auto w-full max-w-container">
        {thread && <Thread />}
        <div className="py-20 pl-rail sm:py-24 lg:py-32 lg:pl-rail-lg">{children}</div>
      </div>
    </section>
  );
}
