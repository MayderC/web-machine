'use client';

import { NextIntlClientProvider } from 'next-intl';
import type { ComponentProps } from 'react';
import { Locale } from '@/i18n/config';

type ProviderProps = ComponentProps<typeof NextIntlClientProvider>;

interface ProvidersProps {
  children: React.ReactNode;
  locale: Locale;
  messages: ProviderProps['messages'];
  timeZone: ProviderProps['timeZone'];
  now: ProviderProps['now'];
}

export function Providers({
  children,
  locale,
  messages,
  timeZone,
  now,
}: ProvidersProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={timeZone}
      now={now}
    >
      {children}
    </NextIntlClientProvider>
  );
}