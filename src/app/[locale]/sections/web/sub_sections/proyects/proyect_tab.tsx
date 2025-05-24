'use client';

import ProjectCard, { Project } from "./components/proyect_card";

import html from '@png_assets/LOGO_HTML.png';
import js from '@png_assets/LOGO_JS.png';
import python from '@png_assets/LOGO_Python.png';
import sklearn from '@png_assets/LOGO_SK_Learn.png';
import bootstrap from '@png_assets/LOGO_Bootstrap.png';
import css from '@png_assets/LOGO_CSS.png';
import { json } from "stream/consumers";


const mockProjects: Project[] = [
    // {
    //     id: '1',
    //     icon: "https://i.imgur.com/4emRN2X.gif",
    //     name: 'Plataforma de predicción de paro cardiacos',
    //     description: 'Aplicación web diseñada para asistir en la predicción temprana de paros cardiacos mediante el análisis de datos clínicos. Utiliza algoritmos de machine learning desarrollados con Python y scikit-learn para identificar patrones en los signos vitales y antecedentes médicos del paciente. La plataforma presenta una interfaz sencilla construida con HTML, JavaScript y Bootstrap, permitiendo a los usuarios ingresar datos relevantes y visualizar los resultados de predicción en tiempo real de forma clara y accesible.',
    //     platform: 'html - vanilla js - - python - sklearn - bootstrap',
    // },
    {
        id: '2',
        icon: 'https://i.imgur.com/4emRN2X.gif',
        name: 'Simulación avanzada empleando numeros aleatorios 🎲',
        description: 'Aplicación web interactiva diseñada para la simulación avanzada de eventos aleatorios con base en modelos de probabilidad. Permite a los usuarios configurar distintos escenarios probabilísticos, ajustar parámetros estadísticos y observar los resultados en tiempo real mediante visualizaciones gráficas intuitivas.',
        platform: 'vanilla js - html - bootstrap',
        github_link: 'https://i.imgur.com/4emRN2X.gif',
        used_tecnologies: [
            {
                id: '0',
                icon: html,
                title: 'HTML',
                description: 'Lenguaje de marcado base para estructurar páginas web.'
            },
            {
                id: '2',
                icon: js,
                title: 'JS',
                description: 'Lenguaje de programación que permite crear interactividad en sitios web.'
            },
            {
                id: '3',
                icon: css,
                title: 'CSS',
                description: 'Lenguaje de estilos utilizado para diseñar y maquetar páginas web.'
            },
            {
                id: '4',
                icon: bootstrap,
                title: 'Bootstrap',
                description: 'Framework CSS que facilita el diseño responsive y componentes reutilizables.'
            }
        ]

    },
    // {
    //     id: '3', 
    //     icon: lock,
    //     name: 'Platforma de manejo privado de archivos PDF',
    //     description: 'Sistema seguro para unir, almacenar y administrar documentos PDF con control de acceso por roles.',
    //     platform: 'python - eel - html - tailwind - vanilla js - mysql',
    // },
    // {
    //     id: '4', 
    //     icon: warehouse,
    //     name: 'Plataforma de gestión de almacenes especializado',
    //     description: 'Aplicación web para el control de inventario, entradas y salidas de productos con distintos niveles de usuario.',
    //     platform: 't JS - Bootstrap - Front Arq - ',
    // },
];

export default function ProyectTab() {

    let tempProject = mockProjects[0]

    return (
        <div className="flex flex-col gap-2">
            <ProjectCard key={tempProject.id} project={tempProject} />
            <div className="w-full h-10 rounded-xl bg-black_primary opacity-85 text-center">Footer</div>
        </div>
    );
}