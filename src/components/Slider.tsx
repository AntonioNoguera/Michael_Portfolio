'use client';

import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const animation = {
    duration: 50000,
    easing: (t: number) => t,
};

type AutoScrollCarouselProps = {
    items: React.ReactNode[];
    className?: string;
};

export default function AutoScrollCarousel({ items, className }: AutoScrollCarouselProps) {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 1,
            spacing: 30
        },
        breakpoints: {
            "(min-width: 640px)": {
                slides: {
                    perView: 2,
                    spacing: 30,
                },
            },
            "(min-width: 1024px)": {
                slides: {
                    perView: 3,
                    spacing: 30,
                },
            }
        },
        loop: true,
        renderMode: 'precision',
        drag: true,
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
    });

    return (
        <div ref={sliderRef} className={`keen-slider ${className ?? ''}`}>
            {items.map((item, index) => (
                <div key={index} className="keen-slider__slide">
                    {item}
                </div>
            ))}
        </div>
    );
}