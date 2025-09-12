import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import type { SocialLink } from '@/types';

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: <Facebook size={20} />
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: <Twitter size={20} />
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: <Instagram size={20} />
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <Linkedin size={20} />
  }
];

const SocialMedia: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-110"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;