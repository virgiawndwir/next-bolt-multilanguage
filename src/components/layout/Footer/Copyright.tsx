import { useLanguage } from '@/contexts/LanguageContext';

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
      <p className="text-gray-400 text-sm">
        © {currentYear} WebSite. {t('footer.copyright')}
      </p>
    </div>
  );
};

export default Copyright;