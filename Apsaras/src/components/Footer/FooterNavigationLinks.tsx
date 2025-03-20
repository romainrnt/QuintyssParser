import { FC } from 'react';

const FooterNavigationLinks: FC = () => (
  <div className="flex flex-col gap-y-6 lg:w-1/4">
    {/* Titre NAVIGATION */}
    <div
      style={{
        font: 'normal normal 300 20px/28px Fira Sans',
        letterSpacing: '0.4px',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        opacity: 1,
        textAlign: 'left',
      }}
    >
      NAVIGATION
    </div>

    {/* Liens de navigation */}
    <div className="flex flex-col gap-y-[18px]">
      {['La Compagnie', 'Spectacles', 'Événements', 'Actualités', 'Contact'].map((linkText) => (
        <button
          key={linkText}
          type="button"
          className="relative text-left hover:underline-effect"
          style={{
            font: 'normal normal 500 16px/19px Fira Sans',
            letterSpacing: '0px',
            color: '#FFFFFF',
            opacity: 1,
          }}
        >
          {linkText}
        </button>
      ))}
    </div>
  </div>
);

export default FooterNavigationLinks;
