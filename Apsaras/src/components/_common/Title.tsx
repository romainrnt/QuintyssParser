import React, { FC, PropsWithChildren } from 'react';

import clsx from 'clsx';

interface IProps {
  variant?: string;
}

const Title: FC<PropsWithChildren<IProps>> = ({ children, variant }) => (
  <div className="flex flex-col gap-y-3 relative z-20">
    <h1
      className={clsx(
        'text-center ',
        variant === 'default'
          ? 'text-[32px] font-bold lg:text-[96px] text-white'
          : 'uppercase text-[24px] font-bold lg:text-[40px] text-osteo-text-dark',
      )}
    >
      {children}
    </h1>
  </div>
);

export default Title;
