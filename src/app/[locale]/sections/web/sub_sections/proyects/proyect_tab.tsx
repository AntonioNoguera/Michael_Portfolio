'use client';

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
        <div className="space-y-4 w-full">
            {mockProjects.map((project) => (
                <div key={project.id} className="border  w-full p-4 rounded-md shadow">
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                    <p className="text-gray-600">{project.description}</p>
                    <span className="text-sm text-blue-600 capitalize">
                        Plataforma: {project.platform}
                    </span>
                </div>
            ))}
        </div>
    );
}