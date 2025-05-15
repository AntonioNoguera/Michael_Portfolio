'use client';

import Image from 'next/image';
import myself from '@svg_assets/svg_github.svg';

type Project = {
  id: string;
  name: string;
  description: string;
  platform: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border flex flex-row justify-between w-full p-4   rounded-xl bg-white shadow">

      <Image
        src={myself}
        alt="Una descripción de la imagen"
        className="rounded-3xl"
        style= {
          {
            height: 'auto',
            width: '40%', 
          }
        }
      />

      <div className='flex flex-col gap-2'>
        <h2 className="text-l font-semibold">{project.name}</h2>
        <h2 className="text-l font-regular">{project.description}</h2>
      </div>

    </div>
  );
}
