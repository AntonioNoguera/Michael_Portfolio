'use client';

import { useState, useEffect, useRef } from 'react';
import LoadingOverlay from './LoadingOverlay';

type Props = {
    children: React.ReactNode;
};

export default function VideoBackgroundWrapper({ children }: Props) {
    const [loading, setLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleVideoLoaded = () => { 
        setLoading(false);
    };

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            if (video.readyState >= 3) {
                //Video on Cache
                handleVideoLoaded();
            } 
        }
    }, []);

    return (
        <>
            {loading && <LoadingOverlay />}
            <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-[-10]">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={handleVideoLoaded}
                >
                    <source src="/mp4/pattern.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
            </div>
            {children}
        </>
    );
}