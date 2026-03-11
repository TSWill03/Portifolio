import type { PortfolioData } from '@/types/portfolio'

export const portfolioData: PortfolioData = {
  seo: {
    title: 'Seu Nome | Portifolio premium e sites personalizaveis',
    description:
      'Portifolio profissional com projetos, certificados, galeria multimidia e proposta comercial para transformar a propria presenca digital em produto.',
    keywords: [
      'portifolio pessoal',
      'site profissional',
      'site personalizado',
      'desenvolvedor web',
      'produto digital sob encomenda',
      'portfolio premium',
    ],
    siteUrl: 'https://seunome.dev',
    ogImage: '/og-cover.svg',
  },
  theme: {
    colors: {
      background: '#07111d',
      backgroundAlt: '#0d1830',
      surface: 'rgba(10, 24, 40, 0.82)',
      surfaceAlt: '#11233b',
      text: '#edf4ff',
      muted: '#98adca',
      primary: '#5eead4',
      secondary: '#ffbe78',
      accent: '#8db0ff',
      border: 'rgba(136, 162, 198, 0.2)',
      success: '#5ed88e',
      warning: '#ffbe78',
      overlay: 'rgba(7, 17, 29, 0.68)',
    },
    gradients: {
      hero:
        'linear-gradient(135deg, rgba(94, 234, 212, 0.24), rgba(141, 176, 255, 0.18) 55%, rgba(255, 190, 120, 0.2))',
      spotlight:
        'radial-gradient(circle at 10% 10%, rgba(94, 234, 212, 0.15), transparent 26%), radial-gradient(circle at 85% 15%, rgba(141, 176, 255, 0.18), transparent 32%), radial-gradient(circle at 50% 85%, rgba(255, 190, 120, 0.12), transparent 28%)',
      card:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
    },
    fonts: {
      display: "'Space Grotesk', sans-serif",
      body: "'Manrope', sans-serif",
    },
    layout: {
      maxWidth: '1180px',
      radius: '30px',
    },
  },
  header: {
    cta: {
      label: 'Agendar conversa',
      href: '#contact',
      variant: 'primary',
      icon: 'phone',
    },
  },
  navigation: [
    { label: 'Inicio', target: 'hero' },
    { label: 'Sobre', target: 'about' },
    { label: 'Projetos', target: 'projects' },
    { label: 'Planos', target: 'roadmap' },
    { label: 'Credenciais', target: 'credentials' },
    { label: 'Midia', target: 'gallery' },
    { label: 'Servico', target: 'services' },
    { label: 'Contato', target: 'contact' },
  ],
  sectionOrder: [
    'hero',
    'about',
    'projects',
    'roadmap',
    'credentials',
    'gallery',
    'services',
    'contact',
  ],
  hero: {
    eyebrow: 'Portifolio pessoal + produto digital sob encomenda',
    name: 'Seu Nome Studio',
    role: 'Desenvolvedor(a) web focado(a) em experiencias digitais premium',
    title:
      'Uma presenca online completa para mostrar sua evolucao e vender o seu valor.',
    description:
      'Este projeto foi pensado para funcionar ao mesmo tempo como portifolio autoral e como demonstracao comercial de um produto personalizavel para clientes, especialistas e negocios criativos.',
    subtitle:
      'Estrutura modular, visual moderno, manutencao simples e conteudo 100% editavel a partir de um unico arquivo.',
    availability: 'Disponivel para novos projetos e personalizacoes',
    actions: [
      {
        label: 'Falar comigo',
        href: '#contact',
        variant: 'primary',
        icon: 'whatsapp',
      },
      {
        label: 'Ver projetos',
        href: '#projects',
        variant: 'secondary',
        icon: 'folder',
      },
      {
        label: 'Abrir curriculo',
        href: '/curriculo-demo.html',
        variant: 'ghost',
        icon: 'download',
      },
    ],
    badges: [
      'React',
      'TypeScript',
      'Design Systems',
      'UI Premium',
      'SEO Basico',
      'Acessibilidade',
    ],
    metrics: [
      {
        value: '12+',
        label: 'projetos organizados em cards',
        detail: 'com status, links, galeria e video',
      },
      {
        value: '100%',
        label: 'conteudo editavel por configuracao',
        detail: 'textos, cores, links e ordem das secoes',
      },
      {
        value: '1 produto',
        label: 'pronto para ser vendido',
        detail: 'modelo adaptavel para outros clientes',
      },
    ],
    image: {
      src: '/media/avatar-tech.svg',
      alt: 'Ilustracao abstrata representando um portifolio digital premium',
    },
    feature: {
      title: 'O mesmo formato pode virar um produto comercial',
      description:
        'Cada bloco foi estruturado para ser reaproveitado em entregas sob medida para profissionais e empresas que precisam de um site elegante, confiavel e facil de atualizar.',
      items: [
        'Troca simples de identidade visual, fontes e imagens.',
        'Projetos, certificados e midia carregados a partir de dados estruturados.',
        'Secoes reorganizaveis para criar desde um portifolio ate uma vitrine comercial.',
      ],
    },
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/seuusuario', icon: 'github' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/seuusuario',
        icon: 'linkedin',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/seuusuario',
        icon: 'instagram',
      },
    ],
  },
  about: {
    eyebrow: 'Sobre mim',
    title: 'Criatividade, organizacao e foco em entrega com valor comercial.',
    description:
      'A proposta deste portifolio e mostrar nao apenas trabalhos concluidos, mas tambem a capacidade de planejar experiencias digitais que podem crescer com novas secoes, cases, certificados e materiais multimidia.',
    paragraphs: [
      'Atuo unindo desenvolvimento front-end, organizacao de informacao e direcao visual para criar paginas que transmitam profissionalismo sem parecerem genericas.',
      'Penso cada projeto como um ativo de negocio: ele precisa apresentar resultados, destacar o processo, valorizar a marca e facilitar futuras atualizacoes sem reescrever tudo do zero.',
    ],
    skills: [
      'Arquitetura de interfaces',
      'Desenvolvimento responsivo',
      'Organizacao de conteudo',
      'Componentizacao',
      'UX writing',
      'Landing pages e portifolios premium',
    ],
    technologies: [
      {
        label: 'Front-end',
        items: ['React', 'TypeScript', 'Vite', 'HTML semantico', 'CSS moderno'],
      },
      {
        label: 'Design e UX',
        items: ['Figma', 'Design tokens', 'Wireframes', 'Sistemas visuais'],
      },
      {
        label: 'Performance',
        items: ['SEO basico', 'Lazy loading', 'Acessibilidade basica', 'Boas praticas'],
      },
      {
        label: 'Fluxo de entrega',
        items: ['Git', 'Deploy simplificado', 'Escalabilidade', 'Documentacao'],
      },
    ],
    highlights: [
      {
        icon: 'layers',
        title: 'Estrutura escalavel',
        description:
          'Secoes independentes e dados centralizados para adicionar novos cases, cursos ou servicos sem retrabalho.',
      },
      {
        icon: 'palette',
        title: 'Identidade personalizavel',
        description:
          'Cores, fontes e atmosfera visual podem ser adaptadas para diferentes perfis profissionais.',
      },
      {
        icon: 'workflow',
        title: 'Pensado como produto',
        description:
          'A mesma base pode virar um modelo comercial para atender outros clientes com rapidez e consistencia.',
      },
    ],
  },
  projects: {
    eyebrow: 'Projetos em andamento e concluidos',
    title: 'Cases apresentados com contexto, progresso e potencial de expansao.',
    description:
      'Cada projeto abaixo pode exibir imagem principal, galeria opcional, status de execucao, tecnologias, links externos e um bloco de detalhes para aprofundar o raciocinio de produto.',
    items: [
      {
        id: 'portfolio-premium',
        title: 'Portifolio Productized',
        description:
          'Site autoral com estrutura modular para exibir trajetoria, provas de capacidade e oferta de servico em um unico fluxo.',
        status: 'completed',
        phase: 'Lancado em marco de 2026',
        technologies: ['React', 'TypeScript', 'Arquitetura por componentes', 'SEO'],
        cover: '/media/project-portfolio.svg',
        coverAlt: 'Mockup de um portifolio premium em telas sobrepostas',
        githubUrl: 'https://github.com/seuusuario/portfolio-productized',
        demoUrl: 'https://seusite.com/portfolio-productized',
        videoEmbedUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
        gallery: [
          {
            src: '/media/gallery-dashboard.svg',
            alt: 'Tela com grade de projetos e estatisticas',
          },
          {
            src: '/media/gallery-wireframe.svg',
            alt: 'Wireframe de uma pagina premium com cards',
          },
        ],
        highlights: [
          'Fluxo narrativo pensado para converter visitantes em contatos.',
          'Secoes editaveis por configuracao, sem depender de CMS.',
          'Visual sofisticado com gradientes, vidro fosco e contrastes fortes.',
        ],
        details:
          'Este case demonstra como um portifolio pode servir como vitrine profissional e prototipo de um produto white-label, pronto para ser adaptado a outras marcas.',
      },
      {
        id: 'ops-dashboard',
        title: 'Dashboard de Operacoes Criativas',
        description:
          'Painel para acompanhar tarefas, entregas e indicadores de uma pequena operacao digital em crescimento.',
        status: 'in-progress',
        phase: 'Sprint atual: filtros e automacoes',
        technologies: ['React', 'Charts', 'Design tokens', 'REST API'],
        cover: '/media/project-dashboard.svg',
        coverAlt: 'Interface de dashboard com graficos e cards de status',
        githubUrl: 'https://github.com/seuusuario/ops-dashboard',
        demoUrl: 'https://dashboard-demo.seusite.com',
        gallery: [
          {
            src: '/media/gallery-studio.svg',
            alt: 'Ambiente digital com cards de tarefas e status',
          },
          {
            src: '/media/gallery-launch.svg',
            alt: 'Tela com mockup de lancamento de produto',
          },
        ],
        highlights: [
          'Projeto em evolucao com foco em leitura rapida e priorizacao.',
          'Cards reaproveitaveis para equipes pequenas ou freelancers.',
          'Base visual pronta para dashboards SaaS e paineis internos.',
        ],
        details:
          'Aqui a proposta e transformar informacao operacional em uma experiencia limpa, segura e visualmente madura, com espaco para filtros, historico e automacoes futuras.',
      },
      {
        id: 'academy-hub',
        title: 'Hub de Cursos e Certificados',
        description:
          'Pagina institucional para organizar trilhas, certificados e provas sociais em uma interface clara e profissional.',
        status: 'completed',
        phase: 'Publicacao e integracao com novos cursos',
        technologies: ['Vite', 'TypeScript', 'Cards dinamicos', 'Responsividade'],
        cover: '/media/project-learning.svg',
        coverAlt: 'Layout de plataforma educacional com cards de cursos',
        githubUrl: 'https://github.com/seuusuario/academy-hub',
        demoUrl: 'https://academy.seusite.com',
        highlights: [
          'Separacao elegante entre cursos, certificados e cronograma.',
          'Estrutura pensada para incluir links, PDF e provas visuais.',
          'Foco em escaneabilidade tanto no desktop quanto no mobile.',
        ],
        details:
          'Este projeto serve como referencia para paginas de treinamento, comunidades e produtos educacionais que precisam exibir credenciais com mais sofisticacao.',
      },
      {
        id: 'future-scheduler',
        title: 'Agenda Inteligente para Atendimento',
        description:
          'Ideia planejada para oferecer um fluxo simples de captacao, agendamento e acompanhamento de novos clientes.',
        status: 'planned',
        phase: 'Pesquisa de escopo e viabilidade comercial',
        technologies: ['UX research', 'Integracoes', 'Automacao', 'WhatsApp'],
        cover: '/media/project-scheduler.svg',
        coverAlt: 'Conceito visual de agenda inteligente com calendario',
        demoUrl: 'https://seusite.com/agenda-inteligente',
        videoEmbedUrl: 'https://www.youtube.com/embed/eY52Zsg-KVI',
        highlights: [
          'Fluxo orientado a conversao e praticidade.',
          'Possibilidade de integrar formularios, CRM e lembretes.',
          'Produto pensado para profissionais liberais e estudios.',
        ],
        details:
          'Mesmo em fase planejada, o case ja deixa clara a direcao visual e o potencial de venda do produto, reforcando a maturidade do processo de concepcao.',
      },
    ],
  },
  roadmap: {
    eyebrow: 'Planejamentos e ideias futuras',
    title: 'Uma visao de roadmap que valoriza evolucao continua.',
    description:
      'Nem todo trabalho precisa estar finalizado para comunicar maturidade. Esta secao ajuda a mostrar direcao estrategica, proximos passos e oportunidades comerciais.',
    items: [
      {
        phase: 'Q2 2026',
        title: 'Template white-label para especialistas',
        description:
          'Adaptar esta base para um pacote que possa ser entregue com mais velocidade para consultores, mentores e pequenos estudios.',
        status: 'Em definicao',
        outcomes: ['Kit de secoes reaproveitaveis', 'Checklist de onboarding', 'Modo rapido de customizacao'],
      },
      {
        phase: 'Q3 2026',
        title: 'Painel simples para edicao de conteudo',
        description:
          'Estudar uma camada administrativa leve para clientes que prefiram atualizar textos e links sem abrir o codigo.',
        status: 'Pesquisa',
        outcomes: ['Mapeamento de campos', 'Estrutura de formularios', 'Sincronizacao com assets'],
      },
      {
        phase: 'Q3 2026',
        title: 'Biblioteca de blocos de prova social',
        description:
          'Criar novos componentes para depoimentos, numeros de resultado, cases resumidos e secao de FAQ.',
        status: 'Backlog priorizado',
        outcomes: ['Cards de depoimento', 'Variantes de destaque', 'Secao FAQ reutilizavel'],
      },
      {
        phase: 'Q4 2026',
        title: 'Pacote com manutencao recorrente',
        description:
          'Transformar a entrega em um servico continuo com suporte para novas secoes, atualizacoes e refinamentos visuais.',
        status: 'Validacao comercial',
        outcomes: ['Plano mensal', 'SLA basico', 'Documentacao de mudancas'],
      },
    ],
  },
  credentials: {
    eyebrow: 'Certificados e cursos',
    title: 'Credenciais apresentadas com contexto visual e facilidade de acesso.',
    description:
      'Os itens podem receber imagem, data, carga horaria, instituicao e link para certificado ou PDF. Isso ajuda a mostrar evolucao tecnica de forma organizada e profissional.',
    items: [
      {
        type: 'Curso',
        title: 'Formacao em React para interfaces escalaveis',
        institution: 'Plataforma de Ensino Exemplo',
        workload: '72 horas',
        date: 'Janeiro 2026',
        image: '/media/certificate-react.svg',
        imageAlt: 'Certificado estilizado de React',
        credentialUrl: 'https://seusite.com/certificados/react',
        summary:
          'Foco em componentizacao, fluxo de dados, organizacao de projeto e boas praticas de interface.',
      },
      {
        type: 'Certificado',
        title: 'UX e arquitetura de informacao',
        institution: 'Instituicao Criativa',
        workload: '40 horas',
        date: 'Outubro 2025',
        image: '/media/certificate-ux.svg',
        imageAlt: 'Certificado visual de UX e arquitetura',
        credentialUrl: 'https://seusite.com/certificados/ux',
        summary:
          'Estudos voltados para hierarquia visual, fluxo de conteudo e clareza de navegacao.',
      },
      {
        type: 'Curso',
        title: 'Acessibilidade e interfaces inclusivas',
        institution: 'Academia Digital',
        workload: '24 horas',
        date: 'Agosto 2025',
        image: '/media/certificate-accessibility.svg',
        imageAlt: 'Certificado com simbolo de acessibilidade',
        credentialUrl: 'https://seusite.com/certificados/a11y',
        summary:
          'Aplicacao pratica de contraste, semantica, navegacao por teclado e boas praticas para web.',
      },
      {
        type: 'Certificado',
        title: 'Fundamentos de cloud e deploy',
        institution: 'Programa Tech Cloud',
        workload: '18 horas',
        date: 'Maio 2025',
        image: '/media/certificate-cloud.svg',
        imageAlt: 'Certificado com elementos de cloud e deploy',
        credentialUrl: 'https://seusite.com/certificados/cloud',
        summary:
          'Capacitacao orientada a organizacao para deploy, versionamento e manutencao basica.',
      },
    ],
  },
  gallery: {
    eyebrow: 'Galeria multimidia',
    title: 'Imagens e videos para enriquecer a apresentacao de cada projeto.',
    description:
      'A galeria complementa os cards de projeto com visuais amplos, making of, wireframes e videos incorporados por link, mantendo a pagina flexivel para diferentes tipos de material.',
    images: [
      {
        title: 'Estudio visual do produto',
        description:
          'Peca visual que reforca o posicionamento premium da pagina e ajuda a construir atmosfera de marca.',
        src: '/media/gallery-studio.svg',
        alt: 'Painel visual de um estudio criativo com elementos digitais',
        tag: 'Imagem de apresentacao',
      },
      {
        title: 'Wireframe e planejamento',
        description:
          'Representacao do raciocinio por tras da distribuicao de conteudo e das areas de interacao.',
        src: '/media/gallery-wireframe.svg',
        alt: 'Wireframe de uma landing page premium',
        tag: 'Processo',
      },
      {
        title: 'Tela de lancamento',
        description:
          'Mockup que mostra como a mesma estrutura pode ganhar cara de produto comercial.',
        src: '/media/gallery-launch.svg',
        alt: 'Tela promocional de lancamento de um produto digital',
        tag: 'Apresentacao',
      },
      {
        title: 'Visao de dashboard',
        description:
          'Exemplo de composicao para interfaces mais orientadas a dados e acompanhamento de status.',
        src: '/media/gallery-dashboard.svg',
        alt: 'Dashboard com cards e indicadores',
        tag: 'Interface',
      },
    ],
    videos: [
      {
        title: 'Demo em video de navegacao',
        description:
          'Exemplo de espaco para incorporar uma apresentacao curta do projeto ou walkthrough comercial.',
        embedUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
      },
      {
        title: 'Apresentacao de produto customizavel',
        description:
          'Bloco util para mostrar prototipos, pitch de venda ou uma explicacao visual do servico.',
        embedUrl: 'https://www.youtube.com/embed/eY52Zsg-KVI',
      },
    ],
  },
  services: {
    eyebrow: 'Servicos e produto',
    title: 'Esta pagina tambem funciona como vitrine de um servico sob encomenda.',
    description:
      'O visitante entende nao apenas quem voce e, mas tambem o que pode contratar. A base foi estruturada para transmitir valor comercial de forma elegante e convincente.',
    offerLabel: 'Produto personalizavel',
    offerings: [
      {
        icon: 'sparkles',
        title: 'Portifolio premium',
        description:
          'Para profissionais que precisam apresentar projetos, experiencia, provas de capacidade e contatos em uma pagina mais sofisticada.',
        features: [
          'Hero personalizado',
          'Projetos dinamicos',
          'Certificados e cursos',
          'Links e redes sociais',
        ],
      },
      {
        icon: 'monitor',
        title: 'Site vitrine para servicos',
        description:
          'Versao focada em posicionamento comercial, com secoes de servico, diferenciais, processo e CTA forte.',
        features: [
          'Adaptacao da narrativa',
          'Secoes comerciais',
          'Ajuste de identidade visual',
          'Otimizacao para conversao',
        ],
      },
      {
        icon: 'shield',
        title: 'Pacote de evolucao',
        description:
          'Ideal para quem deseja uma base pronta para crescer com novos cases, materiais, paginas e atualizacoes visuais.',
        features: [
          'Documentacao de edicao',
          'Estrutura expansivel',
          'Apoio para novas secoes',
          'Entrega pronta para deploy',
        ],
      },
    ],
    customization: {
      title: 'Tudo foi pensado para ser facilmente adaptado a cada cliente.',
      description:
        'A mesma estrutura acomoda marcas pessoais, estudios criativos, especialistas e pequenos negocios sem exigir uma reconstrucao completa do projeto.',
      groups: [
        {
          title: 'Identidade visual',
          description:
            'Troque rapidamente o clima do site para combinar com a proposta de cada marca.',
          items: [
            'Cores principais, secundarias e tons de apoio',
            'Fontes de titulos e textos',
            'Gradientes, contraste e acabamento visual',
          ],
        },
        {
          title: 'Narrativa e secoes',
          description:
            'Reorganize a historia que o visitante enxerga e destaque o que gera mais valor.',
          items: [
            'Titulos, subtitulos e descricoes de todas as secoes',
            'Ordem de exibicao das secoes',
            'Botoes, links rapidos e CTA principal',
          ],
        },
        {
          title: 'Projetos e credenciais',
          description:
            'Mostre provas concretas de capacidade sem depender de um painel externo.',
          items: [
            'Projetos com status, galerias, GitHub, demo e video',
            'Certificados, cursos, imagens, links e PDFs',
            'Planejamentos e roadmap com proximos passos',
          ],
        },
        {
          title: 'Contato e conversao',
          description:
            'Adapte os canais de atendimento e a mensagem comercial para cada publico.',
          items: [
            'WhatsApp, e-mail, GitHub, LinkedIn e outras redes',
            'Mensagem inicial sugerida para o visitante',
            'Bloco de servicos sob encomenda e proposta comercial',
          ],
        },
      ],
    },
    differentiators: [
      'Conteudo separado da interface para facilitar manutencao.',
      'Componentes reutilizaveis que encurtam futuras expansoes.',
      'Visual com cara de produto real, nao de landing page generica.',
      'Codigo organizado para adaptar o mesmo projeto a diferentes clientes.',
    ],
    process: [
      {
        step: '01',
        title: 'Imersao rapida',
        description:
          'Coleta de referencias, objetivos, materiais e definicao do posicionamento que o site precisa comunicar.',
      },
      {
        step: '02',
        title: 'Estrutura e narrativa',
        description:
          'Organizacao das secoes, hierarquia das informacoes e distribuicao dos componentes que sustentam a experiencia.',
      },
      {
        step: '03',
        title: 'Design e implementacao',
        description:
          'Aplicacao da identidade visual, construcao responsiva e ajustes para performance, SEO e acessibilidade basica.',
      },
      {
        step: '04',
        title: 'Entrega pronta para evoluir',
        description:
          'Projeto com documentacao de edicao e base limpa para receber novos cases, imagens, links e refinamentos.',
      },
    ],
    cta: {
      label: 'Solicitar proposta',
      href: '#contact',
      variant: 'primary',
      icon: 'phone',
    },
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos transformar sua presenca digital em uma vitrine memoravel.',
    description:
      'Use esta secao para concentrar seus canais principais, estimular um contato rapido e deixar claro que o projeto pode ser contratado ou adaptado para outros cenarios.',
    availability:
      'Atendimento remoto, briefing por mensagem ou reuniao online e entregas pensadas para facilitar aprovacoes e evolucao do projeto.',
    quickMessage:
      'Ola! Vi seu portifolio e gostaria de conversar sobre um site personalizado.',
    methods: [
      {
        title: 'WhatsApp',
        value: '+55 11 99999-9999',
        href: 'https://wa.me/5511999999999?text=Ola!%20Vi%20seu%20portifolio%20e%20gostaria%20de%20conversar%20sobre%20um%20site%20personalizado.',
        icon: 'whatsapp',
        description: 'Canal ideal para um primeiro contato rapido e objetivo.',
      },
      {
        title: 'E-mail',
        value: 'contato@seunome.dev',
        href: 'mailto:contato@seunome.dev',
        icon: 'mail',
        description: 'Melhor opcao para orcamentos, materiais e informacoes detalhadas.',
      },
      {
        title: 'GitHub',
        value: 'github.com/seuusuario',
        href: 'https://github.com/seuusuario',
        icon: 'github',
        description: 'Repositorio e historico tecnico para quem quer aprofundar no codigo.',
      },
      {
        title: 'LinkedIn',
        value: 'linkedin.com/in/seuusuario',
        href: 'https://www.linkedin.com/in/seuusuario',
        icon: 'linkedin',
        description: 'Perfil profissional com networking, experiencia e atualizacoes.',
      },
    ],
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/seuusuario', icon: 'github' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/seuusuario',
        icon: 'linkedin',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/seuusuario',
        icon: 'instagram',
      },
      {
        label: 'Site',
        href: 'https://seunome.dev',
        icon: 'globe',
      },
    ],
    quickLinks: [
      {
        label: 'Chamar no WhatsApp',
        href: 'https://wa.me/5511999999999?text=Ola!%20Vi%20seu%20portifolio%20e%20gostaria%20de%20conversar%20sobre%20um%20site%20personalizado.',
        variant: 'primary',
        icon: 'whatsapp',
      },
      {
        label: 'Enviar e-mail',
        href: 'mailto:contato@seunome.dev',
        variant: 'secondary',
        icon: 'mail',
      },
    ],
  },
  footer: {
    note:
      'Projeto pensado para ser portifolio pessoal, demonstracao comercial e base reutilizavel para entregas futuras.',
    copyright: 'Seu Nome Studio. Todos os direitos reservados.',
  },
}
