import { Locale } from '@/i18n/config';
import { socialLinks } from './config';

export interface ExpertiseItem {
  id: string;
  category: string;
  title: string;
  description: string;
  tech: string[];
  icon: string;
  color: 'yellow' | 'mint' | 'orange';
}

export interface ProjectItem {
  id: string;
  year: string;
  type: string;
  title: string;
  description: string;
  details: string;
  tech: string[];
  status: string;
  github: string;
  linkLabel?: string;
  color?: 'yellow' | 'mint' | 'orange';
}

export interface ExperimentItem {
  name: string;
  tech: string;
  description: string;
  color: 'yellow' | 'mint' | 'orange';
}

export interface TechCategory {
  title: string;
  color: 'yellow' | 'mint' | 'orange' | 'neutral';
  items: { name: string; detail: string }[];
}

export interface AboutValue {
  title: string;
  description: string;
}

export function getProfileTech(locale: Locale): string[] {
  const isES = locale === 'es';
  
  if (isES) {
    return ['React / Next.js', 'Node & Python', 'WebGL & Shaders', 'PostgreSQL'];
  }
  
  return ['React / Next.js', 'Node & Python', 'WebGL & Shaders', 'PostgreSQL'];
}

export function getBio(locale: Locale): string[] {
  const isES = locale === 'es';
  
  if (isES) {
    return [
      'Mi nombre es MayderC. Soy Bachiller en Ingeniería en Tecnologías de la Información y trabajo principalmente con TypeScript, tanto en frontend como en backend.',
      'En frontend uso React o Vue, con Tailwind CSS o SCSS para los estilos, y consumo APIs REST. En backend construyo APIs con Node.js y NestJS, y también he trabajado con Java y Spring Boot. Me manejo con MongoDB, SQL y ORMs, y uso Git y Docker a diario.',
      'Sigo aprendiendo: ahora estoy viendo AWS y microservicios. De vez en cuando armo proyectos personales con Python, IA (LLMs) y 3D con Three.js.'
    ];
  }
  
  return [
    'My name is MayderC. I hold a Bachelor\'s degree in Information Technology Engineering and I work mainly with TypeScript, on both frontend and backend.',
    'On the frontend I use React or Vue, with Tailwind CSS or SCSS for styling, and I consume REST APIs. On the backend I build APIs with Node.js and NestJS, and I\'ve also worked with Java and Spring Boot. I\'m comfortable with MongoDB, SQL and ORMs, and I use Git and Docker daily.',
    'I keep learning: right now I\'m looking into AWS and microservices. Now and then I build personal projects with Python, AI (LLMs) and 3D with Three.js.'
  ];
}

export function getExpertiseData(locale: Locale): ExpertiseItem[] {
  const isES = locale === 'es';
  
  if (isES) {
    return [
      {
        id: '01',
        category: 'FRONTEND',
        title: 'Frontend & Aplicaciones Web',
        description: 'Interfaces fluidas, componentes reutilizables y tipado seguro. Enfoque en velocidad de carga real, accesibilidad y experiencia cuidada.',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        icon: 'web',
        color: 'yellow',
      },
      {
        id: '02',
        category: 'BACKEND',
        title: 'Backend, APIs & Automatización',
        description: 'Servicios rápidos y mantenibles, webhooks, colas de procesamiento en segundo plano y sincronizaciones fiables entre plataformas.',
        tech: ['Node.js', 'Express / FastAPI', 'PostgreSQL', 'Redis'],
        icon: 'terminal',
        color: 'mint',
      },
      {
        id: '03',
        category: 'IA PRÁCTICA',
        title: 'Integración de IA',
        description: 'Conexión directa con APIs de modelos de lenguaje (OpenAI, Claude), flujos de búsqueda sobre documentos (RAG) y llamadas a herramientas (function calling).',
        tech: ['OpenAI / Anthropic', 'pgvector', 'LangChain', 'Streaming UI'],
        icon: 'smart_toy',
        color: 'orange',
      },
      {
        id: '04',
        category: 'GRÁFICOS & 3D',
        title: 'Gráficos 3D & WebGL',
        description: 'Visualizaciones de datos interactivas, modelos 3D en el navegador, animaciones por canvas y shaders ligeros que no bloquean el renderizado del usuario.',
        tech: ['Three.js', 'WebGL', 'HTML5 Canvas', 'Shaders GLSL'],
        icon: 'view_in_ar',
        color: 'yellow',
      },
    ];
  }
  
  return [
    {
      id: '01',
      category: 'FRONTEND',
      title: 'Frontend & Web Applications',
      description: 'Fluid interfaces, reusable components and safe typing. Focus on real load speed, accessibility and polished experience.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      icon: 'web',
      color: 'yellow',
    },
    {
      id: '02',
      category: 'BACKEND',
      title: 'Backend, APIs & Automation',
      description: 'Fast and maintainable services, webhooks, background processing queues and reliable cross-platform synchronization.',
      tech: ['Node.js', 'Express / FastAPI', 'PostgreSQL', 'Redis'],
      icon: 'terminal',
      color: 'mint',
    },
    {
      id: '03',
      category: 'PRACTICAL AI',
      title: 'AI Integration',
      description: 'Direct connection with LLM APIs (OpenAI, Claude), document search flows (RAG) and tool calling (function calling).',
      tech: ['OpenAI / Anthropic', 'pgvector', 'LangChain', 'Streaming UI'],
      icon: 'smart_toy',
      color: 'orange',
    },
    {
      id: '04',
      category: 'GRAPHICS & 3D',
      title: '3D Graphics & WebGL',
      description: 'Interactive data visualizations, 3D models in the browser, canvas animations and lightweight shaders that don\'t block user rendering.',
      tech: ['Three.js', 'WebGL', 'HTML5 Canvas', 'Shaders GLSL'],
      icon: 'view_in_ar',
      color: 'yellow',
    },
  ];
}

export function getProjectsData(locale: Locale): ProjectItem[] {
  const isES = locale === 'es';
  
  if (isES) {
    return [
      {
        id: '01',
        year: '2024',
        type: 'PLATAFORMA IA',
        title: 'Zyntia — Agentes de IA conversacionales',
        description: 'Plataforma para crear agentes que atienden por chat y voz en tiempo real desde el widget del sitio. Responden con el conocimiento del negocio, agendan citas, buscan productos y transfieren a una persona cuando hace falta criterio humano.',
        details: 'Mi trabajo: RAG sobre documentos y catálogo, búsqueda de productos, tools para agendar y actuar, traspaso a humano, widget embebible y voz en tiempo real con Deepgram y Cartesia.',
        tech: ['Next.js', 'TypeScript', 'RAG', 'Deepgram', 'Cartesia', 'Multi-canal', 'Widget embebible'],
        status: 'En producción',
        github: 'https://www.zyntia.ai',
        linkLabel: 'Visitar sitio',
        color: 'yellow',
      },
      {
        id: '02',
        year: '2026',
        type: 'E-COMMERCE & 3D',
        title: 'Zayrel Studio — E-commerce con mockup 3D',
        description: 'Tienda en línea de camisetas personalizadas en Costa Rica. Catálogo de colecciones, probador virtual y un editor para diseñar tu propia pieza con mockup 3D.',
        details: 'Mi trabajo: catálogo, probador virtual, editor de diseño y mockup 3D.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', '3D / Mockup', 'E-commerce'],
        status: 'En producción',
        github: 'https://www.zayrelstudio.com/#inicio',
        linkLabel: 'Visitar sitio',
        color: 'mint',
      },
      {
        id: '03',
        year: '2023–2024',
        type: 'MOVILIDAD & MAPAS',
        title: 'ColabCountry / MoveNow — App de logística',
        description: 'Panel de seguimiento de rutas y unidades de transporte en tiempo real. Construido con Leaflet y sincronización por WebSockets, optimizado para operar con redes móviles de baja cobertura.',
        details: 'Mi trabajo: panel de rutas, mapas en tiempo real y soporte offline-first para choferes.',
        tech: ['React', 'Leaflet Maps', 'Supabase', 'WebSockets'],
        status: 'En producción',
        github: socialLinks.github.url,
        linkLabel: 'GitHub',
        color: 'orange',
      },
    ];
  }
  
  return [
    {
      id: '01',
      year: '2024',
      type: 'AI PLATFORM',
      title: 'Zyntia — Conversational AI agents',
      description: 'Platform to build agents that handle customers over chat and real-time voice from your website widget. They answer with your business knowledge, book appointments, search products and hand off to a person when human judgment is needed.',
      details: 'My work: RAG over documents and catalog, product search, tools for scheduling and actions, human handoff, embeddable widget and real-time voice with Deepgram and Cartesia.',
      tech: ['Next.js', 'TypeScript', 'RAG', 'Deepgram', 'Cartesia', 'Multi-channel', 'Embeddable widget'],
      status: 'In production',
      github: 'https://www.zyntia.ai',
      linkLabel: 'Visit website',
      color: 'yellow',
    },
    {
      id: '02',
      year: '2026',
      type: 'E-COMMERCE & 3D',
      title: 'Zayrel Studio — E-commerce with 3D mockup',
      description: 'Online store for custom apparel in Costa Rica. Collection catalog, a virtual try-on and an editor to design your own piece with a 3D mockup.',
      details: 'My work: catalog, virtual try-on, design editor and 3D mockup.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', '3D / Mockup', 'E-commerce'],
      status: 'In production',
      github: 'https://www.zayrelstudio.com/#inicio',
      linkLabel: 'Visit website',
      color: 'mint',
    },
    {
      id: '03',
      year: '2023–2024',
      type: 'MOBILITY & MAPS',
      title: 'ColabCountry / MoveNow — Logistics app',
      description: 'Real-time route and transport unit tracking panel. Built with Leaflet and WebSocket sync, optimized for low-coverage mobile networks.',
      details: 'My work: route panel, real-time maps and offline-first support for drivers.',
      tech: ['React', 'Leaflet Maps', 'Supabase', 'WebSockets'],
      status: 'In production',
      github: socialLinks.github.url,
      linkLabel: 'GitHub',
      color: 'orange',
    },
  ];
}

export function getExperimentsData(locale: Locale): ExperimentItem[] {
  const isES = locale === 'es';
  
  if (isES) {
    return [
      {
        name: 'Math Game 2D',
        tech: 'Canvas · JS',
        description: 'Motor interactivo 2D para ejercicios y lógica matemática con renderizado directo en Canvas.',
        color: 'yellow',
      },
      {
        name: 'Shader Viewport',
        tech: 'WebGL · GLSL',
        description: 'Visualizador interactivo de fragment shaders con controles de variables en tiempo real.',
        color: 'mint',
      },
      {
        name: 'LinkList',
        tech: 'Next.js · DB',
        description: 'Gestor personal de enlaces con previsualizaciones OpenGraph automáticas.',
        color: 'yellow',
      },
      {
        name: 'DevFinder',
        tech: 'API GitHub',
        description: 'Explorador de perfiles de GitHub con métricas de commits y repositorios destacados.',
        color: 'orange',
      },
    ];
  }
  
  return [
    {
      name: 'Math Game 2D',
      tech: 'Canvas · JS',
      description: 'Interactive 2D engine for math exercises and logic with direct Canvas rendering.',
      color: 'yellow',
    },
    {
      name: 'Shader Viewport',
      tech: 'WebGL · GLSL',
      description: 'Interactive fragment shader viewer with real-time variable controls.',
      color: 'mint',
    },
    {
      name: 'LinkList',
      tech: 'Next.js · DB',
      description: 'Personal link manager with automatic OpenGraph previews.',
      color: 'yellow',
    },
    {
      name: 'DevFinder',
      tech: 'GitHub API',
      description: 'GitHub profile explorer with commit metrics and featured repositories.',
      color: 'orange',
    },
  ];
}

export function getTechStackData(locale: Locale): TechCategory[] {
  const isES = locale === 'es';
  
  if (isES) {
    return [
      {
        title: 'Frontend',
        color: 'yellow',
        items: [
          { name: 'TypeScript', detail: 'Uso diario' },
          { name: 'React / Next.js', detail: 'App Router' },
          { name: 'Tailwind CSS', detail: 'Diseño rápido' },
          { name: 'State (Zustand / TanStack)', detail: 'React Query' },
        ],
      },
      {
        title: 'Backend & Datos',
        color: 'mint',
        items: [
          { name: 'Node.js / Express', detail: 'REST / Webhooks' },
          { name: 'Python / FastAPI', detail: 'Servicios & AI' },
          { name: 'PostgreSQL / pgvector', detail: 'Base de datos' },
          { name: 'Redis', detail: 'Colas y caché' },
        ],
      },
      {
        title: 'Gráficos & 3D',
        color: 'orange',
        items: [
          { name: 'Three.js', detail: 'Escenas 3D' },
          { name: 'HTML5 Canvas 2D', detail: 'Simulaciones' },
          { name: 'WebGL / GLSL', detail: 'Custom shaders' },
          { name: 'Framer Motion', detail: 'Animaciones UI' },
        ],
      },
      {
        title: 'Infra & Entorno',
        color: 'neutral',
        items: [
          { name: 'Git & GitHub', detail: 'CI / Actions' },
          { name: 'Docker', detail: 'Contenedores' },
          { name: 'Vercel / Railway', detail: 'Despliegues' },
          { name: 'Supabase / Cloudflare', detail: 'BaaS / DNS' },
        ],
      },
    ];
  }
  
  return [
    {
      title: 'Frontend',
      color: 'yellow',
      items: [
        { name: 'TypeScript', detail: 'Daily use' },
        { name: 'React / Next.js', detail: 'App Router' },
        { name: 'Tailwind CSS', detail: 'Fast design' },
        { name: 'State (Zustand / TanStack)', detail: 'React Query' },
      ],
    },
    {
      title: 'Backend & Data',
      color: 'mint',
      items: [
        { name: 'Node.js / Express', detail: 'REST / Webhooks' },
        { name: 'Python / FastAPI', detail: 'Services & AI' },
        { name: 'PostgreSQL / pgvector', detail: 'Database' },
        { name: 'Redis', detail: 'Queues & cache' },
      ],
    },
    {
      title: 'Graphics & 3D',
      color: 'orange',
      items: [
        { name: 'Three.js', detail: '3D Scenes' },
        { name: 'HTML5 Canvas 2D', detail: 'Simulations' },
        { name: 'WebGL / GLSL', detail: 'Custom shaders' },
        { name: 'Framer Motion', detail: 'UI Animations' },
      ],
    },
    {
      title: 'Infra & Env',
      color: 'neutral',
      items: [
        { name: 'Git & GitHub', detail: 'CI / Actions' },
        { name: 'Docker', detail: 'Containers' },
        { name: 'Vercel / Railway', detail: 'Deployments' },
        { name: 'Supabase / Cloudflare', detail: 'BaaS / DNS' },
      ],
    },
  ];
}

export function getAboutValues(locale: Locale): AboutValue[] {
  const isES = locale === 'es';
  
  if (isES) {
    return [
      {
        title: 'Código mantenible',
        description: 'Priorizo claridad, tipado y decisiones que el siguiente equipo pueda sostener.',
      },
      {
        title: 'Aprendizaje continuo',
        description: 'Exploro nuevas herramientas y las aplico con criterio, no por moda.',
      },
    ];
  }
  
  return [
    {
      title: 'Maintainable code',
      description: 'I prioritize clarity, typing and decisions the next team can sustain.',
    },
    {
      title: 'Continuous learning',
      description: 'I explore new tools and apply them with judgment, not hype.',
    },
  ];
}

export function getContactReasons(locale: Locale): string[] {
  const isES = locale === 'es';
  
  if (isES) {
    return ['Oportunidad laboral', 'Colaboración', 'Pregunta técnica', 'Otro'];
  }
  
  return ['Job opportunity', 'Collaboration', 'Technical question', 'Other'];
}