import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';

const messagesMap = {
  en: () => import('@messages/en.json'),
  fr: () => import('@messages/fr.json'),
};

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = await messagesMap[locale]();

  return {
    locale,
    messages: messages.default
  };
});