'use client';

import myself from '@svg_assets/svg_github.svg';
import UsedTecnologyItem from './used_technology_item';


import Image, { StaticImageData } from 'next/image';

export type Project = {
  id: string;
  icon:  string;
  name: string;
  description: string;
  platform: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-row gap-4 w-full rounded-xl px-4 bg-white shadow">
      <div className='w-3/5 flex flex-col items-center justify-center'>
        <Image
          src={project.icon}
          className='w-full'
          width={1768}
          height={829}
          alt="Una descripción de la imagen"
        />
      </div>


      {/* TODO: Gap a base de breakpoints */}
      <div className="flex flex-col py-4 w-2/5 justify-between">
        <div className='flex flex-col gap-2'>
          <h2 className="text-2xl font-semibold">{project.name}</h2>
          <span className="text-md font-regular inline-flex">{project.description}</span>
        </div>

        <div className="flex-row w-full items-center justify-end gap-6 hidden h-sm:inline-flex">
          <div className="font-semibold text-black_primary opacity-85">Empleando: </div>
          <UsedTecnologyItem />
        </div>
      </div>
    </div>
  );
}