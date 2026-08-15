import { useEffect, useRef, useState } from 'react';

interface Options {
  /** Margem do observador. Adia o disparo até o elemento entrar de fato. */
  rootMargin?: string;
  threshold?: number;
  /** Se false, o elemento volta ao estado inicial ao sair da viewport. */
  once?: boolean;
}

/**
 * Observa a entrada de um elemento na viewport.
 *
 * Usado pelo reveal das seções e pelo desenho progressivo do fio.
 * Se IntersectionObserver não existir no ambiente, retorna `true` de
 * imediato: nenhum conteúdo da página pode depender da animação para
 * ser visível.
 */
export function useInView<T extends Element>({
  rootMargin = '0px 0px -12% 0px',
  threshold = 0,
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    let delivered = false;

    const observer = new IntersectionObserver(
      (entries) => {
        delivered = true;
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);

    // Rede de segurança. O observador só entrega callbacks quando a página
    // é de fato renderizada — uma aba aberta em segundo plano, por exemplo,
    // pode ficar sem nenhuma entrega. Como o estado inicial é opacity: 0,
    // isso deixaria a landing page em branco. Se nada chegou, o conteúdo
    // aparece assim mesmo: página sem animação é muito melhor do que
    // página vazia.
    const fallback = window.setTimeout(() => {
      if (!delivered) setInView(true);
    }, 1500);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [rootMargin, threshold, once]);

  return { ref, inView };
}
