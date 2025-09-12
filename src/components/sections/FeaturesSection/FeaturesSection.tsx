import { Code, Smartphone, Palette, Zap, Shield, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Code size={32} />,
      title: t('features.webdev.title'),
      description: t('features.webdev.description')
    },
    {
      icon: <Smartphone size={32} />,
      title: t('features.mobile.title'),
      description: t('features.mobile.description')
    },
    {
      icon: <Palette size={32} />,
      title: t('features.design.title'),
      description: t('features.design.description')
    },
    {
      icon: <Zap size={32} />,
      title: t('features.performance.title'),
      description: t('features.performance.description')
    },
    {
      icon: <Shield size={32} />,
      title: t('features.security.title'),
      description: t('features.security.description')
    },
    {
      icon: <Users size={32} />,
      title: t('features.support.title'),
      description: t('features.support.description')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;