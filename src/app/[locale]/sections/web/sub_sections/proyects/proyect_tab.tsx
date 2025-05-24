'use client';

import ProjectCard, { Project } from "./components/proyect_card";

import html from '@png_assets/LOGO_HTML.png';
import js from '@png_assets/LOGO_JS.png';
import python from '@png_assets/LOGO_Python.png';
import sklearn from '@png_assets/LOGO_SK_Learn.png';
import bootstrap from '@png_assets/LOGO_Bootstrap.png';
import css from '@png_assets/LOGO_CSS.png';
import tailwind from '@png_assets/LOGO_Tailwind.png';
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import './components/bullets.css';


import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';


const mockProjects: Project[] = [
    {
        id: '2',
        icon: 'https://i.imgur.com/4emRN2X.gif',
        name: 'Simulación avanzada empleando numeros aleatorios 🎲',
        description: 'Aplicación web interactiva diseñada para la simulación avanzada de eventos aleatorios con base en modelos de probabilidad. Permite a los usuarios configurar distintos escenarios probabilísticos, ajustar parámetros estadísticos y observar los resultados en tiempo real mediante visualizaciones gráficas intuitivas.',
        github_link: 'https://github.com/AntonioNoguera/ModelingAndSimulation-E2023',
        used_tecnologies: [
            {
                id: '0',
                icon: html,
                title: 'HTML',
                description: 'Lenguaje de marcado base para estructurar páginas web.'
            },
            {
                id: '3',
                icon: css,
                title: 'CSS',
                description: 'Lenguaje de estilos utilizado para diseñar y maquetar páginas web.'
            },
            {
                id: '2',
                icon: js,
                title: 'JS',
                description: 'Lenguaje de programación que permite crear interactividad en sitios web.'
            },
            {
                id: '4',
                icon: bootstrap,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            }
        ]
    },
    {
        id: '3',
        icon: 'https://i.imgur.com/ubPPCyi.png',
        name: 'Plataforma de predicción de paro cardiacos',
        description: 'Aplicación web diseñada para asistir en la predicción temprana de paros cardiacos mediante el análisis de datos clínicos. Utiliza algoritmos de machine learning desarrollados con Python y scikit-learn para identificar patrones en los signos vitales y antecedentes médicos del paciente. La plataforma presenta una interfaz sencilla construida con HTML, JavaScript y Bootstrap, permitiendo a los usuarios ingresar datos relevantes y visualizar los resultados de predicción en tiempo real de forma clara y accesible.',
        github_link: 'https://github.com/AntonioNoguera/pySeletedThemesOf_SI',
        used_tecnologies: [
            {
                id: '0',
                icon: html,
                title: 'HTML',
                description: 'Lenguaje de marcado base para estructurar páginas web.'
            },
            {
                id: '232',
                icon: css,
                title: 'CSS',
                description: 'Lenguaje de estilos utilizado para diseñar y maquetar páginas web.'
            },
            {
                id: '2333',
                icon: js,
                title: 'JS',
                description: 'Lenguaje de programación que permite crear interactividad en sitios web.'
            },
            {
                id: '4333',
                icon: bootstrap,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: '2342342',
                icon: python,
                title: 'Python',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: '234234234234',
                icon: sklearn,
                title: 'SK Learn',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            }
        ]
    },
    {
        id: '34',
        icon: 'https://i.imgur.com/e9xMTYM.gif',
        name: 'Platforma de manejo privado de archivos PDF',
        description:'Sistema seguro para unir, almacenar y administrar documentos PDF con control de acceso por roles.',
        github_link: 'https://github.com/AntonioNoguera/GuardedPDF',
        used_tecnologies: [
            {
                id: '0asdfasdf',
                icon: html,
                title: 'HTML',
                description: 'Lenguaje de marcado base para estructurar páginas web.'
            },
            {
                id: '3asdfasdf',
                icon: css,
                title: 'CSS',
                description: 'Lenguaje de estilos utilizado para diseñar y maquetar páginas web.'
            },
            {
                id: '2asdfasdf',
                icon: js,
                title: 'JS',
                description: 'Lenguaje de programación que permite crear interactividad en sitios web.'
            },
            {
                id: 'asdfasd4',
                icon: bootstrap,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: 'asdfasd4d',
                icon: python,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: 'asdfasasdfasdf',
                icon: tailwind,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            }
        ]
    },
];

export default function ProyectTab() {

    const pagination = {
        clickable: true,
        el: '.custom-pagination-container',
        type: 'bullets' as const,
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active',
        renderBullet: function (index: number, className: string) {
            return '<div class="' + className + '">' + (index + 1) + '</div>';
        },
    };

    return (
        <div className="w-full text-center ">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {mockProjects.map((proyect, index) => (
                    <SwiperSlide><ProjectCard key={index} project={proyect} /></SwiperSlide>
                ))
                }
            </Swiper>

            <div className="custom-pagination-container  inline-block px-10 mt-2 py-2 rounded-2xl "> </div>
        </div>
    );
}