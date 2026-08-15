import { Eyebrow } from './ui/Eyebrow';
import { Reveal } from './ui/Reveal';
import { cn } from './ui/cn';

interface Props {
  eyebrow: string;
  /** Uma string por linha da headline, para controlar as quebras. */
  title: string | string[];
  lead?: string;
  tone?: 'light' | 'dark';
  size?: 'lg' | 'md';
  id?: string;
  className?: string;
  /** Todas as seções usam h2; o h1 é exclusivo do hero. */
  as?: 'h2' | 'h3';
}

/*
 * Abertura padrão de seção: eyebrow em caixa alta, headline em display e
 * um parágrafo de apoio opcional. Mantém a hierarquia de headings correta
 * ao longo da página inteira.
 */
export function SectionIntro({
  eyebrow,
  title,
  lead,
  tone = 'light',
  size = 'lg',
  id,
  className,
  as = 'h2',
}: Props) {
  const lines = Array.isArray(title) ? title : [title];
  const Heading = as as 'h2';

  return (
    <Reveal className={cn('max-w-4xl', className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>

      <Heading
        id={id}
        className={cn(
          'mt-5 font-display',
          size === 'lg' ? 'text-display-lg' : 'text-display-md',
          tone === 'light' ? 'text-wm-ink' : 'text-wm-invert',
        )}
      >
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </Heading>

      {lead && (
        <p
          className={cn(
            'wm-measure mt-6 text-lead',
            tone === 'light' ? 'text-wm-muted' : 'text-wm-invert-muted',
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
