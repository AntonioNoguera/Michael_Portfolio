'use client';

import ProjectCard, { Project } from "./components/proyect_card";

import heart from '@svg_assets/web-proyects/svg_heart.svg';
import lock from '@svg_assets/web-proyects/svg_lock.svg';
import random from '@svg_assets/web-proyects/svg_random.svg';
import warehouse from '@svg_assets/web-proyects/svg_warehouse.svg';


const mockProjects: Project[] = [
    {
        id: '1',
        icon: "https://i.imgur.com/2HQejbJ.png",
        name: 'Plataforma de predicción de paro cardiacos',
        description: 'Aplicación web diseñada para asistir en la predicción temprana de paros cardiacos mediante el análisis de datos clínicos. Utiliza algoritmos de machine learning desarrollados con Python y scikit-learn para identificar patrones en los signos vitales y antecedentes médicos del paciente. La plataforma presenta una interfaz sencilla construida con HTML, JavaScript y Bootstrap, permitiendo a los usuarios ingresar datos relevantes y visualizar los resultados de predicción en tiempo real de forma clara y accesible.',
        platform: 'html - vanilla js - - python - sklearn - bootstrap',
    },
    // {
    //     id: '2', 
    //     icon: random,
    //     name: 'Simulación avanzada empleando numeros aleatorios',
    //     description: 'Aplicación interactiva para simular eventos probabilísticos y analizar resultados mediante modelos estadísticos.',
    //     platform: 'vanilla js - html - bootstrap',
    // },
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
    //     platform: 'React JS - Bootstrap - Front Arq - ',
    // },
];

export default function ProyectTab() {
    let tempProject = mockProjects[0]

    return (

        <ProjectCard key={tempProject.id} project={tempProject} />  
    );
}