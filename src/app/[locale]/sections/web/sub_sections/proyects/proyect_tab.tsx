'use client';

import ProjectCard from "./components/proyect_card";

type Project = {
    id: string;
    name: string;
    description: string;
    platform: string;
};
const mockProjects: Project[] = [
    {
        id: '1',
        name: 'Plataforma de predicción de paro cardiacos',
        description: 'Sistema que analiza patrones médicos para predecir riesgos de paro cardiaco usando algoritmos de machine learning.',
        platform: 'html - vanilla js - - python - sklearn - bootstrap',
    },
    {
        id: '2',
        name: 'Simulación avanzada empleando numeros aleatorios',
        description: 'Aplicación interactiva para simular eventos probabilísticos y analizar resultados mediante modelos estadísticos.',
        platform: 'vanilla js - html - bootstrap',
    },
    {
        id: '3',
        name: 'Platforma de manejo privado de archivos PDF',
        description: 'Sistema seguro para unir, almacenar y administrar documentos PDF con control de acceso por roles.',
        platform: 'python - eel - html - tailwind - vanilla js - mysql',
    },
    {
        id: '4',
        name: 'Plataforma de gestión de almacenes especializado',
        description: 'Aplicación web para el control de inventario, entradas y salidas de productos con distintos niveles de usuario.',
        platform: 'React JS - Bootstrap - Front Arq - ',
    },
];

export default function ProyectTab() {
    return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-4 pt-3 w-full h-full">
            {
                mockProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))
            }
        </div>
    );
}