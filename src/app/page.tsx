'use client';

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import HeroSlider from '@/components/ui/HeroSlider/HeroSlider';
import FeaturesSection from '@/components/sections/FeaturesSection/FeaturesSection';
import StatsSection from '@/components/sections/StatsSection/StatsSection';
import { useLanguage } from '@/contexts/LanguageContext';

function HomeContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              {t('cta.contact')}
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              {t('cta.portfolio')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomeContent />
      </main>
      
      <Footer />
    </div>
  );
}