'use client';

import ProjectCard, { Project } from "./components/proyect_card";

import heart from '@svg_assets/web-proyects/svg_heart.svg';
import lock from '@svg_assets/web-proyects/svg_lock.svg';
import random from '@svg_assets/web-proyects/svg_random.svg';
import warehouse from '@svg_assets/web-proyects/svg_warehouse.svg';


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