import React from 'react';

import Image, { StaticImageData } from 'next/image';

import buttonIcon from '../components/assets/SpectaclesPage/icon arrow right outlined white@2x.png';

type Theme = '#960F05' | '#59BDBB' | '#09252D' | '#CBA6A8' | '#3066BE' | '#AA3E98';

interface Event {
  location: string;
  date: string;
}

interface SpectacleCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  events: Event[];
  theme: Theme;
  layout: 'image-top' | 'text-top';
}

const SpectacleCard: React.FC<SpectacleCardProps> = ({
  image,
  title,
  description,
  events,
  theme,
  layout,
}) => {
  const themeStyles = {
    button: {
      background: `${theme}`,
      width: '184px',
      height: '33px',
      color: '#fff',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    },
    title: `text-[${theme}]`,
    divider: {
      width: '273px',
      height: '0px',
      border: `3px solid ${theme}`,
      opacity: 1,
    },
    shadowTop: {
      background: `${theme} 0% 0% no-repeat padding-box`,
      borderRadius: '4px 4px 0px 0px',
      opacity: 0.6,
    },
    shadowBottom: {
      background: `${theme} 0% 0% no-repeat padding-box`,
      borderRadius: '0px 0px 4px 4px',
      opacity: 0.6,
    },
    eventSeparator: {
      width: '273px',
      height: '0px',
      border: `1px solid #d3d3d3`,
    },
  };

  const formatEventText = (location: string) => {
    const [firstPart, ...rest] = location.split(' - ');
    const restPart = rest.join(' - ');
    return (
      <>
        <span className="text-black">{firstPart}</span>
        {restPart && (
          <>
            {' '}
            - <span className="text-[#59BDBB]">{restPart}</span>
          </>
        )}
      </>
    );
  };

  const formatEventDate = (date: string) => {
    const formattedDate = date.split('/').map((part, _, arr) => (
      <React.Fragment key={part}>
        <strong>{part}</strong>
        {arr.indexOf(part) < arr.length - 1 && <span className="font-bold">/</span>}
      </React.Fragment>
    ));

    return <span className="text-[#AA3E98] font-medium">{formattedDate}</span>;
  };

  return (
    <div className="w-[273px] mx-auto relative">
      {layout === 'image-top' ? (
        <div>
          <div className="relative">
            <Image src={image} alt={title} width={273} height={421} className="object-cover" />
            <div
              style={{
                ...themeStyles.shadowBottom,
                position: 'absolute',
                width: '273px',
                height: '180px',
                top: '280px',
                left: '0',
              }}
            />
            <div
              style={{
                ...themeStyles.button,
                position: 'absolute',
                bottom: '-16.5px',
                right: '-10px',
              }}
            >
              <Image src={buttonIcon} alt="icon" width={16} height={16} />
              <span>Voir le spectacle</span>
            </div>
          </div>
          <div className="w-[273px] mt-[60px] p-0 text-left">
            <h3 className={`text-2xl font-bold ${themeStyles.title}`}>{title}</h3>
            <p className="text-gray-600 my-2">{description}</p>
            <div style={themeStyles.divider} className="my-2" />
            <ul className="w-[273px]">
              {events.map(event => {
                const key = `${event.location}-${event.date}`;
                return (
                  <li key={key} className="text-gray-700 mb-2">
                    <div>{formatEventText(event.location)}</div>
                    <div>{formatEventDate(event.date)}</div>
                    {events.indexOf(event) < events.length - 1 && (
                      <div style={themeStyles.eventSeparator} className="my-2" />
                    )}
                  </li>
                );
              })}
            </ul>
            <div style={themeStyles.eventSeparator} className="my-2" />
          </div>
        </div>
      ) : (
        <div>
          <div className="w-[273px] mb-[60px] p-0 text-left">
            <h3 className={`text-2xl font-bold ${themeStyles.title}`}>{title}</h3>
            <p className="text-gray-600 my-2">{description}</p>
            <div style={themeStyles.divider} className="my-2" />
            <ul className="w-[273px]">
              {events.map(event => {
                const key = `${event.location}-${event.date}`;
                return (
                  <li key={key} className="text-gray-700 mb-2">
                    <div>{formatEventText(event.location)}</div>
                    <div>{formatEventDate(event.date)}</div>
                    {events.indexOf(event) < events.length - 1 && (
                      <div style={themeStyles.eventSeparator} className="my-2" />
                    )}
                  </li>
                );
              })}
            </ul>
            <div style={themeStyles.eventSeparator} className="my-2" />
          </div>
          <div className="relative">
            <Image src={image} alt={title} width={273} height={421} className="object-cover" />
            <div
              style={{
                ...themeStyles.shadowTop,
                position: 'absolute',
                width: '273px',
                height: '110px',
                bottom: '360px',
                left: '0',
              }}
            />
            <div
              style={{
                ...themeStyles.button,
                position: 'absolute',
                top: '-16.5px',
                right: '-10px',
              }}
            >
              <Image src={buttonIcon} alt="icon" width={16} height={16} />
              <span>Voir le spectacle</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpectacleCard;
