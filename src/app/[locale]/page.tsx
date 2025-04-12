'use client';

import MobileDev from './sections/mobile/mobile_dev';
import { motion, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import AboutMe from './sections/about_me/about_me';
import WebSection from './sections/web/web_dev';
import ContactSection from './sections/contact_me/contact_me';

export default function HomePage() { 

  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange(() => {
      // Aquí podrías calcular a qué sección se debe hacer scroll y usar una animación para regresar
      // a la posición de inicio de la sección
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div className="overflow-y-scroll snap-y snap-mandatory h-screen scroll-smooth">

      <AboutMe/>

      <MobileDev/>

      <WebSection/>
      
      <ContactSection/>
      
    </motion.div>
  )
}