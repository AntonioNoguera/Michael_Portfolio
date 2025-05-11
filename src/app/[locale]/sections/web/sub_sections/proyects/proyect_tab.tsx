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
        description: '',
        platform: 'html - vanilla js - - python - sklearn - bootstrap',
    },
    {
        id: '2',
        name: 'Simulación avanzada empleando numeros aleatorios',
        description: '',
        platform: 'vanilla js - html - bootstrap',
    },
    {
        id: '3',
        name: 'Platforma de manejo privado de archivos PDF',
        description: '',
        platform: 'python - eel - html - tailwind - vanilla js - mysql',
    },
    {
        id: '4',
        name: 'Plataforma de gestión de almacenes especializado',
        description: '',
        platform: 'React JS - Bootstrap - Front Arq - ',
    }, 
];

export default function ProyectTab() {
    return (
        <div className="space-y-4 w-full pt-6 ">
            {
                mockProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))
            }
        </div>
    );
}