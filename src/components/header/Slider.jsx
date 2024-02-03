import { Slide } from './slide/Slide';

import slideData from '../../SlideData';

//import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Parallax } from 'swiper/modules';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Parallax]}
      navigation={{ nextEl: '#slideNext', prevEl: '#slidePrev' }}
      pagination={{ type: 'fraction', clickable: true, el: '#slidePaginat' }}
      scrollbar={{ draggable: true, el: '#slideScroll' }}
      loop={true}
      parallax={true}
      speed={1000}
      keyboard={{ enabled: true }}
    >
      {slideData.map((content, index) => (
        <SwiperSlide key={index}>
          <Slide slideContent={content} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};