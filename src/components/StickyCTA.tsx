import { site } from '../content/site';
import { Button } from './ui/Button';
import { cn } from './ui/cn';

interface Props {
  visible: boolean;
}

/*
 * CTA fixo do mobile.
 *
 * Aparece depois que o hero sai da viewport e some de novo se a visitante
 * voltar ao topo. Some por completo a partir de 1024px, onde o CTA do
 * header já cumpre o papel.
 *
 * Recolhido, usa visibility: hidden — some da árvore de acessibilidade e
 * sai da ordem de tabulação, sem duplicar o CTA para quem navega por
 * teclado ou leitor de tela.
 */
export function StickyCTA({ visible }: Props) {
  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-wm-border bg-wm-bg px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 transition-[transform,visibility] duration-300 ease-wm lg:hidden',
        visible ? 'visible translate-y-0' : 'invisible translate-y-full',
      )}
    >
      <Button href={site.checkoutUrl} size="md" full>
        {site.ctaPrimary}
      </Button>
    </div>
  );
}
