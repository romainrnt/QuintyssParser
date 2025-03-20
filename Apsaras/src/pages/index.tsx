import { FC } from 'react';
import Header from '../components/Header';
import Actualites from '../components/HomePage/ActualitesSection/ActualitesSection';
import Contact from '../components/HomePage/ContactSection/Contact';
import Description from '../components/HomePage/DescriptionSection/Description';
import Evenements from '../components/HomePage/EvenementSection/Evenements';
import GalerieMedias from '../components/HomePage/GaleriesSection/GalerieMedia';
import HeaderComponent from '../components/HomePage/HeaderComponent';
import HeroFooter from '../components/HomePage/HeroFooter/HeroFooter';
import Newsletter from '../components/HomePage/NewsletterSection/Newsletter';
import SocialMediaComponent from '../components/HomePage/SocialMediaComponent/SocialMediaComponent';
import Spectacles from '../components/HomePage/SpectaclesSection/Spectacles';
import Layout from '../layout/Layout';

const Home: FC = () => (
  <>
    <main className="flex flex-col w-full bg-white">
      <Header type="home" />
      <HeaderComponent />
      <HeroFooter />
      <SocialMediaComponent type="home" />
      <Actualites />
      <Description />
      <Spectacles />
      <Evenements />
      <GalerieMedias />
      <Contact />
      <Newsletter />
    </main>
  </>
);

export default Layout(<Home />);
