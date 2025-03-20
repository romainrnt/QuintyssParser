import React, { useRef, useEffect, useState } from 'react';

import Image, { StaticImageData } from 'next/image';

import arrowRightWhite from '../assets/Evenements/arrow-right-outlined-white.png';
import iconPoints from '../assets/Evenements/iconpoints.png';
import iconCalendar from '../assets/icon-calendar-two-tone@2x.png';

export interface EventDate {
  from: string;
  to?: string;
  location: string;
  city: string;
}

export interface EventCardProps {
  image: StaticImageData;
  imageIcon: StaticImageData;
  title: string;
  description: string;
  dates: EventDate[];
  showMultipleDates?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({
  image,
  imageIcon,
  title,
  description,
  dates,
  showMultipleDates = false,
}) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [contentHeight, setContentHeight] = useState(169);

  useEffect(() => {
    if (descriptionRef.current) {
      const textHeight = descriptionRef.current.scrollHeight;
      const totalHeight = textHeight + 84 + 57;
      setContentHeight(totalHeight);
    }
  }, [description]);

  const calendarPosition = contentHeight + 238 - 26;
  const datesPosition = contentHeight + 238;

  return (
    <div className="max-w-[364px] w-full h-[670px] bg-[#F4F4F8] shadow-md opacity-100 rounded-lg relative p-[12px]">
      <Image
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-[238px] object-cover rounded-t-lg"
        width={364}
        height={238}
      />
      <Image
        src={imageIcon}
        alt="Icon"
        width={52}
        height={52}
        className="absolute top-[211.54px] left-1/2 -translate-x-1/2 z-10"
      />
      <div
        className="absolute top-[238px] left-0 w-full bg-[#F4F4F8]"
        style={{ height: `${contentHeight}px` }}
      >
        {/* Titre */}
        <h3
          className="absolute top-[44px] left-[27px] w-[321px]"
          style={{
            font: 'normal normal bold 22px/30px Antonio',
            color: '#00252B',
            textTransform: 'uppercase',
            opacity: 1,
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="absolute top-[84px] left-[27px] w-[321px]"
          style={{
            font: 'normal normal normal 14px/20px Fira Sans',
            color: '#00252B',
            opacity: 1,
          }}
        >
          {description}
        </p>
      </div>

      {/* Calendar Icon */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center"
        style={{ top: `${calendarPosition}px` }}
      >
        <Image src={iconCalendar} alt="Calendar" width={26} height={26} />
      </div>

      {/* Dates */}
      <div
        className="absolute left-0 w-full bg-white rounded-b-lg flex flex-col justify-between"
        style={{
          top: `${datesPosition}px`,
          bottom: 0,
        }}
      >
        <div className="pt-[36px] px-[27px]">
          {dates.map((date) => {
            const uniqueKey = `${date.from}-${date.to || ''}-${date.location}-${date.city}`;
            return (
              <div key={uniqueKey}>
                <div className="relative">
                  <p
                    style={{
                      font: 'normal normal normal 15px/20px Fira Sans',
                      color: '#AA3E98',
                      opacity: 1,
                    }}
                  >
                    {date.to ? (
                      <>
                        Du <strong>{date.from}</strong> au <strong>{date.to}</strong>
                      </>
                    ) : (
                      <>
                        Le <strong>{date.from}</strong>
                      </>
                    )}
                  </p>
                  <div
                    className="absolute top-[-8px] left-[153px]"
                    style={{
                      font: 'normal normal normal 14px/20px Fira Sans',
                      color: '#09252D',
                      opacity: 1,
                    }}
                  >
                    {date.location} - <span className="text-[#59BDBB]">{date.city}</span>
                  </div>
                </div>
                {dates.indexOf(date) < dates.length - 1 && (
                  <div className="w-[321px] h-[1px] bg-[#E5E5E5] my-6" />
                )}
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="w-full h-[56px] bg-[#59BDBB] hover:bg-[#FFD6BA] transition-colors duration-200 rounded-b-lg flex items-center px-4 mt-auto">
          {showMultipleDates ? (
            <>
              <button
                type="button"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <Image src={iconPoints} alt="Points" width={30} height={8} />
                <span
                  style={{
                    font: 'normal normal bold 14px/18px Fira Sans',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}
                  className="ml-2"
                >
                  VOIR D&apos;AUTRES DATES
                </span>
              </button>
              <button
                type="button"
                className="flex items-center ml-auto hover:opacity-80 transition-opacity"
              >
                <Image
                  src={arrowRightWhite}
                  alt="Flèche droite"
                  width={21}
                  height={16}
                  className="mr-2"
                />
                <span
                  style={{
                    font: 'normal normal bold 14px/18px Fira Sans',
                    color: '#FFFFFF',
                  }}
                >
                  Lire la suite
                </span>
              </button>
            </>
          ) : (
            <button
              type="button"
              className="flex items-center justify-center w-full hover:opacity-80 transition-opacity"
            >
              <Image
                src={arrowRightWhite}
                alt="Flèche droite"
                width={21}
                height={16}
                className="mr-2"
              />
              <span
                style={{
                  font: 'normal normal bold 14px/18px Fira Sans',
                  color: '#FFFFFF',
                }}
              >
                Lire la suite
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
