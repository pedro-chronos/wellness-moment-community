import { site } from '../content/site';
import { Logo } from './ui/Logo';
import { Pending } from './ui/Pending';

/*
 * Rodapé.
 *
 * Redes sociais e páginas legais ainda não têm destino: aparecem como
 * pendências explícitas em vez de links mortos. O espaço extra na base
 * em telas pequenas evita que o CTA fixo cubra o conteúdo.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-wm-surface-deep px-5 pb-28 pt-16 text-wm-invert sm:px-8 lg:px-10 lg:pb-16 lg:pt-20">
      <div className="mx-auto w-full max-w-container">
        <div className="grid gap-12 border-b border-wm-border-invert pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="white" height={38} className="-ml-[10px]" />
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-3">
            <p className="font-sans text-eyebrow font-semibold uppercase text-wm-secondary">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[28px] items-center text-body text-wm-invert-muted transition-colors duration-200 ease-wm hover:text-wm-invert"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="font-sans text-eyebrow font-semibold uppercase text-wm-secondary">
              Redes sociais
            </p>
            <ul className="mt-5 space-y-3">
              {site.footer.social.map((item) => (
                <li key={item.label} className="text-body text-wm-invert-muted">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[28px] items-center transition-colors duration-200 ease-wm hover:text-wm-invert"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="flex flex-col items-start gap-1.5">
                      {item.label}
                      <Pending tone="dark" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-sans text-eyebrow font-semibold uppercase text-wm-secondary">Legal</p>
            <ul className="mt-5 space-y-3">
              {site.footer.legal.map((item) => (
                <li key={item.label} className="text-body text-wm-invert-muted">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="inline-flex min-h-[28px] items-center transition-colors duration-200 ease-wm hover:text-wm-invert"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="flex flex-col items-start gap-1.5">
                      {item.label}
                      <Pending tone="dark" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="pt-8 font-sans text-small text-wm-invert-muted">
          © {year} {site.footer.copyrightHolder}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
