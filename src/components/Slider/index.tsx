import React from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

SwiperCore.use([Navigation, Autoplay]);

const SliderRoot = ({
  children,
  disableArrows,
  ...props
}: GTypes.FCChildren & SwiperProps & { disableArrows?: boolean }) => {
  return (
    <div className="swiper-reset relative">
      <Swiper
        grabCursor
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        slidesOffsetAfter={40}
        autoplay={{ delay: 3000 }}
        {...props}
      >
        {children}
      </Swiper>
      {!disableArrows && (
        <div className="swiper-arrows">
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      )}
    </div>
  );
};

export const Slider = {
  Root: SliderRoot,
  Slide: SwiperSlide,
};
