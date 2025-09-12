import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-xl">W</span>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        WebSite
      </span>
    </Link>
  );
};

export default Logo;