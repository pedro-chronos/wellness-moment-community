import { useEffect, useState } from 'react';

/**
 * Retorna true quando a página passou de um deslocamento vertical.
 *
 * Alimenta dois comportamentos: o header ganhar fundo sólido e o CTA
 * sticky do mobile aparecer depois que o hero sai da viewport.
 */
export function useScrolledPast(offset: number) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      setPassed(window.scrollY > offset);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [offset]);

  return passed;
}
