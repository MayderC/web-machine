'use client';

import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { getTechStackData, TechCategory } from '@/lib/data';
import { Locale } from '@/i18n/config';

interface TechCategoryCardProps {
  category: TechCategory;
}

function TechCategoryCard({ category }: TechCategoryCardProps) {
  const colorMap = {
    yellow: 'bg-retro-yellow border-retro-ink',
    mint: 'bg-retro-mint border-retro-ink',
    orange: 'bg-retro-orange border-retro-ink',
    neutral: 'bg-neutral-300 border-retro-ink',
  };
  const colorClass = colorMap[category.color];

  return (
    <div className="bg-retro-card border-2 border-retro-ink p-5 retro-shadow">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-retro-ink font-mono text-xs font-bold text-retro-ink uppercase">
        <span className={`w-2.5 h-2.5 ${colorClass} inline-block`}></span>
        <span>{category.title}</span>
      </div>
      <ul className="flex flex-col gap-2 font-mono text-xs text-retro-ink">
        {category.items.map((item, index) => (
          <li key={index} className="flex items-center justify-between py-1.5 border-b border-retro-ink/20 last:border-0">
            <span className="font-bold">{item.name}</span>
            <span className="text-retro-muted text-[11px]">{item.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TechStack() {
  const locale = useLocale();
  const t = useTranslations('techStack');
  const categories = getTechStackData(locale as Locale);

  return (
    <section className="w-full bg-retro-bg py-16 md:py-24 border-b-2 border-retro-ink">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-retro-ink">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-retro-ink block mb-1">
              {t('label')}
            </span>
            <h2 className="heading-lg">
              {t('headline')}
            </h2>
          </div>
          <p className="body-md max-w-sm">
            {t('description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category: TechCategory) => (
            <TechCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
