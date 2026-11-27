import { afterEach, describe, expect, it } from 'vitest';

import i18n, { messages } from '@/i18n';

describe('i18n', () => {
  afterEach(() => {
    i18n.global.locale.value = 'es';
  });

  it('uses Spanish as the default locale', () => {
    expect(i18n.global.locale.value).toBe('es');
  });

  it('translates navigation.home in Spanish and English', () => {
    expect(i18n.global.t('navigation.home')).toBe('Inicio');

    i18n.global.locale.value = 'en';
    expect(i18n.global.t('navigation.home')).toBe('Home');
  });

  it('falls back to English when a Spanish message is missing', () => {
    const spanishHome = messages.es.navigation.home;
    Reflect.deleteProperty(messages.es.navigation, 'home');

    try {
      expect(i18n.global.t('navigation.home')).toBe('Home');
    } finally {
      messages.es.navigation.home = spanishHome;
    }
  });
});
