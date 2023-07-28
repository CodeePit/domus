import Product1 from '../../../../assets/imgs/products/product-1.jpg';
import Product2 from '../../../../assets/imgs/products/product-2.jpg';
import Product3 from '../../../../assets/imgs/products/product-3.jpg';
import Product4 from '../../../../assets/imgs/products/product-4.jpg';
import Image from 'next/image';
import Link from 'next/link';

const PRODUCTS = [Product4, Product3, Product2, Product1];

export const Products = () => (
  <section className="max-w px-2">
    <ul className="w-full flex flex-wrap justify-center max-[570px]:gap-16 gap-8">
      {PRODUCTS.map((product, i) => (
        <li key={i} className="relative max-w-[670px] w-full h-fit">
          <div className="w-full h-fit">
            <Image src={product} alt="" className="h-auto w-full rounded-lg" />
          </div>
          <div className="absolute sm:bottom-[15%] max-[570px]:w-full w-fit -bottom-10 sm:right-[24%] min-[570px]:bottom-8 min-[570px]:right-8">
            <Link href="/" className="btn max-[570px]:w-full max-[570px]:rounded-t-none">
              <span>aproveite</span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
