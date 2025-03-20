import clsx from 'clsx';
import Image from 'next/image';
import { FC, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import Wrapper from './_common/Wrapper';
import logoApsaras from '../components/assets/Homepage/logo-apsara-blanc@2x.png';
import NavBar from './NavBar';
import { LayoutType } from '../lib/types/types';

// Header
interface IProps {
  type: LayoutType;
}

const Header: FC<IProps> = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(bool => !bool);
  };

  return (
    <header
      className={clsx(
        'py-6 md:pt-6 lg:pb-16 xl:pt-12 xl:pb-8 absolute z-40 w-full top-0 font-antonio',
        {
          absolute: type === 'home',
        }
      )}
    >
      <Wrapper className="flex-col gap-y-4">
        <section className="flex flex-row items-center justify-between text-xl">
          <div
            className={clsx(
              'relative',
              'ml-[-15px] md:ml-[181px] lg:ml-[181px] xl:ml-[181px]',
              'w-[120px] md:w-[183px]',
              'h-[60px] md:h-[92px]'
            )}
          >
            {type === 'home' ? (
              <Image
                src={logoApsaras}
                alt="Logo Apsaras"
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={logoApsaras}
                alt="Logo Apsaras"
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <div className="flex items-center gap-x-9 font-antonio">
            <span className="hidden lg:inline-block" />
            <span className="inline-block lg:hidden">
              <IoMenu
                className={clsx('text-3xl text-white cursor-pointer lg:hidden')}
                onClick={toggleMenu}
              />
            </span>
          </div>
        </section>
        <NavBar toggleMenu={toggleMenu} isOpen={isOpen} />
      </Wrapper>
    </header>
  );
};

export default Header;
