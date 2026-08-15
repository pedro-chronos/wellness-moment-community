import { site } from '../content/site';
import { useInView } from '../hooks/useInView';
import { Eyebrow } from './ui/Eyebrow';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

/*
 * SEÇÃO 04 — O ECOSSISTEMA
 *
 * O momento-assinatura da página.
 *
 * O fio que atravessa o site inteiro chega aqui, se divide em três — para
 * você, para as marcas, para as empreendedoras — e volta a se unir na frase
 * de fechamento. É a tese da marca desenhada: não é um grupo, é um
 * ecossistema; e o que entra separado sai conectado.
 *
 * O desenho é decorativo. As três portas são compreensíveis sem ele, em
 * qualquer largura, e sem depender de hover ou de animação.
 */
function Branch({ direction }: { direction: 'split' | 'join' }) {
  const { ref, inView } = useInView<SVGSVGElement>({ rootMargin: '0px 0px -20% 0px' });

  // O viewBox de 1200 unidades cobre a largura do conteúdo. As três colunas
  // começam em x = 1, 400 e 800, de modo que cada traço termina exatamente
  // onde o texto da coluna começa. O tronco segue reto para a primeira
  // porta; as outras duas se desprendem dele.
  const paths =
    direction === 'split'
      ? ['M1 0 V 160', 'M1 40 C 1 112, 400 92, 400 160', 'M1 40 C 1 112, 800 92, 800 160']
      : ['M1 0 V 160', 'M400 0 C 400 68, 1 48, 1 120', 'M800 0 C 800 68, 1 48, 1 120'];

  return (
    <div className={`relative hidden lg:block ${direction === 'split' ? 'mt-12' : ''}`}>
      {/* Emenda entre o fio da página e o desenho ramificado. */}
      <span
        aria-hidden="true"
        className={`absolute -left-rail-lg h-px w-rail-lg bg-wm-thread-invert ${
          direction === 'split' ? 'top-0' : 'bottom-0'
        }`}
      />
      <svg
        ref={ref}
        data-visible={inView}
        className="wm-branch h-40 w-full overflow-visible"
        viewBox="0 0 1200 160"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
        style={{ '--wm-branch-length': '1400' } as React.CSSProperties}
      >
        {paths.map((d) => (
          <path
            key={d}
            d={d}
            stroke="var(--wm-secondary)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </div>
  );
}

export function EcosystemSection() {
  const { ecosystem } = site;

  return (
    <Section id="ecossistema" tone="dark" labelledBy="ecossistema-titulo">
      <Reveal className="max-w-5xl">
        <Eyebrow tone="dark">{ecosystem.eyebrow}</Eyebrow>

        <h2 id="ecossistema-titulo" className="mt-6 font-display text-display-xl text-wm-invert">
          <span className="block">{ecosystem.headline[0]}</span>
          <span className="block text-wm-accent">{ecosystem.headline[1]}</span>
        </h2>

        <p className="mt-8 font-sans text-eyebrow font-semibold uppercase text-wm-secondary">
          {ecosystem.subtitle}
        </p>
      </Reveal>

      <Branch direction="split" />

      <ul className="mt-12 grid gap-10 lg:mt-0 lg:grid-cols-3 lg:gap-8">
        {ecosystem.doors.map((door, index) => (
          <Reveal as="li" key={door.label} delay={index * 100} className="relative">
            {/* Conector para o fio quando o desenho ramificado está oculto. */}
            <span
              aria-hidden="true"
              className="absolute -left-rail top-3 h-px w-rail bg-wm-thread-invert lg:hidden"
            />
            <h3 className="font-sans text-eyebrow font-semibold uppercase text-wm-secondary">
              {door.label}
            </h3>
            <p className="wm-measure mt-4 text-lead text-wm-invert">{door.body}</p>
          </Reveal>
        ))}
      </ul>

      <Branch direction="join" />

      <Reveal className="mt-12 lg:mt-0">
        <p className="max-w-3xl font-display text-display-md text-wm-invert">{ecosystem.closing}</p>
      </Reveal>
    </Section>
  );
}
