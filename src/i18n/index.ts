import { createI18n } from 'vue-i18n';

import enMessages from './locales/en.json';
import esMessages from './locales/es.json';

export type SupportedLocale = 'es' | 'en';

export interface MessageSchema {
  navigation: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
}

export const messages = {
  es: esMessages,
  en: enMessages
} satisfies Record<SupportedLocale, MessageSchema>;

const i18n = createI18n<MessageSchema, SupportedLocale, false>({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages
});

export default i18n;
