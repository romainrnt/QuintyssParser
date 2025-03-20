// data/events.ts
import { StaticImageData } from 'next/image';

import CerclePicture from '../assets/Cercle Picture@2x.png';
import cerclePlay from '../assets/Cercle Play@2x.png';
import photoEvenement1 from '../assets/Evenements/photo événement 1@2x.png';
import photoEvenement2 from '../assets/Evenements/photo événement 2@2x.png';
import photoEvenement3 from '../assets/Evenements/photo événement 3@2x.png';

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

export const eventsList: Event[] = [
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
];
