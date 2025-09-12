export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface SlideItem {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}