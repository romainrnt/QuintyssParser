import React, { useState } from 'react';

import Image from 'next/image';

import ActuImage from '../assets/ActuPage/photoactu4.png';
import backgroundImage from '../assets/photo-silvia-dos.png';

const HeaderComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [backgroundImage, ActuImage, backgroundImage, ActuImage, backgroundImage];
  const totalSlides = slides.length;

  return (
    <section className="relative w-full h-[830px] overflow-hidden">
      {/* Desktop image slider */}
      <div className="absolute top-0 right-0 w-[calc(100%-661px)] h-[830px] hidden lg:block">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute top-0 right-0 w-full h-full transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Red background */}
      <div className="absolute top-0 left-0 w-full lg:w-[661px] h-[830px] bg-[#960F05]" />

      {/* Content container */}
      <div className="relative z-10 w-full px-4 lg:px-[8vw] 2xl:px-[12vw]">
        <div className="max-w-[1920px] mx-auto">
          <div className="mt-[264px] lg:ml-[230px] max-w-[542px]">
            <div
              className="text-white text-4xl md:text-6xl lg:text-[110px] font-bold leading-tight lg:leading-[130px]"
              style={{ fontFamily: 'Antonio', textShadow: '8px 5px 0px #09252D80' }}
            >
              Dolores en la majeur
            </div>
          </div>

          <button
            type="button"
            className="mt-8 lg:mt-[45px] lg:ml-[230px] w-[208px] h-[60px] text-white font-bold text-lg flex items-center justify-center border-[3px] border-white hover:bg-white hover:text-[#960F05] transition-colors group relative z-10"
          >
            SUR LE SPECTACLE
          </button>

          {/* Navigation dots */}
          <div
            className="absolute flex flex-col gap-2 z-20"
            style={{ right: '115px', left: '1318px', top: '50px' }}
          >
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={`slide-dot-${index}`}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderComponent;
