import clsx from 'clsx';
import Link from 'next/link';
import { FC, useState } from 'react';
import { IoClose, IoHomeOutline } from 'react-icons/io5';
import flagFrench from './assets/flag-french.svg';
import flagSpain from './assets/flag-spain@2x.png';
import LanguageSelector from './HomePage/LanguageSelector/LanguageSelector';

interface IProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const NavBar: FC<IProps> = ({ toggleMenu, isOpen }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleLang = () => {
    setIsLangOpen(!isLangOpen);
  };

  const handleItemClick = (text: string) => {
    setActiveItem(text);
    if (window.innerWidth < 1024) {
      toggleMenu();
    }
  };

  const navItems = [
    { text: 'COMPAGNIE', href: '/compagnie' },
    { text: 'SPECTACLES', href: '/spectacles' },
    { text: 'EVENEMENTS', href: '/evenements' },
    { text: 'ACTUALITES', href: '/actualites' },
    { text: 'CONTACT', href: '/contact' },
  ];

  return (
    // WidgetNavigation (mainNavBar)
    <nav
      className={clsx(
        'z-50 flex flex-col bg-white shadow-md shadow-[#09252D33] fixed top-0 right-0 w-full h-screen',
        'lg:absolute lg:w-[1027px] lg:h-[80px] lg:top-0 lg:right-0 lg:translate-x-0',
        {
          'translate-x-full lg:translate-x-0': !isOpen,
          'translate-x-0': isOpen,
        },
        'transition-transform duration-300 lg:flex-row lg:items-center lg:justify-between'
      )}
    >
      <div className="flex justify-end p-4 lg:hidden">
        <IoClose onClick={toggleMenu} className="text-apsara-text text-4xl cursor-pointer" />
      </div>
      <div className="w-full flex flex-col items-center gap-y-6 lg:gap-0 lg:flex-row lg:justify-between lg:w-auto lg:px-4">
        <Link href="/" aria-label="Retour à l'accueil">
          <IoHomeOutline className="hidden lg:block absolute left-[47px] top-[50%] transform -translate-y-1/2 text-[23px] text-[#09252D] cursor-pointer" />
        </Link>
        <div className="flex flex-col items-center gap-y-8 lg:gap-y-0 lg:gap-x-[45px] lg:flex-row lg:ml-[100px] w-full px-6 lg:px-0 lg:py-4">
          {navItems.map(item => (
            /* WidgetNavigation (navItem) */
            <Link
              key={item.text}
              href={item.href}
              onClick={() => handleItemClick(item.text)}
              className={clsx(
                'uppercase text-[22px] leading-[19px] font-normal tracking-[0.44px] font-antonio transition-colors duration-200 py-2 lg:py-0',
                activeItem === item.text ? 'text-[#960F05]' : 'text-[#09252D] hover:text-[#960F05]'
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <LanguageSelector
          isLangOpen={isLangOpen}
          toggleLang={toggleLang}
          flagFrench={flagFrench}
          flagSpain={flagSpain}
        />
      </div>
    </nav>
  );
};

export default NavBar;
