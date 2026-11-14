'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

const moduleVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

interface PathDotProps {
  pathRef: React.RefObject<SVGPathElement | null>;
  duration: number;
  delay?: number;
  reverse?: boolean;
  radius?: number;
  fill?: string;
  reduce: boolean;
}

function PathDot({
  pathRef,
  duration,
  delay = 0,
  reverse = false,
  radius = 3,
  fill = '#356CFF',
  reduce,
}: PathDotProps) {
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (reduce) return;

    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path || !dot) return;

    const length = path.getTotalLength();
    let frame = 0;
    let start = 0;

    const tick = (now: number) => {
      if (!start) start = now;
      const elapsed = (now - start) / 1000 + delay;
      const progress = (elapsed % duration) / duration;
      const point = path.getPointAtLength(
        (reverse ? 1 - progress : progress) * length
      );

      dot.setAttribute('cx', String(point.x));
      dot.setAttribute('cy', String(point.y));

      const edgeFade = Math.min(1, Math.min(progress, 1 - progress) / 0.08);
      dot.setAttribute('opacity', String(0.9 * edgeFade));

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [delay, duration, pathRef, reduce, reverse]);

  if (reduce) return null;

  return <circle ref={dotRef} r={radius} fill={fill} opacity="0" />;
}

export function HeroIllustration() {
  const reduce = useReducedMotion();
  const topPathRef = useRef<SVGPathElement>(null);
  const bottomPathRef = useRef<SVGPathElement>(null);
  const connectorIaRef = useRef<SVGPathElement>(null);
  const connectorWebRef = useRef<SVGPathElement>(null);
  const connectorAppRef = useRef<SVGPathElement>(null);

  const drawProps = (delay: number) => {
    if (reduce) return {};
    return {
      initial: { pathLength: 0, opacity: 0 },
      animate: { pathLength: 1, opacity: 1 },
      transition: { duration: 1, delay, ease: 'easeInOut' as const },
    };
  };

  const floatProps = (delay: number, distance = 2.5) => {
    if (reduce) return {};
    return {
      animate: { y: [0, -distance, 0] },
      transition: {
        duration: 10,
        delay,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    };
  };

  const pulseProps = (delay = 0) => {
    if (reduce) return {};
    return {
      animate: { opacity: [0.7, 1, 0.7] },
      transition: {
        duration: 5.5,
        delay,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    };
  };

  return (
    <motion.svg
      viewBox="0 0 600 520"
      fill="none"
      role="img"
      aria-labelledby="heroTitle heroDesc"
      className="h-auto w-full"
      initial={reduce ? false : 'hidden'}
      animate={reduce ? undefined : 'visible'}
    >
      <title id="heroTitle">Desarrollo web, aplicaciones e inteligencia artificial</title>
      <desc id="heroDesc">
        Ilustración modular con un panel de software y tres componentes conectados: web,
        aplicaciones e IA.
      </desc>

      <defs>
        <filter id="shadow" x="-35%" y="-45%" width="170%" height="200%">
          <feDropShadow
            dx="0"
            dy="14"
            stdDeviation="20"
            floodColor="#10213D"
            floodOpacity="0.10"
          />
        </filter>
        <filter id="softShadow" x="-35%" y="-45%" width="170%" height="200%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="13"
            floodColor="#10213D"
            floodOpacity="0.09"
          />
        </filter>
        <linearGradient id="blue" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#356CFF" />
          <stop offset="1" stopColor="#1E49CF" />
        </linearGradient>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#4677FF" stopOpacity="0.20" />
          <stop offset="1" stopColor="#4677FF" stopOpacity="0" />
        </linearGradient>
        <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#CBD7EB" />
        </pattern>
        <clipPath id="clipMain">
          <rect x="100" y="92" width="392" height="299" rx="19" />
        </clipPath>
      </defs>

      <motion.g
        id="fondo"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <rect x="58" y="46" width="496" height="424" fill="url(#dots)" opacity="0.40" />
        <path
          ref={topPathRef}
          d="M49 284C49 163 152 64 273 64H486"
          stroke="#D5DFEE"
          strokeWidth="1.4"
          strokeDasharray="4 8"
        />
        <path
          ref={bottomPathRef}
          d="M117 453H444C506 453 554 405 554 343"
          stroke="#D5DFEE"
          strokeWidth="1.4"
          strokeDasharray="4 8"
        />
        <circle cx="49" cy="284" r="4" fill="#356CFF" />
        <circle cx="554" cy="343" r="4" fill="#356CFF" />
      </motion.g>

      <g id="conexiones" strokeWidth="2" strokeLinecap="round">
        <motion.path
          ref={connectorIaRef}
          id="conexion-ia"
          d="M380 126C410 126 408 100 430 100"
          stroke="#356CFF"
          {...drawProps(0.55)}
        />
        <motion.path
          ref={connectorWebRef}
          id="conexion-web"
          d="M188 342C170 342 164 363 152 363"
          stroke="#356CFF"
          {...drawProps(0.75)}
        />
        <motion.path
          ref={connectorAppRef}
          id="conexion-app"
          d="M392 326C437 326 438 390 469 390"
          stroke="#356CFF"
          {...drawProps(0.95)}
        />
      </g>

      <g id="path-dots" pointerEvents="none" aria-hidden="true">
        <PathDot pathRef={topPathRef} duration={16} radius={3} reduce={!!reduce} />
        <PathDot
          pathRef={bottomPathRef}
          duration={18}
          delay={2}
          reverse
          radius={3}
          reduce={!!reduce}
        />
        <PathDot
          pathRef={connectorIaRef}
          duration={4.5}
          delay={0.5}
          radius={2.2}
          reduce={!!reduce}
        />
        <PathDot
          pathRef={connectorWebRef}
          duration={5}
          delay={1.2}
          radius={2.2}
          reduce={!!reduce}
        />
        <PathDot
          pathRef={connectorAppRef}
          duration={5.5}
          delay={0.8}
          radius={2.2}
          reduce={!!reduce}
        />
      </g>

      <motion.g
        id="panel-principal"
        className="dv-hero-module"
        filter="url(#shadow)"
        variants={reduce ? undefined : moduleVariants}
        whileHover={reduce ? undefined : { y: -3 }}
      >
        <rect x="100" y="92" width="392" height="299" rx="19" fill="#FFFFFF" stroke="#CAD7E8" />
        <g clipPath="url(#clipMain)">
          <rect x="100" y="92" width="392" height="48" fill="#F6F8FC" />
          <path d="M100 140H492" stroke="#DCE4EF" />
          <circle cx="123" cy="116" r="4" fill="#F6A6A6" />
          <circle cx="137" cy="116" r="4" fill="#F5CC81" />
          <circle cx="151" cy="116" r="4" fill="#91CEB4" />
          <rect x="208" y="104" width="168" height="25" rx="7" fill="#FFFFFF" stroke="#E2E9F2" />
          <circle cx="224" cy="116" r="3.5" stroke="#8394AC" strokeWidth="1.5" />
          <path
            d="M227 119L231 123"
            stroke="#8394AC"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <text
            x="240"
            y="120"
            fill="#73839C"
            fontSize="10"
            fontFamily="Arial, sans-serif"
          >
            mi-negocio.app
          </text>

          <rect x="114" y="154" width="99" height="220" rx="11" fill="#F6F8FC" />
          <rect x="123" y="165" width="81" height="32" rx="7" fill="#E4ECFF" />
          <rect x="135" y="176" width="10" height="10" rx="2" fill="#2D5BE3" />
          <text
            x="153"
            y="185"
            fill="#234CBF"
            fontSize="10"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            Inicio
          </text>
          <rect x="135" y="215" width="10" height="10" rx="2" stroke="#9AAAC0" />
          <path d="M138 218H142M138 222H142" stroke="#9AAAC0" strokeWidth="1.2" />
          <text
            x="153"
            y="224"
            fill="#7C8CA3"
            fontSize="10"
            fontFamily="Arial, sans-serif"
          >
            Proyectos
          </text>
          <circle cx="140" cy="255" r="5" stroke="#9AAAC0" />
          <path d="M140 252V258M137 255H143" stroke="#9AAAC0" strokeWidth="1.2" />
          <text
            x="153"
            y="259"
            fill="#7C8CA3"
            fontSize="10"
            fontFamily="Arial, sans-serif"
          >
            Servicios
          </text>
          <path d="M127 287H199" stroke="#DFE6F1" />
          <rect x="127" y="301" width="72" height="7" rx="3.5" fill="#E1E8F2" />
          <rect x="127" y="317" width="55" height="7" rx="3.5" fill="#E1E8F2" />
          <rect x="127" y="333" width="63" height="7" rx="3.5" fill="#E1E8F2" />

          <text
            x="233"
            y="167"
            fill="#8493A9"
            fontSize="9"
            fontWeight="700"
            letterSpacing="1.6"
            fontFamily="Arial, sans-serif"
          >
            PANEL DE CONTROL
          </text>
          <text
            x="233"
            y="188"
            fill="#10213D"
            fontSize="19"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            Todo conectado.
          </text>
          <rect x="233" y="202" width="112" height="58" rx="9" fill="#F2F6FF" stroke="#E0E9FB" />
          <circle cx="251" cy="219" r="6" fill="#356CFF" opacity="0.16" />
          <path d="M248 219H254M251 216V222" stroke="#356CFF" strokeWidth="1.5" />
          <text
            x="263"
            y="222"
            fill="#71839C"
            fontSize="9"
            fontFamily="Arial, sans-serif"
          >
            Proyectos
          </text>
          <text
            x="248"
            y="247"
            fill="#10213D"
            fontSize="19"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            12
          </text>
          <path
            d="M302 239L309 232L315 236L324 225L330 228"
            stroke="#356CFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="357" y="202" width="112" height="58" rx="9" fill="#F7F9FC" stroke="#E2E9F2" />
          <circle cx="376" cy="219" r="6" fill="#16A48B" opacity="0.13" />
          <path
            d="M373 219L375 221L379 217"
            stroke="#16A48B"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="388"
            y="222"
            fill="#71839C"
            fontSize="9"
            fontFamily="Arial, sans-serif"
          >
            Actividad
          </text>
          <text
            x="373"
            y="247"
            fill="#10213D"
            fontSize="19"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            +28%
          </text>
          <rect x="233" y="272" width="236" height="102" rx="10" fill="#FFFFFF" stroke="#E2E9F2" />
          <text
            x="246"
            y="291"
            fill="#253754"
            fontSize="10"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            Evolución del proyecto
          </text>
          <path d="M246 354H457M246 330H457M246 306H457" stroke="#E9EEF6" strokeWidth="1" />
          <path
            d="M246 351C267 346 277 335 295 339C315 344 322 315 340 324C357 332 372 304 390 308C413 314 428 297 455 300V360H246Z"
            fill="url(#area)"
          />
          <motion.path
            id="linea-grafico"
            d="M246 351C267 346 277 335 295 339C315 344 322 315 340 324C357 332 372 304 390 308C413 314 428 297 455 300"
            stroke="#356CFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            {...drawProps(0.9)}
          />
          <motion.circle
            id="punto-grafico"
            cx="455"
            cy="300"
            r="5"
            fill="#356CFF"
            stroke="white"
            strokeWidth="2"
            animate={reduce ? undefined : { r: [5, 5.7, 5] }}
            transition={
              reduce
                ? undefined
                : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        </g>
        <rect
          className="dv-module-highlight"
          x="98"
          y="90"
          width="396"
          height="303"
          rx="21"
          fill="none"
          stroke="#356CFF"
          strokeWidth="1.5"
        />
      </motion.g>

      <motion.g
        className="dv-hero-module"
        variants={reduce ? undefined : moduleVariants}
        whileHover={reduce ? undefined : { y: -3 }}
      >
        <motion.g id="modulo-ia" filter="url(#softShadow)" {...floatProps(0.2, 2.5)}>
          <rect x="423" y="31" width="151" height="128" rx="16" fill="#10213D" />
          <text
            x="439"
            y="55"
            fill="#AFC4FF"
            fontSize="9"
            fontWeight="700"
            letterSpacing="1.4"
            fontFamily="Arial, sans-serif"
          >
            03 / IA
          </text>
          <text
            x="439"
            y="75"
            fill="#FFFFFF"
            fontSize="13"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            Automatización
          </text>
          <motion.g id="nodos-ia" {...pulseProps(0.4)}>
            <path d="M451 115L477 96L513 121L547 99" stroke="#6B93FF" strokeWidth="2" strokeLinecap="round" />
            <path d="M477 96L484 132L513 121" stroke="#6B93FF" strokeOpacity="0.50" strokeWidth="1.5" />
            <circle cx="451" cy="115" r="6" fill="#FFFFFF" />
            <circle cx="477" cy="96" r="6" fill="#5E89FF" stroke="#B9CAFF" strokeWidth="2" />
            <circle cx="484" cy="132" r="4" fill="#5E89FF" />
            <circle cx="513" cy="121" r="7" fill="#FFFFFF" stroke="#6B93FF" strokeWidth="3" />
            <circle cx="547" cy="99" r="6" fill="#5E89FF" stroke="#B9CAFF" strokeWidth="2" />
          </motion.g>
          <rect
            className="dv-module-highlight"
            x="421"
            y="29"
            width="155"
            height="132"
            rx="18"
            fill="none"
            stroke="#6B93FF"
            strokeWidth="1.5"
          />
        </motion.g>
      </motion.g>

      <motion.g
        className="dv-hero-module"
        variants={reduce ? undefined : moduleVariants}
        whileHover={reduce ? undefined : { y: -3 }}
      >
        <motion.g id="modulo-web" filter="url(#softShadow)" {...floatProps(0.9, 2.2)}>
          <rect x="36" y="317" width="173" height="126" rx="15" fill="#FFFFFF" stroke="#CBD7E8" />
          <text
            x="51"
            y="340"
            fill="#356CFF"
            fontSize="9"
            fontWeight="700"
            letterSpacing="1.4"
            fontFamily="Arial, sans-serif"
          >
            01 / WEB
          </text>
          <text
            x="51"
            y="358"
            fill="#10213D"
            fontSize="13"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            Experiencias
          </text>
          <rect x="51" y="372" width="143" height="53" rx="7" fill="#F7F9FD" stroke="#DEE6F2" />
          <path d="M51 384H194" stroke="#DEE6F2" />
          <circle cx="59" cy="378" r="2" fill="#9EAFCC" />
          <circle cx="66" cy="378" r="2" fill="#9EAFCC" />
          <rect x="61" y="394" width="44" height="5" rx="2.5" fill="#D2DCF0" />
          <rect x="61" y="405" width="55" height="4" rx="2" fill="#E0E7F2" />
          <rect x="61" y="413" width="40" height="4" rx="2" fill="#E0E7F2" />
          <rect x="133" y="393" width="49" height="23" rx="5" fill="#DCE7FF" />
          <path
            d="M142 409L152 400L158 406L165 399L175 409"
            stroke="#356CFF"
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
            fill="none"
            stroke="#356CFF"
            strokeWidth="1.5"
          />
        </motion.g>
      </motion.g>

      <motion.g
        className="dv-hero-module"
        variants={reduce ? undefined : moduleVariants}
        whileHover={reduce ? undefined : { y: -3 }}
      >
        <motion.g id="modulo-app" filter="url(#softShadow)" {...floatProps(1.4, 2.5)}>
          <rect x="391" y="363" width="177" height="115" rx="16" fill="#FFFFFF" stroke="#CBD7E8" />
          <text
            x="408"
            y="387"
            fill="#356CFF"
            fontSize="9"
            fontWeight="700"
            letterSpacing="1.4"
            fontFamily="Arial, sans-serif"
          >
            02 / APP
          </text>
          <text
            x="408"
            y="406"
            fill="#10213D"
            fontSize="13"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            Integraciones
          </text>
          <motion.g id="nodos-app" {...pulseProps(0.9)}>
            <path d="M432 444H466M480 444H527" stroke="#9FB6E5" strokeWidth="2" strokeLinecap="round" />
            <rect x="413" y="430" width="26" height="28" rx="6" fill="#EAF0FF" stroke="#AFC4FC" />
            <path d="M420 441H432M420 447H428" stroke="#356CFF" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="463" y="430" width="27" height="28" rx="6" fill="#356CFF" />
            <path
              d="M470 442L475 447L483 438"
              stroke="#FFFFFF"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="514" y="430" width="37" height="28" rx="6" fill="#F3F6FC" stroke="#CFDAEC" />
            <circle cx="526" cy="444" r="4" fill="#356CFF" opacity="0.35" />
            <circle cx="539" cy="444" r="4" fill="#356CFF" opacity="0.9" />
          </motion.g>
          <rect
            className="dv-module-highlight"
            x="389"
            y="361"
            width="181"
            height="119"
            rx="18"
            fill="none"
            stroke="#356CFF"
            strokeWidth="1.5"
          />
        </motion.g>
      </motion.g>

      <motion.g id="acentos" aria-hidden="true" {...pulseProps(1.1)}>
        <circle cx="100" cy="92" r="3" fill="#356CFF" />
        <circle cx="492" cy="391" r="3" fill="#356CFF" />
        <path d="M289 46V61M281 54H296" stroke="#356CFF" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M315 462V476M308 469H322" stroke="#B1C3E5" strokeWidth="1.6" strokeLinecap="round" />
      </motion.g>
    </motion.svg>
  );
}
