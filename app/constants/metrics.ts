/**
 * Shared metrics constants for About and CTA sections
 * Centralized to avoid duplication and ensure consistency
 */

export const COMPANY_METRICS = {
  projects: {
    value: '12',
    label: {
      it: 'Progetti',
      en: 'Projects'
    }
  },
  retention: {
    value: '98%',
    label: {
      it: 'Retention',
      en: 'Retention'
    }
  },
  rating: {
    value: '4.9/5',
    label: {
      it: 'Rating',
      en: 'Rating'
    }
  },
  experience: {
    value: '8 anni',
    label: {
      it: 'Esperienza',
      en: 'Experience'
    }
  }
} as const;

/**
 * Get metrics array for locale
 */
export const getMetrics = (locale: 'it' | 'en' = 'it') => {
  return [
    { value: COMPANY_METRICS.projects.value, label: COMPANY_METRICS.projects.label[locale] },
    { value: COMPANY_METRICS.retention.value, label: COMPANY_METRICS.retention.label[locale] },
    { value: COMPANY_METRICS.rating.value, label: COMPANY_METRICS.rating.label[locale] },
    { value: COMPANY_METRICS.experience.value, label: COMPANY_METRICS.experience.label[locale] }
  ];
};

/**
 * Long-form metrics for About section
 */
export const getAboutMetrics = (locale: 'it' | 'en' = 'it') => {
  return [
    { 
      label: locale === 'it' ? 'Progetti rilasciati' : 'Projects delivered', 
      value: COMPANY_METRICS.projects.value 
    },
    { 
      label: locale === 'it' ? 'Client retention' : 'Client retention', 
      value: COMPANY_METRICS.retention.value 
    },
    { 
      label: locale === 'it' ? 'Rating medio' : 'Average rating', 
      value: COMPANY_METRICS.rating.value 
    },
    { 
      label: locale === 'it' ? 'Exp. media team' : 'Team avg. experience', 
      value: COMPANY_METRICS.experience.value 
    }
  ];
};
