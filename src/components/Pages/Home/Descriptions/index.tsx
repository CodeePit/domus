import Backdrop2 from '../../../../assets/imgs/backdrop-2.png';
import Image from 'next/image';
import Link from 'next/link';

import Desc1 from '../../../../assets/imgs/descriptions/desc-1.png';
import Desc2 from '../../../../assets/imgs/descriptions/desc-2.png';
import Desc3 from '../../../../assets/imgs/descriptions/desc-3.png';
import Desc4 from '../../../../assets/imgs/descriptions/desc-4.png';
import Desc5 from '../../../../assets/imgs/descriptions/desc-5.png';
import Desc6 from '../../../../assets/imgs/descriptions/desc-6.png';

const DESCRIPTIONS = [Desc6, Desc5, Desc4, Desc3, Desc2, Desc1];

export const Descriptions = () => (
  <section className="max-w px-2 grid h-[38rem] max-[1560px]:h-[30rem] max-xl:justify-center max-xl:grid-cols-1 max-xl:h-fit max-xl:flex max-xl:flex-wrap gap-4 grid-cols-5 grid-rows-2">
    <div className="relative block w-full h-full max-xl:h-96 col-span-2 row-span-2">
      <Image src={Backdrop2} alt="" className="w-full h-full" />
      <div className="absolute top-0 flex text-center flex-col gap-10 left-0 w-full h-full justify-center items-center">
        <span className="block font-bold text-3xl text-secondary-400">
          Siga @domus
          <br /> no Instagram
        </span>
        <span>
          Fique por dentro das novidades,
          <br /> promoções e muito mais
        </span>
        <Link
          href="https://www.instagram.com/domusconstrucao/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
          target="_blank"
          className="btn"
        >
          <span>acessar</span>
        </Link>
      </div>
    </div>
    {DESCRIPTIONS.map((desc, i) => (
      <Image key={i} src={desc} alt="" className="xl:w-full xl:h-full w-64 h-auto" />
    ))}
  </section>
);
