'use client';

import ProjectCard from "./components/proyect_card";

type Project = {
    id: string;
    name: string;
    description: string;
    platform: 'android' | 'ios' | 'multiplatform';
};

const mockProjects: Project[] = [
    {
        id: '1',
        name: 'Mi App Android',
        description: 'Una app para Android enfocada en ecommerce.',
        platform: 'android',
    },
    {
        id: '2',
        name: 'Mi App iOS',
        description: 'Una app nativa para iOS con SwiftUI.',
        platform: 'ios',
    },
    {
        id: '3',
        name: 'Mi App Multiplataforma',
        description: 'Desarrollada con Flutter, funciona en Android y iOS.',
        platform: 'multiplatform',
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