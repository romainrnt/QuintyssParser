import React from 'react';

import Banner from '../components/Banner/Banner';
import FirstArrow from '../components/CompagniePage/1stArrow/FirstArrow';
import SecondArrow from '../components/CompagniePage/2ndArrow/SecondArrow';
import ThirdArrow from '../components/CompagniePage/3rdArrow/ThirdArrow';
import FourthArrow from '../components/CompagniePage/4thArrow/FourthArrow';
import FifthArrow from '../components/CompagniePage/5thArrow/FifthArrow';
import SixthArrow from '../components/CompagniePage/6thArrow/SixthArrow';
import SeventhArrow from '../components/CompagniePage/7thArrow/SeventhArrow';
import Details from '../components/CompagniePage/Details';
import DownloadCard from '../components/CompagniePage/DownloadCardSection/DownloadCard';
import HeaderComponent from '../components/CompagniePage/HeaderComponentCompagnie';
import Header from '../components/Header';
import Description from '../components/HomePage/DescriptionSection/Description';
import SocialMediaComponent from '../components/HomePage/SocialMediaComponent/SocialMediaComponent';
import Layout from '../layout/Layout';

const Compagnie: React.FC = () => {
  return (
    <>
      <Header type="home" />
      <HeaderComponent />

      <SocialMediaComponent type="normal" />
      <Banner page="La Compagnie" />
      <div
        className="relative h-[2041px]"
        style={{
          background:
            'transparent linear-gradient(0deg, #09252D0D 0%, #C5A7A900 100%) 0% 0% no-repeat padding-box',
        }}
      >
        <FirstArrow />
        <SecondArrow />
        <ThirdArrow />
        <FourthArrow />
        <FifthArrow />
        <SixthArrow />
        <SeventhArrow />
        <DownloadCard />
      </div>
      <Description />
      <Details />
    </>
  );
};

export default Layout(<Compagnie />);
