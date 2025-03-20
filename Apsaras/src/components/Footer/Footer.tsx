import { FC } from 'react';

import FooterInstagramGallery from './FooterInstagramGallery';
import FooterLegalBar from './FooterLegalBar';
import FooterLogo from './FooterLogo';
import FooterNavigationLinks from './FooterNavigationLinks';
import FooterSocialLinks from './FooterSocialLinks';

const Footer: FC = () => (
  <footer>
    <div className="relative z-10 flex flex-col px-4 py-4 gap-y-6 bg-[#960F05] lg:flex-row lg:px-16 xl:px-32 lg:gap-x-16 lg:py-16">
      <FooterLogo />
      <FooterNavigationLinks />
      <FooterSocialLinks />
      <FooterInstagramGallery />
    </div>
    <FooterLegalBar />
  </footer>
);

export default Footer;
