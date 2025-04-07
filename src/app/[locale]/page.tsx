'use client';


import Footer from '@/components/Footer'; 
import MobileDev from './sections/mobile/mobile_dev';
import { motion, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import AboutMe from './sections/about_me/about_me';
import WebSection from './sections/web/web_dev';

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

      <section id="web" className="h-screen bg-gray pt-20">
        <h2 className="text-3xl font-semibold mb-4">projects_title</h2>
        <p>projects_content</p>
      </section>

      <section id="contact" className="h-screen  flex flex-col pt-20">
        <div className="flex-grow">
          <h2 className="text-3xl font-semibold mb-4">contact_title</h2>
          <p>contact_content</p>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </section>
    </motion.div>
  )
}