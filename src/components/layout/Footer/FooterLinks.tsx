import Link from 'next/link';
import type { FooterSection } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

const FooterLinks: React.FC = () => {
  const { t } = useLanguage();

  const linkSections: FooterSection[] = [
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.about'), href: '/about' },
        { label: t('footer.team'), href: '/team' },
        { label: t('footer.careers'), href: '/careers' },
        { label: t('footer.contact'), href: '/contact' },
      ]
    },
    {
      title: t('footer.services'),
      links: [
        { label: t('footer.webdev'), href: '/services/web' },
        { label: t('footer.mobile'), href: '/services/mobile' },
        { label: t('footer.design'), href: '/services/design' },
        { label: t('footer.consulting'), href: '/services/consulting' },
      ]
    }
  ];

  return (
    <>
      {linkSections.map((section) => (
        <div key={section.title}>
          <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterLinks;