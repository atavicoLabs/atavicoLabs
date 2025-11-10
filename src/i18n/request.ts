import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from './config';
 
export default getRequestConfig(async ({locale}) => {
  // Use default locale if none provided
  const validLocale = locale && locales.includes(locale as any) ? locale : defaultLocale;
 
  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default
  };
});
