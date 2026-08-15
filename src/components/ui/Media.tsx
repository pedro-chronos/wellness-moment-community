import { useState } from 'react';
import type { MediaPlaceholder } from '../../content/site';
import { asset } from '../../lib/asset';
import { cn } from './cn';

interface Props {
  media: MediaPlaceholder;
  tone?: 'light' | 'dark';
  /** O hero carrega com prioridade; todo o resto é lazy. */
  priority?: boolean;
  className?: string;
}

/*
 * Bloco de imagem.
 *
 * Enquanto a fotografia final não existir, renderiza um placeholder na
 * proporção correta, com fundo neutro e o rótulo visível ([IMAGEM HERO],
 * [FOTO COMUNIDADE], [MOCKUP APLICATIVO]...). Nenhuma imagem de banco é
 * usada para preencher espaço.
 *
 * Quando `media.src` for preenchido em site.ts, o mesmo componente passa
 * a renderizar a imagem real, com o `alt` já descrito no conteúdo. Se o
 * arquivo estiver referenciado mas ausente do disco, cai de volta no
 * placeholder — nunca um ícone de imagem quebrada.
 */
export function Media({ media, tone = 'light', priority = false, className }: Props) {
  const [failed, setFailed] = useState(false);
  const style = { aspectRatio: media.ratio };

  if (media.src && !failed) {
    return (
      <img
        src={asset(media.src)}
        alt={media.alt}
        style={style}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onError={() => setFailed(true)}
        className={cn('w-full rounded-wm object-cover', className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Imagem pendente. ${media.alt}`}
      style={style}
      className={cn(
        'flex w-full items-end rounded-wm p-5',
        tone === 'light' ? 'bg-wm-placeholder' : 'bg-wm-placeholder-invert',
        className,
      )}
    >
      <span
        className={cn(
          'font-sans text-eyebrow font-semibold uppercase',
          tone === 'light' ? 'text-wm-placeholder-ink' : 'text-wm-placeholder-ink-invert',
        )}
      >
        {media.label}
      </span>
    </div>
  );
}
