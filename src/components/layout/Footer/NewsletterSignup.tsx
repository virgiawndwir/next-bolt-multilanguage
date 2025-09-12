'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Newsletter signup:', email);
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="flex items-center justify-center mb-4">
        <Mail className="text-blue-400 mr-2" size={24} />
        <h4 className="text-xl font-semibold">{t('footer.newsletter.title')}</h4>
      </div>
      <p className="text-gray-300 mb-6">
        {t('footer.newsletter.subtitle')}
      </p>
      <form onSubmit={handleSubmit} className="grid md:flex gap-2">
        <input
          type="email"
          placeholder={t('footer.newsletter.placeholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Send size={16} />
          )}
          {isSubmitting ? t('footer.newsletter.sending') : t('footer.newsletter.subscribe')}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;