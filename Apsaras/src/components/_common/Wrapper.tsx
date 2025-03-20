import React, { FC } from 'react';

import clsx from 'clsx';

interface IProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  variant?: 'medium' | 'large';
}
const Wrapper: FC<IProps> = ({ children, className, variant = 'large' }) => (
  <div
    className={clsx(
      'flex mx-auto w-full px-8 sm:max-w-[600px] md:max-w-[668px] lg:max-w-[957px] xl:max-w-[1640px]',
      {
        'xl:max-w-[1152px]': variant === 'medium',
        'xl:max-w-[1640px]': variant === 'large',
      },
      className,
    )}
  >
    {children}
  </div>
);

export default Wrapper;
