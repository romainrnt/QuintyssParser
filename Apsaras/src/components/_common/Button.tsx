import React, { FC, PropsWithChildren } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

export const stylesButtonBase =
  'inline-flex justify-center items-center max-w-full transition ease-in-out my-0 px-8';
export const stylesButtonPrimary = `${stylesButtonBase} bg-osteo-background-green text-osteo-text-dark text-[16px] uppercase font-black py-5 rounded-full`;
export const stylesButtonSecondary = `${stylesButtonBase} bg-osteo-background-dark text-osteo-background text-[16px] uppercase font-black py-5 rounded-full`;

interface IProps {
  as: 'button' | 'a';
  buttonStyle?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'submit';
  onClick?: () => void;
}
const Button: FC<PropsWithChildren<IProps>> = ({
  children,
  as,
  buttonStyle = 'primary',
  href,
  className,
  onClick,
  disabled,
  type,
}) => {
  if (as === 'a' && href) {
    return (
      <Link
        href={href}
        className={clsx(
          buttonStyle === 'primary' && stylesButtonPrimary,
          buttonStyle === 'secondary' && stylesButtonSecondary,
          className,
        )}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type && type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={clsx(
        buttonStyle === 'primary' && stylesButtonPrimary,
        buttonStyle === 'secondary' && stylesButtonSecondary,
        className,
      )}
      disabled={disabled ?? false}
    >
      {children}
    </button>
  );
};

export default Button;
