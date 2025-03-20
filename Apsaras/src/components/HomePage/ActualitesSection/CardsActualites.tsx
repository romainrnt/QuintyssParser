import React from 'react';

import CompleteCard from '../../ActualitesPage/CompleteCard';
import ImageCard from '../../ActualitesPage/ImageCard';
import MediaCard from '../../ActualitesPage/MediaCard';
import SimpleCard from '../../ActualitesPage/SimpleCard';

import iconArrowWhite from '../../assets/ActuPage/arrow-right-outlined-white@2x.png';
import PictoPhoto from '../../assets/ActuPage/Groupephoto.png';
import PictoVideo from '../../assets/ActuPage/GroupeVideo.png';
import masqueIncrustation from '../../assets/ActuPage/masque-degrade.png';
import photoActu3 from '../../assets/ActuPage/photoactu3.png';
import photoActu4 from '../../assets/ActuPage/photoactu4.png';
import photoActu7 from '../../assets/ActuPage/photoactu7.png';
import PictureActu6 from '../../assets/ActuPage/pictureactu6.png';
import iconArrow from '../../assets/HomePage/card1/icon-arrow-outlined-blue@2x.png';
import iconCalendar1 from '../../assets/HomePage/card1/icon-calendar-two-tone@2x.png';
import photoActu1 from '../../assets/HomePage/card1/photoactu1.png';
import iconCalendar3 from '../../assets/HomePage/card3/calendarIcon.svg';
import toutattente from '../../assets/HomePage/card5/toutattente.png';

const CardsActualites: React.FC = () => {
  return (
    <div className="mt-8 lg:mt-24 px-4 sm:px-8 lg:px-16 flex justify-center">
      {/* Container for cards */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[12px] max-w-[1448px]">
        {/* Colonne 1 */}
        <div className="flex flex-col gap-[12px]">
          <CompleteCard
            image={photoActu1}
            icon={iconCalendar1}
            date="23 AOÛT AU 25 AOÛT 2023"
            title="Lorem ipsum Dolorem epsilum vacum"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            buttonText="Lire la suite"
            buttonIcon={iconArrow}
            picto={PictoVideo}
          />
          <ImageCard image={toutattente} altText="Image Tout Attente" />
        </div>

        {/* Colonne 2 */}
        <div className="flex flex-col gap-[12px]">
          <SimpleCard
            date="08 AOÛT 2023"
            title="Lorem ipsum Dolorem epsilum vacum Sed ut omnis natur error sit voluptatem"
            description="Selam totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo osed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium hectum."
            calendarIcon={iconCalendar1}
            arrowIcon={iconArrow}
          />
          <CompleteCard
            image={PictureActu6}
            icon={iconCalendar1}
            date="03 JUILLET AU 07 JUILLET 2023"
            title="Lorem ipsum Dolorem epsilum vacum"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
            buttonText="Lire la suite"
            buttonIcon={iconArrow}
            picto={PictoPhoto}
          />
        </div>

        {/* Colonne 3 */}
        <div className="flex flex-col gap-[12px]">
          <MediaCard
            image={photoActu3}
            overlayImage={masqueIncrustation}
            icon={iconCalendar3}
            date="23 JUILLET 2023"
            title="Lorem ipsum Dolorem epsilum vacum"
            arrowIcon={iconArrowWhite}
            picto={PictoVideo}
          />
          <SimpleCard
            date="12 JUILLET 2023"
            title="Selam total rem aperiam eaque ipsa quad ab illo inventore veritatis et quasi architetto beata vitae"
            description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            calendarIcon={iconCalendar1}
            arrowIcon={iconArrow}
          />
        </div>

        {/* Colonne 4 */}
        <div className="flex flex-col gap-[12px]">
          <CompleteCard
            image={photoActu4}
            icon={iconCalendar1}
            date="22 JUILLET AU 18 AOÛT 2023"
            title="Lorem ipsum Dolorem epsilum vacum"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
            buttonText="Lire la suite"
            buttonIcon={iconArrow}
            picto={PictoPhoto}
          />
          <MediaCard
            image={photoActu7}
            overlayImage={masqueIncrustation}
            icon={iconCalendar3}
            date="01 JUILLET 2023"
            title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
            arrowIcon={iconArrowWhite}
            picto={PictoPhoto}
          />
        </div>
      </div>
    </div>
  );
};

export default CardsActualites;
