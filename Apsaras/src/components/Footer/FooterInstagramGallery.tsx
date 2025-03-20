import { FC } from 'react';

import Image from 'next/image';

import instagramIcon from '../assets/iconinstagram.png';
import PhotoInsta1 from '../assets/photoInsta/photo-instagram-1@2x.png';
import PhotoInsta2 from '../assets/photoInsta/photo-instagram-2@2x.png';
import PhotoInsta3 from '../assets/photoInsta/photo-instagram-3@2x.png';
import PhotoInsta4 from '../assets/photoInsta/photo-instagram-4@2x.png';
import PhotoInsta5 from '../assets/photoInsta/photo-instagram-5@2x.png';
import PhotoInsta6 from '../assets/photoInsta/photo-instagram-6@2x.png';
import PhotoInsta7 from '../assets/photoInsta/photo-instagram-7@2x.png';
import PhotoInsta8 from '../assets/photoInsta/photo-instagram-8@2x.png';
import PhotoInsta9 from '../assets/photoInsta/photo-instagram-9@2x.png';

const FooterInstagramGallery: FC = () => (
  <div className="flex flex-col gap-y-6 relative">
    <div className="grid grid-cols-3 gap-2 w-[232px] mx-auto">
      <Image src={PhotoInsta1} alt="Instagram 1" width={70} height={70} className="object-cover" />
      <Image src={PhotoInsta2} alt="Instagram 2" width={70} height={70} className="object-cover" />
      <Image src={PhotoInsta3} alt="Instagram 3" width={70} height={70} className="object-cover" />
      <Image src={PhotoInsta4} alt="Instagram 4" width={70} height={70} className="object-cover" />
      <Image src={PhotoInsta5} alt="Instagram 5" width={70} height={70} className="object-cover" />
      <Image src={PhotoInsta6} alt="Instagram 6" width={70} height={70} className="object-cover" />
      <Image src={PhotoInsta7} alt="Instagram 7" width={70} height={70} className="object-cover" />
      <Image src={PhotoInsta8} alt="Instagram 8" width={70} height={70} className="object-cover" />
      <Image src={PhotoInsta9} alt="Instagram 9" width={70} height={70} className="object-cover" />
    </div>
    <div className="absolute left-[40%] top-[45%] transform -translate-x-0 -translate-y-0 -z-10 opacity-80">
      <div className="w-[235px] h-[235px]">
        <Image src={instagramIcon} alt="Instagram" layout="fill" objectFit="contain" />
      </div>
    </div>
  </div>
);

export default FooterInstagramGallery;
