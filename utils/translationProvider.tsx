export const availableLocales = ['en'];
export const defaultLocale = 'en';

export function useTranslation(lang?: string | null) {
  const translation =
    lang && availableLocales.includes(lang)
      ? require(`../lang/${lang}.json`)
      : require(`../lang/${defaultLocale}.json`);

  const t = (path: string): string => {
    if (translation !== null) {
      const keys = path.split('.');

      let value;
      try {
        value = keys.reduce((a, c) => a[c], translation);
      } catch (e: any) {
        return path;
      }
      return value;
    }
    return path;
  };

  return t;
}
