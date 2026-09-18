'use client';

import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { getAboutValues, getProfileTech, getBio, AboutValue } from '@/lib/data';
import { Locale } from '@/i18n/config';

export function About() {
  const locale = useLocale();
  const t = useTranslations('about');
  const values = getAboutValues(locale as Locale);
  const profileTech = getProfileTech(locale as Locale);
  const bio = getBio(locale as Locale);

  return (
    <section className="w-full bg-retro-card py-16 md:py-24 border-b-2 border-retro-ink" id="sobre-mi">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="bg-retro-bg border-2 border-retro-ink p-6 retro-shadow-lg flex flex-col gap-4 relative">
              <div className="flex items-center justify-between pb-2 border-b-2 border-retro-ink font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-retro-ink"></span>
                  <span className="font-bold">DEV_PROFILE // MAYDERC</span>
                </div>
                <span className="px-2 py-0.5 border border-retro-ink bg-retro-mint text-retro-on-accent-2 font-bold text-[10px]">ACTIVO</span>
              </div>
              <div className="relative w-full h-80 bg-retro-card border-2 border-retro-ink flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 border-2 border-retro-ink bg-retro-yellow text-retro-on-accent flex items-center justify-center mb-4 retro-shadow-sm relative">
                  <span className="font-mono text-2xl font-bold tracking-wider">[MC]</span>
                  <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-retro-ink border border-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[12px] text-white font-bold">check</span>
                  </span>
                </div>
                <h4 className="font-sans font-bold text-xl text-retro-ink mb-1">{t('profile.name')}</h4>
                <span className="font-mono text-xs font-bold text-retro-muted mb-4">{t('profile.role')}</span>
                <div className="flex flex-wrap justify-center gap-1.5 max-w-xs font-mono text-[10px] font-bold">
                  {profileTech.map((tech, index) => (
                    <span key={index} className="px-2 py-0.5 bg-retro-bg border border-retro-ink">{tech}</span>
                  ))}
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono font-bold text-retro-muted pt-2 border-t border-retro-ink/20">
                  <span>ID: mayderc.dev</span>
                  <span>STATUS: DISPONIBLE</span>
                </div>
              </div>
              <div className="flex items-center justify-between font-mono text-xs font-bold pt-1">
                <span>{t('profile.location')}</span>
                <span className="bg-retro-card px-2 py-0.5 border border-retro-ink flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">public</span> {t('profile.remote')}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-retro-ink uppercase">
              <span>{t('label')}</span>
              <span className="w-8 h-0.5 bg-retro-ink inline-block"></span>
            </div>
            <h2 className="heading-lg leading-tight">
              {t('headline')}
            </h2>
            <div className="flex flex-col gap-4 font-sans text-sm sm:text-base text-retro-muted leading-relaxed">
              {bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {values.map((value: AboutValue, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-retro-bg border-2 border-retro-ink retro-shadow-sm">
                  <span className="material-symbols-outlined text-retro-ink text-[22px] mt-0.5">check_circle</span>
                  <div>
                    <span className="font-mono text-xs font-bold text-retro-ink block mb-0.5">{value.title}</span>
                    <span className="font-sans text-xs text-retro-muted">{value.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
