'use client';

import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { getServicesData, ServiceItem } from '@/lib/data';
import { Locale } from '@/i18n/config';

interface ServiceCardProps {
  item: ServiceItem;
}

function ServiceCard({ item }: ServiceCardProps) {
  const t = useTranslations('serviceCard');
  const colorMap = {
    yellow: 'bg-retro-yellow text-retro-on-accent',
    mint: 'bg-retro-mint text-retro-on-accent',
    orange: 'bg-retro-orange text-white',
  };
  const colorClass = colorMap[item.color];

  return (
    <div className={`bg-retro-bg border-2 border-retro-ink p-6 flex flex-col justify-between retro-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--c-shadow)] transition-all group`}>
      <div>
        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-retro-ink">
          <span className="font-mono text-xs font-bold bg-retro-card px-2 py-0.5 border border-retro-ink">
            {item.id} / {item.category}
          </span>
          <div className={`w-8 h-8 border-2 border-retro-ink ${colorClass} flex items-center justify-center`}>
            <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
          </div>
        </div>
        <h3 className="font-sans font-bold text-lg text-retro-ink mb-2">
          {item.title}
        </h3>
        <p className="font-sans text-sm text-retro-muted mb-6 leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="pt-4 border-t-2 border-retro-ink">
        <span className="font-mono text-[10px] font-bold text-retro-muted uppercase block mb-2">
          {t('techLabel')}
        </span>
        <div className="flex flex-wrap gap-1.5 font-mono text-[11px] font-bold text-retro-ink">
          {item.tech.map((tech, index) => (
            <span key={index} className="px-2 py-0.5 bg-retro-card border border-retro-ink">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const locale = useLocale();
  const t = useTranslations('services');
  const items = getServicesData(locale as Locale);

  return (
    <section className="w-full bg-retro-card py-16 md:py-24 border-b-2 border-retro-ink" id="servicios">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-retro-ink">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold tracking-widest text-retro-ink">
              <span>{t('label')}</span>
              <span className="h-0.5 w-8 bg-retro-ink inline-block"></span>
            </div>
            <h2 className="heading-lg">
              {t('headline')}
            </h2>
          </div>
          <p className="body-md max-w-md">
            {t('description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item: ServiceItem) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
