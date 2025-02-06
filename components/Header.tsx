'use client';

import { useLanguage } from '@/context/LanguageContext';
import DropdownLanguage from './DropdownLanguage';

type HeaderProps = {
  email: string;
};

const Header = ({ email }: HeaderProps) => {
  const { t } = useLanguage();
  return (
    <header className="admin-header flex items-center">
      <div>
        <h2 className="text-2xl font-semibold text-dark-400">
          {t('welcomeAdmin')} {email}
        </h2>
      </div>
      <div>
        <DropdownLanguage />
      </div>
    </header>
  );
};

export default Header;
