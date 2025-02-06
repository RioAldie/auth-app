'use client';
import { useLanguage } from '@/context/LanguageContext';

const Page = () => {
  const { t } = useLanguage();
  return <div> {t('purchasingPage')}</div>;
};

export default Page;
