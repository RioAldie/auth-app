'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/context/LanguageContext';

const DropdownLanguage = () => {
  const { switchLanguage, language, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 border text-white bg-primary rounded-md">
        {t('language')} {language.toUpperCase()}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => switchLanguage('zh')}>
          中文 (CN)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage('en')}>
          English (EN)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage('id')}>
          Bahasa Indonesia (ID)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownLanguage;
