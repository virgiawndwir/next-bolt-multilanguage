'use client';

import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-blue-600"
      title={`Switch to ${language === 'id' ? 'English' : 'Bahasa Indonesia'}`}
    >
      <Languages size={18} />
      <span className="text-sm font-medium uppercase">
        {language === 'id' ? 'EN' : 'ID'}
      </span>
    </button>
  );
};

export default LanguageToggle;