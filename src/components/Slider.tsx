'use client';

import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type AutoScrollCarouselProps = {
    items: React.ReactNode[];
    className?: string;
};

const animation = {
    duration: 15000,
    easing: (t: number) => t,
};

export default function AutoScrollCarousel({ items, className }: AutoScrollCarouselProps) {
    
    const duplicatedItems = [...items, ...items, ...items];
    
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 3,
            spacing: 30,
        },
        breakpoints: {
            "(max-width: 1200px)": {
                slides: {
                    perView: 2,
                    spacing: 15,
                }
            },
            "(max-width: 768px)": {
                slides: {
                    perView: 1,
                    spacing: 10,
                }
            }
        },
        loop: true,
        renderMode: "performance",
        drag: true,
        
        // Configuración para desplazamiento continuo automático
        
        created(s) {
            s.moveToIdx(3, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 3, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 3, true, animation);
        },
         
    });

    return (
        <div ref={sliderRef} className={`keen-slider ${className ?? ''}`}>
            {duplicatedItems.map((item, index) => (
                <div key={index} className="keen-slider__slide ">
                    {item}
                </div>
            ))}
        </div>
    );
}