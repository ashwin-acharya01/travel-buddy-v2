import React from 'react';
import { Box, Img } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/carousel-styles.css';


const Carousel = ( {imageArray, props} ) => {
  return (
    <Box {...props}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imageArray.map((image, index) => {
            return (
                <SwiperSlide>
                    <Img src={image} alt={`image${index}`} borderRadius="lg" mb="2rem"/>
                </SwiperSlide>
            );
        })}
      </Swiper>
    </Box>
  );
};

export default Carousel;
