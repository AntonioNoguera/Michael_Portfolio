'use client';

import { motion, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import AboutMe from './sections/about_me/about_me';
import Timeline from './sections/timeline/timeline';
import WebSection from './sections/web/web_dev';
import ContactSection from './sections/contact_me/contact_me';

export default function HomePage() {
  
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange(() => {
      //Código para el suscribir.
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div className="overflow-y-scroll snap-y snap-mandatory h-screen scroll-smooth">

      <AboutMe />

      <Timeline />

      <WebSection />

      <ContactSection />

    </motion.div>
  )
}