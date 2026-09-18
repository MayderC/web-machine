'use client';

import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { getProjectsData, getExperimentsData, ProjectItem, ExperimentItem } from '@/lib/data';
import { Locale } from '@/i18n/config';

interface FeaturedCaseProps {
  item: ProjectItem;
}

function FeaturedCase({ item }: FeaturedCaseProps) {
  const t = useTranslations('projects');
  return (
    <div className="bg-retro-card border-2 border-retro-ink p-6 md:p-8 mb-8 retro-shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="bg-retro-ink text-retro-bg font-bold px-1.5 py-0.5">{item.id}</span>
              <span className="text-neutral-400">·</span>
              <span className="text-retro-muted font-bold">{item.year}</span>
              <span className="px-2 py-0.5 border border-retro-ink bg-retro-yellow text-retro-on-accent font-bold text-[10px]">{item.type}</span>
            </div>
            <h3 className="font-sans font-extrabold text-2xl text-retro-ink mb-3">
              {item.title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-retro-muted mb-4 leading-relaxed">
              {item.description}
            </p>
            <div className="bg-retro-bg p-4 border-2 border-retro-ink mb-5">
              <span className="font-mono text-xs font-bold text-retro-ink block mb-1 uppercase tracking-wider">{t('detailsLabel')}</span>
              <p className="font-sans text-xs text-retro-muted leading-relaxed">
                {item.details}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tech.map((tech, index) => (
                <span key={index} className="px-2.5 py-1 bg-retro-card font-mono text-xs font-bold text-retro-ink border-2 border-retro-ink">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t-2 border-retro-ink font-mono text-xs">
            <a className="inline-flex items-center gap-1.5 font-bold text-retro-ink hover:underline" href={item.github} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>{item.linkLabel ?? t('viewDemo')}</span>
            </a>
            <span className="text-neutral-400">·</span>
            <span className="text-retro-muted font-bold">{item.status}</span>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="w-full bg-[#111] p-3 border-2 border-retro-ink retro-shadow">
            <div className="flex items-center justify-between pb-2 mb-2 px-1 text-white font-mono text-xs border-b border-white/20">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-white inline-block" data-no-invert></span>
                <span className="text-white font-bold">dashboard/agent-flow</span>
              </div>
              <span className="bg-retro-yellow text-retro-on-accent font-bold px-1.5 py-0.5 text-[10px]">STREAM_ACTIVE</span>
            </div>
            <div className="w-full aspect-[4/3] bg-[#1a1a1a] border border-white/20 flex items-center justify-center">
              <div className="text-center p-4 text-white/50 font-mono text-xs">
                <span className="material-symbols-outlined text-4xl block mb-2">dashboard</span>
                <p>{item.title}</p>
                <p className="text-[10px] mt-1">Visual representation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  item: ProjectItem;
}

function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className="bg-retro-card border-2 border-retro-ink p-6 flex flex-col justify-between retro-shadow-lg">
      <div>
        <div className="flex items-center justify-between font-mono text-xs mb-2">
          <span className={`font-bold ${item.color === 'yellow' ? 'bg-retro-yellow text-retro-on-accent' : item.color === 'mint' ? 'bg-retro-mint text-retro-on-accent' : 'bg-retro-orange text-white'} px-1.5 py-0.5 border border-retro-ink`}>
            {item.id} / {item.type}
          </span>
          <span className="text-retro-muted font-bold">{item.year}</span>
        </div>
        <h3 className="font-sans font-bold text-xl text-retro-ink mb-2">
          {item.title}
        </h3>
        <p className="font-sans text-sm text-retro-muted mb-4 leading-relaxed">
          {item.description}
        </p>
        <div className="bg-[#111] p-2 border-2 border-retro-ink mb-4">
          <div className="w-full h-48 bg-[#1a1a1a] flex items-center justify-center text-white/50 font-mono text-xs">
            {item.title}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4 font-mono text-xs font-bold text-retro-ink">
          {item.tech.map((tech, index) => (
            <span key={index} className="px-2 py-0.5 bg-retro-bg border border-retro-ink">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 border-t-2 border-retro-ink font-mono text-xs">
        <span className="text-retro-muted font-bold">{item.details}</span>
        <a className="font-bold text-retro-ink hover:underline flex items-center gap-1" href={item.github} target="_blank" rel="noopener noreferrer">
          <span>{item.linkLabel ?? 'Código'}</span>
          <span className="material-symbols-outlined text-[14px]">open_in_new</span>
        </a>
      </div>
    </div>
  );
}

interface ExperimentCardProps {
  item: ExperimentItem;
}

function ExperimentCard({ item }: ExperimentCardProps) {
  const colorMap = {
    yellow: 'hover:bg-retro-yellow hover:text-retro-on-accent',
    mint: 'hover:bg-retro-mint hover:text-retro-on-accent',
    orange: 'hover:bg-retro-orange hover:text-white',
  };
  const colorClass = colorMap[item.color];

  return (
    <a className={`bg-retro-bg p-4 border-2 border-retro-ink ${colorClass} transition-colors block group`} href="https://github.com/mayderc" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center justify-between mb-2">
        <span className="font-sans font-bold text-base text-retro-ink group-hover:underline">{item.name}</span>
        <span className="font-mono text-[10px] font-bold bg-retro-card px-1.5 py-0.5 border border-retro-ink">{item.tech}</span>
      </div>
      <p className="font-sans text-xs text-retro-muted leading-relaxed line-clamp-2">{item.description}</p>
    </a>
  );
}

export function Projects() {
  const locale = useLocale();
  const t = useTranslations('projects');
  const projectsData = getProjectsData(locale as Locale);
  const experimentsData = getExperimentsData(locale as Locale);

  return (
    <section className="w-full bg-retro-bg py-16 md:py-24 border-b-2 border-retro-ink" id="proyectos">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-xs font-bold text-retro-ink uppercase tracking-widest block mb-1">
              {t('label')}
            </span>
            <h2 className="heading-lg">
              {t('headline')}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold bg-retro-card border-2 border-retro-ink px-3 py-1 retro-shadow-sm text-retro-ink">
              {t('subtitle')}
            </span>
          </div>
        </div>

        {/* Caso 01 destacado */}
        {projectsData.slice(0, 1).map((item) => (
          <FeaturedCase key={item.id} item={item} />
        ))}

        {/* Cases 02 y 03: 2 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {projectsData.slice(1, 3).map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>

        {/* Experimentos y Proyectos Abiertos */}
        <div className="bg-retro-card border-2 border-retro-ink p-6 retro-shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b-2 border-retro-ink">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-retro-ink text-[20px]">code</span>
              <span className="font-mono text-xs font-bold text-retro-ink uppercase tracking-wider">{t('experiments.label')}</span>
            </div>
            <a className="font-mono text-xs font-bold text-retro-ink hover:underline flex items-center gap-1" href="https://github.com/mayderc" target="_blank" rel="noopener noreferrer">
              <span>{t('experiments.github')}</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {experimentsData.map((item) => (
              <ExperimentCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
