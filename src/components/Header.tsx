import { site } from '../content/site';
import { useScrolledPast } from '../hooks/useScrolledPast';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';
import { cn } from './ui/cn';

/*
 * Header enxuto: a logo, as âncoras de seção no desktop e o CTA de
 * assinatura sempre acessível, em qualquer largura.
 *
 * Sem menu sanfonado no mobile — a página é uma leitura linear e o único
 * destino que importa ali é o checkout. Menos superfície, menos atrito.
 */
export function Header() {
  const scrolled = useScrolledPast(24);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow] duration-300 ease-wm',
        scrolled ? 'border-b border-wm-border bg-wm-bg' : 'border-b border-transparent bg-transparent',
      )}
    >
      {/* O lockup completo é empilhado em três linhas, então pede mais
          altura que uma logo horizontal. 80px de header acomodam 52px de
          marca com folga; a margem negativa compensa a área de proteção
          e alinha a logo à borda do container. */}
      <div className="mx-auto flex h-20 w-full max-w-container items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        {/* shrink-0: sem isto o link encolhe como flex item e esmaga a
            logo horizontalmente em larguras intermediárias. */}
        <a
          href="#topo"
          className="flex shrink-0 items-center"
          aria-label={`${site.meta.siteName} — início`}
        >
          <Logo variant="full" height={52} className="-ml-[15px]" />
        </a>

        <nav aria-label="Seções da página" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 font-sans text-small text-wm-muted transition-colors duration-200 ease-wm hover:text-wm-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Abaixo de 640px o CTA do header sairia por cima da logo. Ali a
            cobertura fica com o CTA do hero e, logo depois, com o sticky. */}
        <Button href={site.checkoutUrl} size="md" className="hidden shrink-0 sm:inline-flex">
          {site.ctaPrimary}
        </Button>
      </div>
    </header>
  );
}
