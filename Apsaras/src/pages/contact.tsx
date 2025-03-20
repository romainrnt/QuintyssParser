import React, { useState } from 'react';

import Image from 'next/image';

import Banner from '../components/Banner/Banner';
import ContactForm from '../components/ContactPage/ContactForm/ContactForm';
import ContactFooter from '../components/ContactPage/ContactSection/ContactSection';
import HeaderComponentContact from '../components/ContactPage/HeaderComponentContact';
import Header from '../components/Header';
import SocialMediaComponent from '../components/HomePage/SocialMediaComponent/SocialMediaComponent';
import Layout from '../layout/Layout';

import Map from '../components/assets/ContactPage/googlemap.png';
import Map2 from '../components/assets/ContactPage/googlemap2.png';
import BlocPinLocation from '../components/assets/ContactPage/icon bloc pin location.png';
import iconPinLocation from '../components/assets/ContactPage/icon pin location white outlined@2x.png';
import Pin from '../components/assets/ContactPage/Pin@2x.png';
import SpectacleModal from '../components/ContactPage/SpectacleModal';

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = [
    {
      id: '1',
      location: 'Institut Français de Dakar',
      city: 'ZOKWEZO',
      date: '29/03/2018',
    },
    {
      id: '2',
      location: 'Institut Français Saint-Louis',
      city: 'ZOKWEZO',
      date: '06/04/2018',
    },
    {
      id: '3',
      location: 'Festival International de Théâtre de Kaolack',
      city: 'ZOKWEZO',
      date: '24 et 25/10/2016',
    },
    {
      id: '4',
      location: 'Fethekao – Theatre International Festival à Kaolack',
      city: 'Le temps des sirènes',
      date: '24 et 25/10/2016',
    },
  ];

  return (
    <>
      <Header type="home" />
      <HeaderComponentContact />
      <SocialMediaComponent type="normal" />
      <Banner page="Contact" />

      {/* Contact Form and Map */}
      <div className="relative">
        <div className="relative w-full h-[792px]">
          <Image
            src={Map}
            alt="map google"
            fill
            className="object-cover bg-transparent bg-no-repeat opacity-100"
            priority
          />
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <Image
                src={BlocPinLocation}
                alt="bloc pin location"
                width={48}
                height={58}
                className="object-contain"
              />
              <Image
                src={iconPinLocation}
                alt="icon pin location"
                width={24}
                height={24}
                className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[90%] md:w-[500px] right-[200px] top-[70px]">
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <ContactFooter />

      {/* Title Section */}
      <div className="relative bg-white h-[172px] w-full">
        <div className="mx-[130px] pt-[30px] relative">
          <p
            className="text-[#59BDBB] text-left text-[40px] leading-[90px] font-bold"
            style={{
              fontFamily: 'Antonio',
              textShadow: '3px 3px 0px #09252D0D',
              width: '1188px',
              height: '52px',
            }}
          >
            Carte des lieux où les spectacles ont été joués
          </p>
          <div
            className="absolute"
            style={{
              bottom: '-30px',
              left: '-130px',
              width: '1000px',
              height: '6px',
              background:
                'linear-gradient(270deg, #FFFFFF00 0%, #59BDBB 34%, #59BDBB 100%) no-repeat padding-box',
            }}
          />
        </div>
      </div>

      {/* Second Map Section with Modal */}
      <div className="relative w-full h-[792px]">
        <Image
          src={Map2}
          alt="map google"
          fill
          className="object-cover bg-transparent bg-no-repeat opacity-100"
          priority
        />
        <Image
          src={Pin}
          alt="location pin"
          width={30}
          height={40}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
        <SpectacleModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          events={events}
        />
      </div>
    </>
  );
};

export default Layout(<Contact />);
