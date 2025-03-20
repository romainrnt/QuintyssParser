import CompleteCard from "../components/ActualitesPage/CompleteCard";
import HeaderComponentActualites from "../components/ActualitesPage/HeaderComponentActualites";
import ImageCard from "../components/ActualitesPage/ImageCard";
import MediaCard from "../components/ActualitesPage/MediaCard";
import SimpleCard from "../components/ActualitesPage/SimpleCard";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header";
import SocialMediaComponent from "../components/HomePage/SocialMediaComponent/SocialMediaComponent";
import Layout from "../layout/Layout";


import iconArrowWhite from "../components/assets/ActuPage/arrow-right-outlined-white@2x.png";
import PictoPhoto from "../components/assets/ActuPage/Groupephoto.png";
import PictoVideo from "../components/assets/ActuPage/GroupeVideo.png";
import masqueIncrustation from "../components/assets/ActuPage/masque-degrade.png";
import photoActu8 from "../components/assets/ActuPage/photo-actu8@2x.png";
import photopapierdelamour from "../components/assets/ActuPage/photo-les papiers.png";
import photoActu3 from "../components/assets/ActuPage/photoactu3.png";
import photoActu4 from "../components/assets/ActuPage/photoactu4.png";
import photoActu5 from "../components/assets/ActuPage/photoactu5.png";
import photoActu6 from "../components/assets/ActuPage/photoactu6.png";
import photoActu7 from "../components/assets/ActuPage/photoactu7.png";
import photoActu9 from "../components/assets/ActuPage/photoactu9.png";
import PictureActu6 from "../components/assets/ActuPage/pictureactu6.png";
import iconArrow from "../components/assets/HomePage/card1/icon-arrow-outlined-blue@2x.png";
import iconCalendar1 from "../components/assets/HomePage/card1/icon-calendar-two-tone@2x.png";
import photoActu1 from "../components/assets/HomePage/card1/photoactu1.png";
import iconCalendar3 from "../components/assets/HomePage/card3/calendarIcon.svg";
import iconCalendar4 from "../components/assets/HomePage/card4/icon-calendar-two-tone@2x.png";
import toutattente from "../components/assets/HomePage/card5/toutattente.png";

const Actualites = () => {
  return (
    <>
      <Header type="home" />
      <HeaderComponentActualites />
      <Banner page="Actualités" />
      <SocialMediaComponent type="normal" />
      <div className="px-4 sm:px-8 lg:px-16 my-[100px] flex justify-center">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[12px] max-w-[1448px]">
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
            <SimpleCard
              date="22 JUIN 2023"
              title="Lorem ipsum Dolorem epsilum vacum Sed ut omnis natur error sit voluptatem"
              description="Selam totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo osed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium hectum."
              calendarIcon={iconCalendar1}
              arrowIcon={iconArrow}
            />
            <CompleteCard
              image={photoActu8}
              icon={iconCalendar4}
              date="22 JUIN AU 17 MAI 2023"
              title="Lorem ipsum Dolorem epsilum vacum"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
              buttonText="Lire la suite"
              buttonIcon={iconArrow}
              picto={PictoVideo}
            />
          </div>
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
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
              buttonText="Lire la suite"
              buttonIcon={iconArrow}
              picto={PictoPhoto}
            />
            <MediaCard
              image={photoActu5}
              icon={iconCalendar3}
              overlayImage={masqueIncrustation}
              date="17 JUIN 2023"
              title="Lorem ipsum Dolorem epsilum vacum"
              arrowIcon={iconArrowWhite}
              picto={PictoVideo}
            />
            <SimpleCard
              date="24 AVRIL 2023"
              title="Lorem ipsum Dolorem epsilum vacum Sed ut omnis natur error sit voluptatem"
              description="Selam totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo osed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium hectum."
              calendarIcon={iconCalendar1}
              arrowIcon={iconArrow}
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
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
              calendarIcon={iconCalendar1}
              arrowIcon={iconArrow}
            />
            <CompleteCard
              image={photoActu6}
              icon={iconCalendar4}
              date="02 JUIN AU 18 JUIN 2023"
              title="Lorem ipsum Dolorem epsilum vacum"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
              buttonText="Lire la suite"
              buttonIcon={iconArrow}
              picto={PictoVideo}
            />
            <ImageCard
              image={photopapierdelamour}
              altText="ImageCard Colonne 3"
            />
          </div>

          {/* Colonne 4 */}
          <div className="flex flex-col gap-[12px]">
            <CompleteCard
              image={photoActu4}
              icon={iconCalendar1}
              date="22 JUILLET AU 18 AOÛT 2023"
              title="Lorem ipsum Dolorem epsilum vacum"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
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
            <SimpleCard
              date="08 MAI 2023"
              title="Lorem ipsum Dolorem epsilum vacum Sed ut omnis natur error sit voluptatem"
              description="Selam totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo osed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium hectum."
              calendarIcon={iconCalendar1}
              arrowIcon={iconArrow}
            />
            <CompleteCard
              image={photoActu9}
              icon={iconCalendar4}
              date="22 AVRIL AU 24 AVRIL 2023"
              title="Lorem ipsum Dolorem epsilum vacum"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
              buttonText="Lire la suite"
              buttonIcon={iconArrow}
              picto={PictoVideo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout(<Actualites />);
