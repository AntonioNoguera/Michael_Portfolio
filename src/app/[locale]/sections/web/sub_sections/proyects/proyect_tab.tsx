'use client';

import ProjectCard from "./components/proyect_card";

import React, { useRef, useState } from "react";

import './components/bullets.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css'; 
import { relevant_proyects } from "@/data/content/web/relevant_proyects";

export default function ProyectTab() {

    const pagination = {
        clickable: true,
        el: '.custom-pagination-container',
        type: 'bullets' as const,
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active',
        renderBullet: function (index: number, className: string) {
            return '<div class="' + className + '"> <p>' + (index + 1) + '</p></div>';
        },
    };

    const [progressData, setProgressData] = useState({
        progress: 0,
        timeLeft: 0
    });


    const [isInteracting, setIsInteracting] = useState(false);

    const onAutoplayTimeLeft = (s: SwiperType, time: number, progress: number) => {
        if (!isInteracting) {
            setProgressData({
                progress: 1 - progress,
                timeLeft: Math.ceil(time / 1000)
            });
        }
    };

    return (
        <div className="w-full text-center gap-y-4 ">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 15000,
                }}
                grabCursor={true}
                pagination={pagination}
                modules={[Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}

                onTouchStart={() => setIsInteracting(true)}
                onTouchEnd={() => setIsInteracting(false)}
                onSliderMove={() => setIsInteracting(true)}
                onTransitionEnd={() => setIsInteracting(false)}

                className="" 
            >
                {relevant_proyects.map((proyect) => (
                    <SwiperSlide key={proyect.id + "parent"}>
                        <ProjectCard
                            key={proyect.id}
                            proyect={proyect}
                            progressData={progressData}
                        />
                    </SwiperSlide>
                ))
                }

                <div className="custom-pagination-container inline-block px-10 py-3 rounded-2xl"> </div>

            </Swiper>
        </div>
    );
}