'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

type AutoScrollCarouselProps = {
    items: React.ReactNode[];
    className?: string;
};

export default function AutoScrollCarousel({ items, className }: AutoScrollCarouselProps) {
    
    const duplicatedItems = [...items, ...items];
    
    return (
        <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={30} 
            loop={true}
            grabCursor={true}
            freeMode={true} 

            speed={1500}
             autoplay={{      
                delay: 800,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: false,
            }}
            allowTouchMove={true}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            className={`auto-scroll-carousel ${className ?? ''}`}
        >
            {duplicatedItems.map((item, index) => (
                <SwiperSlide key={index}>
                    {item}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}