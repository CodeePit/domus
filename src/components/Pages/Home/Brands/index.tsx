import { Slider } from 'components/Slider';

import Brand1 from '../../../../assets/imgs/brands/brand-1.png';
import Brand2 from '../../../../assets/imgs/brands/brand-2.png';
import Brand3 from '../../../../assets/imgs/brands/brand-3.png';
import Brand4 from '../../../../assets/imgs/brands/brand-4.png';
import Brand5 from '../../../../assets/imgs/brands/brand-5.png';
import Brand6 from '../../../../assets/imgs/brands/brand-6.png';
import Brand7 from '../../../../assets/imgs/brands/brand-7.png';
import Image from 'next/image';

const BRANDS_ITEMS = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7];
const BRANDS = [...BRANDS_ITEMS, ...BRANDS_ITEMS];

export const Brands = () => (
  <section className="max-w text-center">
    <span className="uppercase text-xl mb-11 block font-medium">
      AS MARCAS MAIS PROCURADAS
    </span>

    <Slider.Root
      loop
      autoplay={{ delay: 600 }}
      slidesPerView={5}
      spaceBetween={2 * 16}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        639: {
          slidesPerView: 3,
        },
        865: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 5,
        },
      }}
    >
      {BRANDS.map((brand, i) => (
        <Slider.Slide
          key={i}
          className="select-none border-gray-400 border-[1px] rounded-xl"
        >
          <div className="flex items-center justify-center">
            <div className="w-full flex items-center justify-center p-2 h-[94px]">
              <Image src={brand} alt="" className="h-auto w-auto" />
            </div>
          </div>
        </Slider.Slide>
      ))}
    </Slider.Root>
  </section>
);
