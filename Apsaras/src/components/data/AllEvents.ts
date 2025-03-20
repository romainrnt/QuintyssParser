// data/allevents.ts
import { StaticImageData } from 'next/image';

import CerclePicture from '../assets/Cercle Picture@2x.png';
import cerclePlay from '../assets/Cercle Play@2x.png';
import photoEvenement1 from '../assets/Evenements/EvenementsPage/photo événement 1@2x.png';
import photoEvenement2 from '../assets/Evenements/EvenementsPage/photo événement 2@2x.png';
import photoEvenement3 from '../assets/Evenements/EvenementsPage/photo événement 3@2x.png';
import photoEvenement4 from '../assets/Evenements/EvenementsPage/photo événement 4@2x.png';
import photoEvenement5 from '../assets/Evenements/EvenementsPage/photo événement 5@2x.png';
import photoEvenement6 from '../assets/Evenements/EvenementsPage/photo événement 6@2x.png';
import photoEvenement7 from '../assets/Evenements/EvenementsPage/photo événement 7@2x.png';
import photoEvenement8 from '../assets/Evenements/EvenementsPage/photo événement 8@2x.png';
import photoEvenement9 from '../assets/Evenements/EvenementsPage/photo événement 9@2x.png';

export interface EventDate {
  from: string;
  to?: string;
  location: string;
  city: string;
}

export interface Event {
  id: string;
  image: StaticImageData;
  imageIcon: StaticImageData;
  title: string;
  description: string;
  dates: EventDate[];
  hasMultipleDates?: boolean;
}

export const allEventsList: Event[] = [
  {
    id: '1',
    image: photoEvenement1,
    imageIcon: cerclePlay,
    title: "QU'EST-IL ARRIVE A BABY JANE?",
    description:
      'Adaptation Silvia Barreiros après la pièce de Henry Farrell au Théâtre Alchimic à Genève',
    dates: [
      {
        from: '10',
        to: '29/09/2019',
        location: 'Théâtre Alchimic',
        city: 'GENÈVE',
      },
    ],
  },
  {
    id: '2',
    image: photoEvenement2,
    imageIcon: cerclePlay,
    title: 'ZOKWEZO',
    description:
      "Un homme, une femme, aujourd'hui. Une Européenne, un Africain, l'histoire de 2 solitudes qui se rencontrent, se révèlent à elles-mêmes l'espace d'un instant pourtant les bouleversera.",
    dates: [
      {
        from: '14',
        to: '23/11/2019',
        location: 'Festival International de Théâtre',
        city: 'GENÈVE',
      },
      {
        from: '16/11/2019',
        location: 'Festival des Mots in Conakry',
        city: 'GUINEA',
      },
    ],
    hasMultipleDates: true,
  },
  {
    id: '3',
    image: photoEvenement3,
    imageIcon: CerclePicture,
    title: 'LE TEMPS DES SIRÈNES',
    description:
      "Gloria et Victoria - deux sœurs passionnées de danse et de chanson - forment un duo flamboyant. Ensemble, elles déjoueront les pièges de l'immigration féminine.",
    dates: [
      {
        from: '13/01/2018',
        location: 'Maxim Theater',
        city: 'ZÜRICH, SUISSE',
      },
      {
        from: '01',
        to: '02/12/2017',
        location: 'Teatro Bayamo',
        city: 'GRANMA, CUBA',
      },
    ],
    hasMultipleDates: true,
  },
  {
    id: '4',
    image: photoEvenement4,
    imageIcon: cerclePlay,
    title: "L'ECHO DES SILENCES",
    description:
      "Une pièce poignante sur l'histoire d'une famille confrontée aux secrets du passé. Entre drames et révélations, les personnages se dévoilent dans une mise en scène intimiste.",
    dates: [
      {
        from: '05',
        to: '15/03/2024',
        location: 'Théâtre du Léman',
        city: 'GENÈVE',
      },
    ],
  },
  {
    id: '5',
    image: photoEvenement5,
    imageIcon: CerclePicture,
    title: 'DANSER SOUS LA PLUIE',
    description:
      'Un spectacle de danse contemporaine qui mêle traditions africaines et modernité européenne. Une célébration de la diversité culturelle à travers le mouvement.',
    dates: [
      {
        from: '20/04/2024',
        location: 'Grand Théâtre',
        city: 'LAUSANNE',
      },
      {
        from: '25',
        to: '27/04/2024',
        location: 'Salle Métropole',
        city: 'LYON',
      },
    ],
    hasMultipleDates: true,
  },
  {
    id: '6',
    image: photoEvenement6,
    imageIcon: cerclePlay,
    title: 'LES MURMURES DE LA NUIT',
    description:
      "Une expérience théâtrale immersive où le public devient acteur. Dans l'obscurité, les sens s'éveillent et les histoires prennent vie.",
    dates: [
      {
        from: '08',
        to: '19/05/2024',
        location: 'Théâtre des Capucins',
        city: 'LUXEMBOURG',
      },
    ],
  },
  {
    id: '7',
    image: photoEvenement7,
    imageIcon: CerclePicture,
    title: "MÉLODIE DE L'EXIL",
    description:
      'Un concert-spectacle qui retrace le parcours de musiciens migrants. Leurs instruments racontent leurs voyages, leurs espoirs et leurs nouveaux départs.',
    dates: [
      {
        from: '12/06/2024',
        location: 'Victoria Hall',
        city: 'GENÈVE',
      },
      {
        from: '15',
        to: '16/06/2024',
        location: 'Opéra Bastille',
        city: 'PARIS',
      },
    ],
    hasMultipleDates: true,
  },
  {
    id: '8',
    image: photoEvenement8,
    imageIcon: cerclePlay,
    title: 'LE DERNIER TRAIN',
    description:
      "Dans une gare abandonnée, cinq étrangers se croisent. Leurs destins s'entremêlent le temps d'une nuit où passé et présent se confondent.",
    dates: [
      {
        from: '03',
        to: '21/07/2024',
        location: 'Théâtre de Carouge',
        city: 'GENÈVE',
      },
    ],
  },
  {
    id: '9',
    image: photoEvenement9,
    imageIcon: CerclePicture,
    title: 'VOIX DES FEMMES',
    description:
      "Un festival pluridisciplinaire célébrant les artistes féminines d'hier et d'aujourd'hui. Théâtre, danse et musique se mêlent dans une programmation unique.",
    dates: [
      {
        from: '01',
        to: '10/09/2024',
        location: 'Diverses salles',
        city: 'MONTREUX',
      },
      {
        from: '15',
        to: '20/09/2024',
        location: 'Centre culturel',
        city: 'ANNECY',
      },
    ],
    hasMultipleDates: true,
  },
];
