/* =========================================================================
   WELLNESS MOMENT COMMUNITY — CONFIGURAÇÃO CENTRAL DE CONTEÚDO

   Todo texto, link, preço e flag da landing page vive neste arquivo.
   Nenhum componente contém copy fixa. Para alterar a página, altere aqui.

   REGRA DO PROJETO: nada de informação inventada.
   Onde o dado real ainda não existe, o valor é `null` e a interface
   renderiza [PENDENTE DEFINIÇÃO] de forma visível.
   ========================================================================= */

export const PENDING_LABEL = '[PENDENTE DEFINIÇÃO]';

/** Um link cujo destino real ainda não foi definido. */
export type MaybeUrl = string | null;

/** Peso do bloco dentro do mosaico editorial da seção 03. */
export type BenefitVariant = 'feature' | 'accent' | 'default' | 'wide';

export interface Benefit {
  index: string;
  title: string;
  body: string;
  variant: BenefitVariant;
}

export interface EcosystemDoor {
  label: string;
  body: string;
}

export interface Step {
  index: string;
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  /** `null` → renderiza [PENDENTE DEFINIÇÃO]. Nunca preencher com suposição. */
  answer: string | null;
  /** Complemento do marcador de pendência, quando `answer` é null. */
  pendingNote?: string;
  /** Item só aparece se `site.launchOffer.enabled` for true. */
  requiresLaunchOffer?: boolean;
}

/**
 * Regra de cancelamento da plataforma — ainda não definida.
 * Declarada fora do objeto para alimentar, de uma vez só, a chave
 * `site.cancellationRule` e a resposta correspondente no FAQ.
 */
const cancellationRule: string | null = null;

export interface MediaPlaceholder {
  /** Rótulo visível no layout enquanto a imagem real não existe. */
  label: string;
  /** Descrição do que a foto final precisa mostrar. Vira o alt real. */
  alt: string;
  /** Proporção usada pelo bloco de placeholder e pela imagem definitiva. */
  ratio: string;
  /** Caminho do arquivo final. `null` enquanto a fotografia não existir. */
  src: string | null;
}

export const site = {
  /* ---------------------------------------------------------------------
     CONVERSÃO
     --------------------------------------------------------------------- */
  // Link de pagamento. Alimenta TODOS os CTAs primários da página de uma
  // vez: header, hero, fim dos benefícios, card de assinatura, fechamento
  // e o CTA fixo do mobile. Todos abrem em nova aba.
  checkoutUrl: 'https://invoice.infinitepay.io/plans/bewellness/joNwTNH1JZ',
  brandFormUrl: null as MaybeUrl, // [PENDENTE DEFINIÇÃO] — formulário de marcas

  ctaPrimary: 'QUERO FAZER PARTE',
  ctaSecondary: 'QUERO SER UMA MARCA PARCEIRA',

  /** `null` → renderiza [PENDENTE DEFINIÇÃO] no card de assinatura. */
  price: null as string | null,
  priceInterval: '/mês',

  launchOffer: {
    enabled: true,
    text: 'As 20 primeiras assinantes recebem um presente exclusivo de boas-vindas.',
  },

  /** `null` → renderiza [PENDENTE DEFINIÇÃO] no FAQ. Não inventar a regra. */
  cancellationRule,

  /* ---------------------------------------------------------------------
     META / SEO
     --------------------------------------------------------------------- */
  meta: {
    siteName: 'Wellness Moment Community',
    title: 'Wellness Moment Community — assinatura mensal para mulheres',
    description:
      'Um espaço exclusivo para mulheres que querem transformar bem-estar em estilo de vida: conteúdo, experiências, encontros, benefícios e uma comunidade que caminha junto.',
    url: 'https://wellnessjourney.com.br',
    /** `null` → imagem Open Graph ainda não produzida. */
    ogImage: null as string | null,
  },

  /* ---------------------------------------------------------------------
     LOGO — três variações esperadas em /public/brand/
     Se o arquivo não existir, o componente Logo exibe um placeholder
     legível em vez de uma imagem quebrada.
     --------------------------------------------------------------------- */
  logo: {
    /** Lockup completo colorido. Uso principal, sobre fundos claros. */
    full: '/brand/wellness-moment-community-lockup.png',
    /** Monocromático verde escuro, sem "MOMENT". Header e espaços reduzidos. */
    mono: '/brand/wellness-moment-community-mono.png',
    /** Versão branca. Fundos escuros ou sobre fotografia. */
    white: '/brand/wellness-moment-community-branca.png',
    alt: 'Wellness Moment Community',
  },

  /* ---------------------------------------------------------------------
     NAVEGAÇÃO
     --------------------------------------------------------------------- */
  nav: [
    { label: 'O conceito', href: '#conceito' },
    { label: 'A comunidade', href: '#comunidade' },
    { label: 'Ecossistema', href: '#ecossistema' },
    { label: 'Assinatura', href: '#assinatura' },
    { label: 'Dúvidas', href: '#faq' },
  ],

  /* =====================================================================
     SEÇÃO 01 — HERO
     ===================================================================== */
  hero: {
    eyebrow: 'WELLNESS MOMENT COMMUNITY',
    headline: ['O Wellness Moment não termina quando o evento acaba.', 'Ele continua com você.'],
    subheadline:
      'Um espaço exclusivo para mulheres que querem transformar bem-estar em estilo de vida — com conteúdo, experiências, encontros, benefícios e uma comunidade que caminha junto.',
    tagline: 'A jornada continua aqui.',
    microcopy: 'Assinatura mensal • Comunidade exclusiva • Benefícios especiais',
    // O hero não tem bloco visual: a marca vive no header e o topo da
    // página é só tipografia e respiro.
  },

  /* =====================================================================
     SEÇÃO 02 — O CONCEITO
     ===================================================================== */
  concept: {
    eyebrow: 'O CONCEITO',
    title: 'Você viveu o momento. Agora, faça dele parte da sua vida.',
    body: [
      'O Wellness Moment nasceu para criar pausas, despertar consciência e incentivar pequenas mudanças que fazem diferença na forma como vivemos.',
      'Mas sabemos que uma experiência não transforma uma rotina sozinha.',
      'É por isso que criamos a Wellness Moment Community. Um ambiente fechado para continuar essa jornada, criar conexões, ter acesso a experiências exclusivas e, principalmente, não voltar para a rotina de sempre depois de viver um momento tão especial.',
    ],
    highlight: ['Porque wellness não é um evento.', 'É uma escolha que você faz todos os dias.'],
    media: {
      label: '[FOTO EXPERIÊNCIA]',
      alt: 'Duas mulheres à mesa durante uma experiência Wellness Moment, em conversa, com café e comida servidos.',
      ratio: '2 / 3',
      src: '/fotos/experiencia-mesa.jpg',
    } as MediaPlaceholder,
  },

  /* =====================================================================
     SEÇÃO 03 — O QUE VOCÊ ENCONTRA DENTRO
     ===================================================================== */
  benefits: {
    eyebrow: 'O QUE VOCÊ ENCONTRA DENTRO',
    title: ['Muito mais do que uma comunidade.', 'Um ecossistema pensado para você.'],
    items: [
      {
        index: '01',
        title: 'Descontos exclusivos',
        body: 'Benefícios especiais e condições diferenciadas com marcas e parceiros do universo Wellness Moment. Experimente novos produtos e serviços com vantagens que não estarão disponíveis para o público geral.',
        variant: 'feature',
      },
      {
        index: '02',
        title: 'Acessos e experiências exclusivas',
        body: 'Acesso antecipado ou exclusivo a experiências, eventos, ativações e oportunidades desenvolvidas pelo Wellness Moment e por marcas parceiras.',
        variant: 'accent',
      },
      {
        index: '03',
        title: 'Sorteios mensais',
        body: 'Todos os meses, novas possibilidades de ganhar: produtos, experiências, vouchers, serviços, convites e presentes.',
        variant: 'default',
      },
      {
        index: '04',
        title: 'Condições especiais nas edições Wellness Moment',
        body: 'Acesso antecipado, condições especiais e descontos exclusivos para participar das próximas edições.',
        variant: 'default',
      },
      {
        index: '05',
        title: 'Conteúdos exclusivos',
        body: 'Mente, corpo, rotina, autocuidado, carreira, dinheiro, relacionamentos e estilo de vida.',
        variant: 'default',
      },
      {
        index: '06',
        title: 'Jornada Wellness',
        body: 'Acesso pelo aplicativo, com conteúdos, ferramentas, desafios e atualizações para acompanhar sua evolução ao longo do tempo.',
        variant: 'wide',
      },
    ] as Benefit[],
  },

  /* =====================================================================
     SEÇÃO 04 — O ECOSSISTEMA
     ===================================================================== */
  ecosystem: {
    eyebrow: 'O ECOSSISTEMA',
    headline: ['Você não está entrando em um grupo.', 'Está entrando em um ecossistema.'],
    subtitle: 'UM LUGAR PARA CONSUMIR. CONECTAR. CRIAR. COLABORAR.',
    doors: [
      {
        label: 'PARA VOCÊ',
        body: 'Benefícios, conteúdo, experiências, encontros, autocuidado e conexões.',
      },
      {
        label: 'PARA AS MARCAS',
        body: 'Visibilidade, ativações, relacionamento e acesso a uma comunidade qualificada de mulheres.',
      },
      {
        label: 'PARA AS EMPREENDEDORAS',
        body: 'Networking, oportunidades de parceria, participação em eventos e possibilidade de apresentar seus negócios para a comunidade.',
      },
    ] as EcosystemDoor[],
    closing:
      'Uma comunidade de mulheres conectadas por um mesmo propósito, onde wellness encontra lifestyle, experiências, negócios e conexão.',
  },

  /* =====================================================================
     SEÇÃO 05 — JORNADA WELLNESS
     ===================================================================== */
  app: {
    eyebrow: 'JORNADA WELLNESS',
    headline: 'Sua Jornada Wellness, sempre com você.',
    body: 'Um aplicativo pensado para acompanhar sua evolução, organizar sua jornada e tornar seus hábitos mais presentes no dia a dia. Com atualizações e novas funcionalidades ao longo do tempo.',
    highlight: ['Sua jornada não fica parada.', 'Ela evolui com você.'],
    media: {
      label: '[MOCKUP APLICATIVO]',
      alt: 'Espaço reservado para a captura de tela real do aplicativo Jornada Wellness.',
      ratio: '9 / 19.5',
      src: null,
    } as MediaPlaceholder,
  },

  /* =====================================================================
     SEÇÃO 06 — PERTENCIMENTO
     ===================================================================== */
  belonging: {
    eyebrow: 'PERTENCIMENTO',
    title: 'Você não precisa fazer tudo sozinha.',
    body: [
      'Existe uma diferença entre consumir conteúdo e fazer parte de uma comunidade. Aqui, você encontra mulheres que também estão buscando uma vida mais leve, consciente, saudável e intencional.',
      'Mulheres para trocar experiências. Para compartilhar descobertas. Para celebrar conquistas. Para incentivar umas às outras.',
    ],
    closing: 'Um espaço onde você pode chegar como está — e continuar se tornando quem deseja ser.',
    media: {
      label: '[FOTO COMUNIDADE]',
      alt: 'Fotografia de um grupo de mulheres em conversa durante um encontro da comunidade.',
      ratio: '4 / 5',
      src: null,
    } as MediaPlaceholder,
  },

  /* =====================================================================
     SEÇÃO 07 — TODO MÊS TEM ALGO NOVO
     Categorias de renovação. Deliberadamente sem calendário: não existe
     cronograma definido e nenhum mês pode ser inventado aqui.
     ===================================================================== */
  monthly: {
    eyebrow: 'RECORRÊNCIA',
    headline: 'Todo mês, um novo motivo para continuar aqui.',
    categories: [
      'Novos conteúdos',
      'Novas experiências',
      'Novos parceiros e benefícios',
      'Sorteios mensais',
      'Encontros exclusivos',
      'Atualizações na Jornada Wellness',
      'Desafios e ativações',
      'Oportunidades de conexão',
      'Surpresas para as participantes',
    ],
    message: ['Você entra uma vez.', 'E a experiência continua todos os meses.'],
    media: {
      label: '[FOTO ENCONTRO]',
      alt: 'Fotografia de um encontro da comunidade: mesa posta, conversa e movimento entre as participantes.',
      ratio: '16 / 9',
      src: null,
    } as MediaPlaceholder,
  },

  /* =====================================================================
     SEÇÃO 08 — PARA QUEM É
     ===================================================================== */
  audience: {
    eyebrow: 'PARA QUEM É',
    title: 'A Wellness Moment Community é para você que…',
    items: [
      'Quer colocar o autocuidado na agenda — e não apenas na lista de desejos.',
      'Busca uma rotina mais equilibrada.',
      'Quer cuidar da mente, do corpo e da sua energia.',
      'Gosta de experiências, encontros e novas conexões.',
      'Acredita que pequenas mudanças podem transformar uma vida.',
      'Quer estar perto de mulheres que compartilham dessa mesma intenção.',
      'Viveu o Wellness Moment e quer continuar essa jornada.',
      'Ou simplesmente sente que está na hora de começar.',
    ],
    closing:
      'Se você acredita que bem-estar não deveria ser um evento pontual, você encontrou o seu lugar.',
    cadence: ['Do evento para a rotina.', 'Da inspiração para a ação.', 'Do momento para o movimento.'],
  },

  /* =====================================================================
     SEÇÃO 09 — ASSINATURA
     ===================================================================== */
  pricing: {
    eyebrow: 'ASSINATURA',
    title: 'Seu próximo Wellness Moment pode começar agora.',
    // O nome da comunidade no card vem do lockup completo da marca
    // (site.logo.full), não de texto — é a aplicação principal da logo.
    cardSubtitle: 'Assinatura mensal',
    features: [
      'Comunidade exclusiva',
      'Benefícios e descontos',
      'Experiências exclusivas',
      'Conteúdos',
      'Sorteios mensais',
      'Jornada Wellness',
      'Condições especiais em eventos',
      'Novidades todos os meses',
    ],
  },

  /* =====================================================================
     SEÇÃO 10 — COMO FUNCIONA
     ===================================================================== */
  howItWorks: {
    eyebrow: 'COMO FUNCIONA',
    title: 'Quatro passos, do primeiro clique ao mês seguinte.',
    steps: [
      {
        index: '01',
        title: 'ASSINE',
        body: 'Escolha sua assinatura mensal e faça parte da Wellness Moment Community.',
      },
      {
        index: '02',
        title: 'ENTRE',
        body: 'Você receberá as instruções para acessar a comunidade e todos os seus benefícios.',
      },
      {
        index: '03',
        title: 'VIVA',
        body: 'Explore os conteúdos, participe dos encontros, aproveite os benefícios e conecte-se com outras mulheres.',
      },
      {
        index: '04',
        title: 'CONTINUE',
        body: 'Todos os meses, novas experiências, conteúdos, benefícios e surpresas esperam por você.',
      },
    ] as Step[],
  },

  /* =====================================================================
     SEÇÃO 11 — MARCAS E EMPREENDEDORAS (conversão secundária)
     ===================================================================== */
  brandPartner: {
    eyebrow: 'MARCAS E EMPREENDEDORAS',
    title: 'Sua marca também pode fazer parte desse movimento.',
    body: 'A Wellness Moment Community será um espaço de conexão entre mulheres, marcas e negócios que acreditam em um estilo de vida mais consciente. Empresárias e marcas interessadas poderão se candidatar para:',
    items: [
      'Patrocinar experiências do Wellness Moment',
      'Participar do Wellness Week dentro da comunidade',
      'Criar ativações exclusivas para as membros',
      'Oferecer benefícios e descontos para a comunidade',
      'Apresentar produtos e serviços',
      'Criar experiências de marca',
      'Gerar conexões com outras empreendedoras',
    ],
  },

  /* =====================================================================
     SEÇÃO 12 — FAQ
     ===================================================================== */
  faq: {
    eyebrow: 'DÚVIDAS',
    title: 'Antes de você decidir.',
    items: [
      {
        question: 'A comunidade é exclusiva para quem participou do Wellness Moment?',
        answer:
          'Não. A comunidade é aberta para mulheres que desejam fazer parte desse movimento, independentemente de terem participado de uma edição anterior.',
      },
      {
        question: 'A assinatura é mensal?',
        answer: 'Sim. A comunidade funciona através de uma assinatura mensal.',
      },
      {
        // Depende de `cancellationRule`, ainda não definida.
        // NÃO preencher com suposição.
        question: 'Posso cancelar quando quiser?',
        answer: cancellationRule,
        pendingNote: 'regra de cancelamento da plataforma',
      },
      {
        question: 'Os encontros são presenciais?',
        answer:
          'A comunidade poderá contar com encontros presenciais e experiências exclusivas, além de ativações online.',
      },
      {
        question: 'Como recebo os benefícios e descontos?',
        answer:
          'As participantes terão acesso às condições e instruções dentro da área exclusiva da comunidade.',
      },
      {
        question: 'O aplicativo da Jornada Wellness está incluso?',
        answer:
          'Sim. A Jornada Wellness fará parte da experiência da comunidade, com atualizações e melhorias contínuas.',
      },
      {
        question: 'Como funciona o brinde das primeiras 20?',
        answer:
          'As 20 primeiras assinantes receberão um brinde exclusivo de boas-vindas, conforme disponibilidade e regras da campanha.',
        requiresLaunchOffer: true,
      },
    ] as FaqItem[],
  },

  /* =====================================================================
     SEÇÃO 13 — FECHAMENTO
     ===================================================================== */
  finalCta: {
    eyebrow: 'SEU MOMENTO CONTINUA',
    headline: 'Seu Wellness Moment não precisa terminar aqui.',
    body: [
      'Talvez o que você viveu naquele dia tenha sido só o começo. Agora existe um espaço para continuar.',
      'Para cuidar. Para aprender. Para compartilhar. Para se conectar. Para experimentar. Para evoluir.',
    ],
    closing: ['Bem-vinda à Wellness Moment Community.', 'Seu momento continua aqui.'],
  },

  /* =====================================================================
     FOOTER
     ===================================================================== */
  footer: {
    /** URLs de redes sociais ainda não definidas. */
    social: [
      { label: 'Instagram', href: null as MaybeUrl },
      { label: 'LinkedIn', href: null as MaybeUrl },
    ],
    legal: [
      { label: 'Política de Privacidade', href: null as MaybeUrl },
      { label: 'Termos de Uso', href: null as MaybeUrl },
    ],
    copyrightHolder: 'Wellness Moment',
  },
};

export type Site = typeof site;

/** Itens do FAQ já filtrados pela flag da oferta de lançamento. */
export const visibleFaqItems = site.faq.items.filter(
  (item) => !item.requiresLaunchOffer || site.launchOffer.enabled,
);
