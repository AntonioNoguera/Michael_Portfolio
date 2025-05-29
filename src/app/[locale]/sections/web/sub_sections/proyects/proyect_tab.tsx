'use client';

import ProjectCard, { Proyect } from "./components/proyect_card";

import html from '@png_assets/LOGO_HTML.png';
import js from '@png_assets/LOGO_JS.png';
import python from '@png_assets/LOGO_Python.png';
import sklearn from '@png_assets/LOGO_SK_Learn.png';
import bootstrap from '@png_assets/LOGO_Bootstrap.png';
import css from '@png_assets/LOGO_CSS.png';
import tailwind from '@png_assets/LOGO_Tailwind.png';
import react from '@png_assets/LOGO_REACT.png';
import ts from '@png_assets/LOGO_TS.png';
import php from '@png_assets/LOGO_PHP.png';
import jquery from '@svg_assets/svg_jquery.svg';

import React, { useRef, useState } from "react";

import './components/bullets.css';
 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Swiper as SwiperType } from 'swiper'; 
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css'; 

const mockProjects: Proyect[] = [
    {
        id: '1',
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
                id: '1',
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
                id: '3',
                icon: bootstrap,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            }
        ]
    },
    {
        id: '2',
        icon: 'https://i.imgur.com/g9pAlyk.gif',
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
                id: '1',
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
                id: '3',
                icon: bootstrap,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: '4',
                icon: python,
                title: 'Python',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: '5',
                icon: sklearn,
                title: 'SK Learn',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            }
        ]
    },
    {
        id: '3',
        icon: 'https://i.imgur.com/e9xMTYM.gif',
        name: 'Platforma de manejo privado de archivos PDF',
        description: 'Sistema seguro para unir, almacenar y administrar documentos PDF con control de acceso por roles.',
        github_link: 'https://github.com/AntonioNoguera/GuardedPDF',
        used_tecnologies: [
            {
                id: '0',
                icon: html,
                title: 'HTML',
                description: 'Lenguaje de marcado base para estructurar páginas web.'
            },
            {
                id: '1',
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
                id: '3',
                icon: bootstrap,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: '4',
                icon: python,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: '5',
                icon: tailwind,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            }
        ]
    },
    {
        id: '4',
        icon: 'https://i.imgur.com/e9xMTYM.gif',
        name: 'EL PROYECTO DE SERVICIO',
        description: 'Sistema seguro para unir, almacenar y administrar documentos PDF con control de acceso por roles.',
        used_tecnologies: [
            {
                id: '5',
                icon: ts,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },

            {
                id: '3',
                icon: tailwind,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: '4',
                icon: react,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },

        ]
    },
    {
        id: '5',
        icon: 'https://i.imgur.com/e9xMTYM.gif',
        name: 'El proyecto de producto integrador',
        description: 'Sistema seguro para unir, almacenar y administrar documentos PDF con control de acceso por roles.',
        used_tecnologies: [

            {
                id: '1',
                icon: css,
                title: 'CSS',
                description: 'Lenguaje de estilos utilizado para diseñar y maquetar páginas web.'
            },
            {
                id: '3',
                icon: bootstrap,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: '4',
                icon: js,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: '5',
                icon: react,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
        ]
    },
    {
        id: '6',
        icon: 'https://i.imgur.com/e9xMTYM.gif',
        name: 'El proyecto fello de e learning',
        description: 'Sistema seguro para unir, almacenar y administrar documentos PDF con control de acceso por roles.',
        used_tecnologies: [

            {
                id: '1',
                icon: css,
                title: 'CSS',
                description: 'Lenguaje de estilos utilizado para diseñar y maquetar páginas web.'
            },
            {
                id: '3',
                icon: html,
                title: 'CSS',
                description: 'Lenguaje de estilos utilizado para diseñar y maquetar páginas web.'
            },
            {
                id: '2',
                icon: js,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: '4',
                icon: php,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },

        ]
    },
    {
        id: '7',
        icon: 'https://i.imgur.com/e9xMTYM.gif',
        name: 'El proyecto feo de la calculadora personal',
        description: 'Sistema seguro para unir, almacenar y administrar documentos PDF con control de acceso por roles.',
        used_tecnologies: [

            {
                id: '1',
                icon: css,
                title: 'CSS',
                description: 'Lenguaje de estilos utilizado para diseñar y maquetar páginas web.'
            },
            {
                id: '3',
                icon: html,
                title: 'CSS',
                description: 'Lenguaje de estilos utilizado para diseñar y maquetar páginas web.'
            },
            {
                id: '2',
                icon: js,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },
            {
                id: '4',
                icon: jquery,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            },

        ]
    }
];

export interface RefObject<T> {
    readonly current: T | null;
}

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

    const onAutoplayTimeLeft = (s: SwiperType, time: number, progress: number) => { 
        setProgressData({
            progress: 1 - progress,
            timeLeft: Math.ceil(time / 1000)
        });
    };

    return (
        <div className="w-full text-center ">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 90000,
                }}
                grabCursor={true}
                pagination={pagination}
                modules={[Autoplay, Pagination]}

                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {mockProjects.map((proyect) => (
                    <SwiperSlide key={proyect.id + "parent"}>
                        <ProjectCard
                            key={proyect.id}
                            proyect={proyect}
                            progressData={progressData}
                        />
                    </SwiperSlide>
                ))
                }

                <div className="custom-pagination-container inline-block px-10 mt-2 py-3 rounded-2xl "> </div>

            </Swiper> 
        </div>
    );
}