'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';

// Todos los colores salen de los tokens de globals.css.
const ink = 'var(--c-ink)';
const inkSoft = 'var(--c-ink-2)';
const muted = 'var(--c-muted)';
const surface = 'var(--c-surface)';
const raised = 'var(--c-raised)';
const border = 'var(--c-border)';
const primary = 'var(--c-primary)';
const accent = 'var(--c-accent-line)';
const accentSolid = 'var(--c-accent)';
const accentInk = 'var(--c-accent-ink)';
const accentSoft = 'var(--c-accent-soft)';
const onPrimary = 'var(--c-on-primary)';
const onPrimary2 = 'var(--c-on-primary-2)';

const moduleVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroIllustration() {
  const reduce = useReducedMotion();

  const variants: Variants = reduce
    ? {
        hidden: moduleVariants.hidden,
        visible: { opacity: 1, y: 0, transition: { duration: 0 } },
      }
    : moduleVariants;

  const drawProps = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      duration: reduce ? 0 : 0.7,
      delay: reduce ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <motion.svg
      viewBox="0 0 600 520"
      fill="none"
      role="img"
      aria-labelledby="heroTitle heroDesc"
      className="dv-hero-svg h-auto w-full"
      initial="hidden"
      animate="visible"
    >
      <title id="heroTitle">Desarrollo web, aplicaciones e inteligencia artificial</title>
      <desc id="heroDesc">
        Ilustración de un panel de software con tres módulos conectados: web, aplicaciones e
        IA.
      </desc>

      <defs>
        <filter id="shadow" x="-35%" y="-45%" width="170%" height="200%">
          <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor={ink} floodOpacity="0.08" />
        </filter>
        <filter id="softShadow" x="-35%" y="-45%" width="170%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor={ink} floodOpacity="0.07" />
        </filter>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#66D9B1" />
          <stop offset="1" stopColor="#4FD0A5" />
        </linearGradient>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#21A87F" stopOpacity="0.16" />
          <stop offset="1" stopColor="#21A87F" stopOpacity="0" />
        </linearGradient>
        <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill="var(--c-border)" />
        </pattern>
        <clipPath id="clipMain">
          <rect x="100" y="92" width="392" height="299" rx="19" />
        </clipPath>
      </defs>

      <motion.rect
        x="58"
        y="46"
        width="496"
        height="424"
        fill="url(#dots)"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      <g strokeWidth="1.5" strokeLinecap="round" stroke={accent}>
        <motion.path d="M380 126C410 126 408 100 430 100" {...drawProps(0.35)} />
        <motion.path d="M188 342C170 342 164 363 152 363" {...drawProps(0.45)} />
        <motion.path d="M392 326C437 326 438 390 469 390" {...drawProps(0.55)} />
      </g>

      {/* Panel principal -------------------------------------------------- */}
      <motion.g
        className="dv-hero-module"
        filter="url(#shadow)"
        variants={variants}
      >
        <rect x="100" y="92" width="392" height="299" rx="19" fill={surface} stroke={border} />
        <g clipPath="url(#clipMain)">
          <rect x="100" y="92" width="392" height="48" fill={raised} />
          <path d="M100 140H492" stroke={border} />
          <circle cx="123" cy="116" r="3" fill="var(--c-border)" />
          <circle cx="135" cy="116" r="3" fill="var(--c-border)" />
          <circle cx="147" cy="116" r="3" fill="var(--c-border)" />

          <rect x="208" y="104" width="168" height="25" rx="7" fill={surface} stroke={border} />
          <circle cx="224" cy="116" r="3.2" stroke={muted} strokeWidth="1.2" />
          <path d="M226.5 118.5L229.5 121.5" stroke={muted} strokeWidth="1.2" strokeLinecap="round" />
          <text x="238" y="119.5" fill={muted} fontSize="10">
            mi-negocio.app
          </text>

          {/* Barra lateral */}
          <rect x="114" y="154" width="99" height="220" rx="11" fill={raised} />
          <rect x="123" y="165" width="81" height="32" rx="7" fill={accentSoft} />
          <rect x="135" y="176" width="9" height="9" rx="2" fill={accentSolid} />
          <text x="152" y="184.5" fill={accentInk} fontSize="10.5" fontWeight="500">
            Inicio
          </text>

          <rect x="135" y="215" width="9" height="9" rx="2" stroke={muted} strokeWidth="1.1" />
          <text x="152" y="223.5" fill={inkSoft} fontSize="10.5">
            Proyectos
          </text>

          <circle cx="139.5" cy="255" r="4.5" stroke={muted} strokeWidth="1.1" />
          <text x="152" y="259" fill={inkSoft} fontSize="10.5">
            Servicios
          </text>

          <path d="M127 287H199" stroke={border} />
          <rect x="127" y="301" width="72" height="6" rx="3" fill="var(--c-border)" />
          <rect x="127" y="316" width="55" height="6" rx="3" fill="var(--c-border)" />
          <rect x="127" y="331" width="63" height="6" rx="3" fill="var(--c-border)" />

          {/* Contenido */}
          <text x="233" y="169" fill={muted} fontSize="9">
            Panel de control
          </text>
          <text x="233" y="191" fill={ink} fontSize="18" fontWeight="500">
            Todo conectado
          </text>

          <rect x="233" y="202" width="112" height="58" rx="9" fill={surface} stroke={border} />
          <rect x="245" y="212" width="6" height="6" fill={accentSolid} />
          <text x="257" y="218" fill={muted} fontSize="9">
            Proyectos
          </text>
          <text x="245" y="241" fill={ink} fontSize="17" fontWeight="500">
            12
          </text>
          <text x="245" y="253" fill={muted} fontSize="8">
            3 en curso
          </text>

          <rect x="357" y="202" width="112" height="58" rx="9" fill={surface} stroke={border} />
          <rect x="369" y="212" width="6" height="6" fill={primary} />
          <text x="381" y="218" fill={muted} fontSize="9">
            Reservas
          </text>
          <text x="369" y="241" fill={ink} fontSize="17" fontWeight="500">
            34
          </text>
          <text x="369" y="253" fill={muted} fontSize="8">
            +6 vs. mes anterior
          </text>

          <rect x="233" y="272" width="236" height="102" rx="10" fill={surface} stroke={border} />
          <text x="246" y="290" fill={inkSoft} fontSize="9" fontWeight="500">
            Visitas por semana
          </text>
          <text x="455" y="290" fill={muted} fontSize="8" textAnchor="end">
            6 sem.
          </text>
          <path d="M246 312H455M246 330H455M246 348H455" stroke="var(--c-border)" strokeWidth="1" />
          <path
            d="M246 340C267 336 277 326 295 329C315 334 322 312 340 318C357 325 372 304 390 307C413 312 428 300 455 303V358H246Z"
            fill="url(#area)"
          />
          <motion.path
            d="M246 340C267 336 277 326 295 329C315 334 322 312 340 318C357 325 372 304 390 307C413 312 428 300 455 303"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            {...drawProps(0.6)}
          />
          <circle cx="455" cy="303" r="4" fill={accent} stroke={surface} strokeWidth="2" />
        </g>
        <rect
          className="dv-module-highlight"
          x="98"
          y="90"
          width="396"
          height="303"
          rx="21"
          stroke={accent}
          strokeWidth="1.5"
        />
      </motion.g>

      {/* Módulo IA -------------------------------------------------------- */}
      <motion.g
        className="dv-hero-module"
        variants={variants}
        filter="url(#softShadow)"
      >
        <rect x="423" y="31" width="151" height="128" rx="16" fill={primary} />
        <text x="439" y="53" fill={onPrimary2} fontSize="8">
          03 · IA
        </text>
        <text x="439" y="78" fill={onPrimary} fontSize="12" fontWeight="500">
          Automatización
        </text>
        <path d="M451 115L477 96L513 121L547 99" stroke={onPrimary2} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M477 96L484 132L513 121" stroke={onPrimary2} strokeOpacity="0.45" strokeWidth="1.2" />
        <circle cx="451" cy="115" r="5" fill={onPrimary} />
        <circle cx="477" cy="96" r="5.5" fill={accentSolid} />
        <circle cx="484" cy="132" r="4" fill="var(--c-muted)" />
        <circle cx="513" cy="121" r="6" stroke={onPrimary} strokeWidth="2" />
        <circle cx="547" cy="99" r="5" fill={accentSolid} />
        <rect
          className="dv-module-highlight"
          x="421"
          y="29"
          width="155"
          height="132"
          rx="18"
          stroke={onPrimary}
          strokeWidth="1.5"
        />
      </motion.g>

      {/* Módulo web ------------------------------------------------------- */}
      <motion.g
        className="dv-hero-module"
        variants={variants}
        filter="url(#softShadow)"
      >
        <rect x="36" y="317" width="173" height="126" rx="15" fill={surface} stroke={border} />
        <text x="51" y="338" fill={muted} fontSize="8">
          01 · Web
        </text>
        <text x="51" y="362" fill={ink} fontSize="12" fontWeight="500">
          Experiencias
        </text>
        <rect x="51" y="372" width="143" height="53" rx="7" fill={raised} stroke={border} />
        <path d="M51 383H194" stroke={border} />
        <circle cx="59" cy="377.5" r="1.6" fill="var(--c-border)" />
        <circle cx="65" cy="377.5" r="1.6" fill="var(--c-border)" />
        <rect x="61" y="392" width="44" height="5" rx="2.5" fill="var(--c-border)" />
        <rect x="61" y="403" width="55" height="4" rx="2" fill="var(--c-border)" />
        <rect x="61" y="411" width="40" height="4" rx="2" fill="var(--c-border)" />
        <rect x="133" y="391" width="49" height="25" rx="5" fill={accentSoft} />
        <path
          d="M142 408L152 399L158 405L165 398L175 408"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          className="dv-module-highlight"
          x="34"
          y="315"
          width="177"
          height="130"
          rx="17"
          stroke={accent}
          strokeWidth="1.5"
        />
      </motion.g>

      {/* Módulo app ------------------------------------------------------- */}
      <motion.g
        className="dv-hero-module"
        variants={variants}
        filter="url(#softShadow)"
      >
        <rect x="391" y="363" width="177" height="115" rx="16" fill={surface} stroke={border} />
        <text x="408" y="385" fill={muted} fontSize="8">
          02 · App
        </text>
        <text x="408" y="409" fill={ink} fontSize="12" fontWeight="500">
          Integraciones
        </text>
        <path d="M432 444H466M480 444H527" stroke="var(--c-border)" strokeWidth="2" strokeLinecap="round" />
        <rect x="413" y="430" width="26" height="28" rx="6" fill={raised} stroke={border} />
        <path d="M420 441H432M420 447H428" stroke={muted} strokeWidth="1.4" strokeLinecap="round" />
        <rect x="463" y="430" width="27" height="28" rx="6" fill="url(#accent)" />
        <path
          d="M470 442L475 447L483 438"
          stroke={ink}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="514" y="430" width="37" height="28" rx="6" fill={raised} stroke={border} />
        <circle cx="526" cy="444" r="4" fill="var(--c-border)" />
        <circle cx="539" cy="444" r="4" fill={primary} />
        <rect
          className="dv-module-highlight"
          x="389"
          y="361"
          width="181"
          height="119"
          rx="18"
          stroke={accent}
          strokeWidth="1.5"
        />
      </motion.g>
    </motion.svg>
  );
}
