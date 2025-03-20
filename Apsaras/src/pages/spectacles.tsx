import spectacle7 from '../components/assets/SpectaclesPage/spectacle baby jane@2x.png';
import spectacle2 from '../components/assets/SpectaclesPage/spectacle dolores en la majeur.png';
import spectacle1 from '../components/assets/SpectaclesPage/spectacle habibi.png';
import spectacle4 from '../components/assets/SpectaclesPage/spectacle le temps des sirenes@2x.png';
import spectacle8 from '../components/assets/SpectaclesPage/spectacle lorem ispum@2x.png';
import spectacle3 from '../components/assets/SpectaclesPage/spectacle medea in spain@2x.png';
import spectacle6 from '../components/assets/SpectaclesPage/spectacle zokwezo@2x.png';
import spectacle5 from '../components/assets/SpectaclesPage/spectaclelespapiersdelamour@2x.png';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header';
import SocialMediaComponent from '../components/HomePage/SocialMediaComponent/SocialMediaComponent';
import HeaderComponentSpectacles from '../components/SpectaclesPage/HeaderComponentSpectacles';
import SpectacleCard from '../components/SpectaclesPage/SpectacleCards';
import Layout from '../layout/Layout';

const Evenements = () => {
  return (
    <>
      <Header type="home" />
      <HeaderComponentSpectacles />
      <SocialMediaComponent type="normal" />
      <Banner page="Spectacles" />
      <div className="w-full">
        <div className=" lg:px-[100px]">
          <div className="h-[100px] w-full bg-white" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0 justify-items-center">
            <SpectacleCard
              image={spectacle1}
              title="Habibi"
              description="Les affres d’un couple dans lequel la violence s’est infiltrée inexorablement."
              events={[
                {
                  location: 'Théâtre National Tunisien - TUNISIE',
                  date: '2021',
                },
                { location: 'Théâtre Pitoëff - GENÈVE', date: '14/03/2002' },
              ]}
              theme="#960F05"
              layout="image-top"
            />
            <SpectacleCard
              image={spectacle2}
              title="DOLORES EN LA MAJEUR"
              description="Dolores - artiste de cabaret, femme fragile et touchante - nous plonge dans la nostalgie des Années Folles entre Madrid et La Havane."
              events={[
                {
                  location:
                    'Festival international de théâtre de la Havane, au café théâtre Berthold Brecht - LA HAVANE, CUBA',
                  date: 'Du 14 au 31/05/2002',
                },
                {
                  location: 'Festival des Mots in Conakry - GUINEA',
                  date: 'Les 24 et 25/05/2003',
                },
                {
                  location: 'Le Royal Tavannes - SUISSE',
                  date: 'Le 08/11/2003',
                },
                {
                  location: 'La Cave Bon Séjour à Versoix - SUISSE',
                  date: 'Le 15/11/2003',
                },
              ]}
              theme="#59BDBB"
              layout="text-top"
            />
            <SpectacleCard
              image={spectacle3}
              title="MEDEA IN SPAIN"
              description="Une Medea - Indienne et danseuse de Kathak, et un Jason - Gitan et danseur de Flamenco - font revivre le mythe de cette « barbare des temps modernes »."
              events={[
                {
                  location: 'theâtre Pitoëff - GENÈVE',
                  date: 'Du 25/11/2005 au 28/12/2005',
                },
              ]}
              theme="#09252D"
              layout="image-top"
            />
            <SpectacleCard
              image={spectacle4}
              title="LES PAPIERS DE L'AMOUR"
              description="Rachid - Palestinien – et Sarah - Suissesse de confession juive -, un couple banal dont chacun trouve dans le regard de l’autre la force et la joie de continuer à avancer."
              events={[
                {
                  location: 'Théâtre Pitoëff - GENÈVE, SUISSE',
                  date: 'Du 28/02/2009 au 15/03/2009',
                },
                {
                  location: 'Théâtre national Tunisien - TUNIS, MAROC',
                  date: 'Les 20 et 21/04/2012',
                },
                {
                  location: 'Festival de theâtre International de Marrakech - MAROC',
                  date: 'Le 11/05/2012',
                },
                {
                  location:
                    'Alliance française de Ziguinchor, Théâtre Verdure programmé dans le festival « Casamance in Scene » - SÉNÉGAL',
                  date: 'Le 12/12/2012',
                },
              ]}
              theme="#CBA6A8"
              layout="text-top"
            />
            <SpectacleCard
              image={spectacle5}
              title="HABIBI"
              description="Les affres d’un couple dans lequel la violence s’est infiltrée inexorablement."
              events={[
                {
                  location: 'Théâtre National Tunisien - TUNISIE',
                  date: '2021',
                },
                { location: 'Théâtre Pitoëff - GENÈVE', date: '2022' },
              ]}
              theme="#3066BE"
              layout="image-top"
            />
            <SpectacleCard
              image={spectacle6}
              title="ZOKWEZO"
              description="Dolores - artiste de cabaret, femme fragile et touchante - nous plonge dans la nostalgie des Années Folles entre Madrid et La Havane."
              events={[
                {
                  location: 'Institut Francophone de Parakou - BÉNIN',
                  date: 'Le 27/01/2016',
                },
                {
                  location: 'Institut Francophone de Cotonou - BÉNIN',
                  date: 'Les 21 et 22/01/2016',
                },
                { location: 'GENÈVE', date: 'Le 29/03/2016 et 10/04/2016' },
                {
                  location: 'Festival International de Théâtre de Kaolack - SÉNÉGAL',
                  date: 'Le 24 et 25/10/2016',
                },
              ]}
              theme="#AA3E98"
              layout="text-top"
            />
            <SpectacleCard
              image={spectacle7}
              title="QU’EST-IL ARRIVE A BABY JANE?"
              description="Deux soeurs se livrent à un jeu passionnel, entre jalousie et dépendance, qui confine à la haine."
              events={[
                {
                  location: 'Théâtre Alchimie - GENÈVE, SUISSE',
                  date: 'Du 10 au 29/09/2019',
                },
              ]}
              theme="#960F05"
              layout="image-top"
            />
            <SpectacleCard
              image={spectacle8}
              title="LOREM IPSUM DOLORES ESPILUM"
              description="Un récit captivant explorant les relations humaines à travers les époques."
              events={[
                { location: 'Opéra de Paris - FRANCE', date: '2020' },
                {
                  location: 'Théâtre du Châtelet - FRANCE',
                  date: '15/09/2021 au 20/10/2023',
                },
              ]}
              theme="#59BDBB"
              layout="text-top"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout(<Evenements />);
