'use client';

import { createContext, useContext } from 'react';
import { Swiper } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperContext = createContext();

export function SwiperProvider({ children }) {
    const defaultSwiperConfig = {
        modules: [Pagination, Autoplay],
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: { clickable: true },
        autoplay: { delay: 5000 },
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    };

    return (
        <SwiperContext.Provider value={{ defaultSwiperConfig }}>
            {children}
        </SwiperContext.Provider>
    );
}

export function useSwiper() {
    const context = useContext(SwiperContext);
    if (context === undefined) {
        throw new Error('useSwiper must be used within a SwiperProvider');
    }
    return context;
} 