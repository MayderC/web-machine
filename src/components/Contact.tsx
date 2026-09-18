'use client';

import { useLocale } from 'next-intl';
import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { getContactServices } from '@/lib/data';
import { Locale } from '@/i18n/config';
import { contactEmail, whatsappUrl, whatsappNumber } from '@/lib/config';

export function Contact() {
  const locale = useLocale();
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setFormData(prev => ({ ...prev, service }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
        setSelectedService('');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = getContactServices(locale as Locale);

  return (
    <section className="w-full bg-retro-card py-16 md:py-24" id="contacto">
      <div className="container-main">
        <div className="bg-retro-bg border-2 border-retro-ink p-6 md:p-10 retro-shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-retro-ink uppercase mb-2 block tracking-wider">
                  {t('label')}
                </span>
                <h2 className="heading-lg mb-4">
                  {t('headline')}
                </h2>
                <p className="body-md mb-6">
                  {t('description')}
                </p>
                <div className="p-4 bg-retro-card border-2 border-retro-ink mb-6 retro-shadow-sm">
                  <span className="font-mono text-xs font-bold text-retro-ink block mb-1">
                    {t('guarantee.title')}
                  </span>
                  <p className="font-sans text-xs text-retro-muted leading-relaxed">
                    {t('guarantee.description')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t-2 border-retro-ink font-mono text-xs">
                <span className="font-bold text-retro-muted uppercase mb-1">
                  {t('channels.label')}
                </span>
                <a className="font-bold text-retro-ink hover:underline flex items-center gap-2 py-1" href={`mailto:${contactEmail}`}>
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>{contactEmail}</span>
                </a>
                {whatsappUrl && (
                  <a className="font-bold text-retro-ink hover:underline flex items-center gap-2 py-1" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>{`${t('channels.whatsapp')} // ${whatsappNumber}`}</span>
                  </a>
                )}
                <a className="font-bold text-retro-ink hover:underline flex items-center gap-2 py-1" href={t('channels.github')} target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  <span>{t('channels.github')}</span>
                </a>
                <a className="font-bold text-retro-ink hover:underline flex items-center gap-2 py-1" href={t('channels.linkedin')} target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-[18px]">work</span>
                  <span>{t('channels.linkedin')}</span>
                </a>
              </div>
            </div>
            {/* Formulario Conciso */}
            <div className="lg:col-span-7 bg-retro-card p-6 md:p-8 border-2 border-retro-ink retro-shadow">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="label-field" htmlFor="contact-name">
                      {t('form.nameLabel')}
                    </label>
                    <input
                      className="input-field"
                      id="contact-name"
                      name="name"
                      placeholder={t('form.namePlaceholder')}
                      required
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="label-field" htmlFor="contact-email">
                      {t('form.emailLabel')}
                    </label>
                    <input
                      className="input-field"
                      id="contact-email"
                      name="email"
                      placeholder={t('form.emailPlaceholder')}
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="label-field">
                    {t('form.serviceLabel')}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`pill-btn ${selectedService === service ? 'pill-btn-active' : 'pill-btn-inactive'}`}
                        onClick={() => handleServiceSelect(service)}
                        disabled={isSubmitting}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="label-field" htmlFor="contact-message">
                    {t('form.messageLabel')}
                  </label>
                  <textarea
                    className="input-field resize-none"
                    id="contact-message"
                    name="message"
                    placeholder={t('form.messagePlaceholder')}
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="font-mono text-[11px] font-bold text-retro-muted flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-retro-ink inline-block"></span>
                    {t('form.disclaimer')}
                  </span>
                  <button
                    type="submit"
                    className="btn-primary group w-full sm:w-auto"
                    disabled={isSubmitting || !selectedService}
                  >
                    <span id="btn-text">
                      {isSubmitting ? t('form.submitting') : submitStatus === 'success' ? t('form.success') : t('form.submit')}
                    </span>
                    <span className="material-symbols-outlined text-[18px] ml-2 group-hover:translate-x-1 transition-transform">send</span>
                  </button>
                </div>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-retro-mint border-2 border-retro-ink text-retro-on-accent-2 font-sans text-xs font-medium flex items-center gap-3" id="form-success">
                    <span className="material-symbols-outlined text-retro-ink text-[24px]">check_circle</span>
                    <div>
                      <span className="font-mono font-bold text-sm block">{t('form.successTitle')}</span>
                      <span>{t('form.successDescription')}</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
