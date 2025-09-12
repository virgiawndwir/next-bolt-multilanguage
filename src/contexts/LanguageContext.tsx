'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  id: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'Tentang',
    'nav.services': 'Layanan',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontak',
    'search.placeholder': 'Cari...',
    
    // Hero Slider
    'hero.slide1.title': 'Solusi Web Terdepan',
    'hero.slide1.description': 'Kami menghadirkan teknologi web terbaru untuk mengembangkan bisnis Anda ke level yang lebih tinggi.',
    'hero.slide1.button': 'Mulai Sekarang',
    'hero.slide2.title': 'Tim Profesional',
    'hero.slide2.description': 'Didukung oleh tim developer berpengalaman yang siap mewujudkan visi digital Anda.',
    'hero.slide2.button': 'Lihat Portfolio',
    'hero.slide3.title': 'Inovasi Berkelanjutan',
    'hero.slide3.description': 'Selalu mengikuti perkembangan teknologi terbaru untuk memberikan hasil terbaik.',
    'hero.slide3.button': 'Hubungi Kami',
    
    // Features Section
    'features.title': 'Mengapa Memilih Kami?',
    'features.subtitle': 'Kami menyediakan solusi lengkap untuk kebutuhan digital Anda dengan teknologi terdepan dan layanan profesional.',
    'features.webdev.title': 'Web Development',
    'features.webdev.description': 'Aplikasi web modern dengan teknologi terdepan dan performa optimal.',
    'features.mobile.title': 'Mobile Apps',
    'features.mobile.description': 'Aplikasi mobile native dan cross-platform untuk iOS dan Android.',
    'features.design.title': 'UI/UX Design',
    'features.design.description': 'Desain antarmuka yang menarik dan pengalaman pengguna yang intuitif.',
    'features.performance.title': 'Performance',
    'features.performance.description': 'Optimasi performa untuk loading yang cepat dan pengalaman yang smooth.',
    'features.security.title': 'Security',
    'features.security.description': 'Keamanan tingkat enterprise dengan enkripsi dan proteksi data terbaik.',
    'features.support.title': 'Support 24/7',
    'features.support.description': 'Tim support yang siap membantu Anda kapan saja dibutuhkan.',
    
    // Stats Section
    'stats.projects': 'Proyek Selesai',
    'stats.clients': 'Klien Puas',
    'stats.experience': 'Tahun Pengalaman',
    'stats.support': 'Jam Support',
    
    // CTA Section
    'cta.title': 'Siap Memulai Proyek Anda?',
    'cta.subtitle': 'Mari diskusikan kebutuhan digital Anda dan wujudkan visi bisnis Anda bersama tim profesional kami.',
    'cta.contact': 'Hubungi Kami',
    'cta.portfolio': 'Lihat Portfolio',
    
    // Footer
    'footer.description': 'Kami menyediakan solusi web terbaik untuk bisnis Anda. Dengan teknologi terdepan dan tim yang berpengalaman, kami siap membantu mewujudkan visi digital Anda.',
    'footer.company': 'Perusahaan',
    'footer.services': 'Layanan',
    'footer.about': 'Tentang Kami',
    'footer.team': 'Tim Kami',
    'footer.careers': 'Karir',
    'footer.contact': 'Kontak',
    'footer.webdev': 'Web Development',
    'footer.mobile': 'Mobile Apps',
    'footer.design': 'UI/UX Design',
    'footer.consulting': 'Konsultasi',
    'footer.newsletter.title': 'Tetap Update',
    'footer.newsletter.subtitle': 'Berlangganan newsletter kami untuk update dan insight terbaru.',
    'footer.newsletter.placeholder': 'Masukkan email Anda',
    'footer.newsletter.subscribe': 'Berlangganan',
    'footer.newsletter.sending': 'Mengirim...',
    'footer.copyright': 'Semua hak dilindungi. Dibuat dengan ❤️ di Indonesia.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'search.placeholder': 'Search...',
    
    // Hero Slider
    'hero.slide1.title': 'Leading Web Solutions',
    'hero.slide1.description': 'We bring the latest web technology to take your business to the next level.',
    'hero.slide1.button': 'Get Started',
    'hero.slide2.title': 'Professional Team',
    'hero.slide2.description': 'Supported by experienced developers ready to realize your digital vision.',
    'hero.slide2.button': 'View Portfolio',
    'hero.slide3.title': 'Continuous Innovation',
    'hero.slide3.description': 'Always following the latest technology developments to deliver the best results.',
    'hero.slide3.button': 'Contact Us',
    
    // Features Section
    'features.title': 'Why Choose Us?',
    'features.subtitle': 'We provide complete solutions for your digital needs with cutting-edge technology and professional services.',
    'features.webdev.title': 'Web Development',
    'features.webdev.description': 'Modern web applications with cutting-edge technology and optimal performance.',
    'features.mobile.title': 'Mobile Apps',
    'features.mobile.description': 'Native and cross-platform mobile applications for iOS and Android.',
    'features.design.title': 'UI/UX Design',
    'features.design.description': 'Attractive interface design and intuitive user experience.',
    'features.performance.title': 'Performance',
    'features.performance.description': 'Performance optimization for fast loading and smooth experience.',
    'features.security.title': 'Security',
    'features.security.description': 'Enterprise-level security with encryption and best data protection.',
    'features.support.title': 'Support 24/7',
    'features.support.description': 'Support team ready to help you whenever needed.',
    
    // Stats Section
    'stats.projects': 'Projects Completed',
    'stats.clients': 'Happy Clients',
    'stats.experience': 'Years Experience',
    'stats.support': 'Support Hours',
    
    // CTA Section
    'cta.title': 'Ready to Start Your Project?',
    'cta.subtitle': 'Let\'s discuss your digital needs and realize your business vision with our professional team.',
    'cta.contact': 'Contact Us',
    'cta.portfolio': 'View Portfolio',
    
    // Footer
    'footer.description': 'We provide the best web solutions for your business. With cutting-edge technology and experienced team, we are ready to help realize your digital vision.',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.about': 'About Us',
    'footer.team': 'Our Team',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact',
    'footer.webdev': 'Web Development',
    'footer.mobile': 'Mobile Apps',
    'footer.design': 'UI/UX Design',
    'footer.consulting': 'Consulting',
    'footer.newsletter.title': 'Stay Updated',
    'footer.newsletter.subtitle': 'Subscribe to our newsletter for the latest updates and insights.',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.newsletter.sending': 'Sending...',
    'footer.copyright': 'All rights reserved. Made with ❤️ in Indonesia.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};