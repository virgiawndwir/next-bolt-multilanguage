import FooterLinks from './FooterLinks';
import SocialMedia from './SocialMedia';
import Copyright from './Copyright';
import NewsletterSignup from './NewsletterSignup';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              WebSite
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <SocialMedia />
          </div>
          
          {/* Footer Links */}
          <FooterLinks />
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <NewsletterSignup />
        </div>
        
        {/* Copyright */}
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;