import { useInView } from '../../hooks/useInView';

interface Props {
  /** Marca um nó no topo do trecho — usado no início de cada seção. */
  node?: boolean;
}

/*
 * O FIO — elemento-assinatura da página.
 *
 * Uma linha vertical de 1px que atravessa a página inteira. Cada seção
 * desenha o seu trecho; como as seções são contíguas, a linha nunca se
 * interrompe. O trecho "vivo" em sage cresce conforme a seção entra na
 * viewport, e na seção do ecossistema o fio se ramifica em três.
 *
 * É a tese da marca desenhada: o momento não termina, ele continua.
 * Puramente decorativo — `aria-hidden`, sem eventos de ponteiro, e
 * estático quando o sistema pede movimento reduzido.
 */
export function Thread({ node = true }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '0px 0px -25% 0px' });

  return (
    <div ref={ref} aria-hidden="true">
      <div className="wm-thread" data-visible={inView} />
      {node && <span className="wm-thread-node" style={{ top: '0px' }} />}
    </div>
  );
}
