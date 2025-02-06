'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  useSearchParams,
  usePathname,
  useRouter,
} from 'next/navigation';
import { translations } from '@/constant';

type Language = 'en' | 'id' | 'zh';

interface LanguageContextType {
  language: Language;
  t: (key: keyof (typeof translations)['en']) => string;
  switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [language, setLanguage] = useState<Language>(
    (searchParams.get('lang') as Language) || 'en'
  );

  useEffect(() => {
    // Update URL when language changes
    const params = new URLSearchParams(searchParams);
    params.set('lang', language);
    router.replace(`${pathname}?${params.toString()}`);
  }, [language, pathname, router, searchParams]);

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = (key: keyof (typeof translations)['en']) =>
    translations[language][key];

  return (
    <LanguageContext.Provider value={{ language, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    );
  }
  return context;
};
