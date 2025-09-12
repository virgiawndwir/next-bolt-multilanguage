import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Logo from './Logo';
import LanguageToggle from '@/components/ui/LanguageToggle/LanguageToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navigation />
          <div className="flex items-center space-x-4">
            {/* <SearchBar /> */}
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;