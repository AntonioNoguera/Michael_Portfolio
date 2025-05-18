'use client';

import Image from 'next/image';
import myself from '@svg_assets/svg_github.svg';
import UsedTecnologyItem from './used_technology_item';

type Project = {
  id: string;
  name: string;
  description: string;
  platform: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-row gap-2 w-full rounded-xl px-4 bg-white shadow"> 
        <Image
          src={myself}
          alt="Una descripción de la imagen"
          className=' w-[30%]'
          style={{
            height: 'auto', 
            maxWidth: '30%'
          }}
        />  

      <div className="flex flex-col py-4 w-3/4 justify-between gap-12">
        <div className='flex flex-col gap-4'>
          <h2 className="text-xl font-semibold">{project.name}</h2>
          <h2 className="text-md font-regular">{project.description}</h2>
        </div>

        <div className="flex-row w-full items-center justify-end gap-6 hidden h-sm:visible  h-sm:inline-flex">
          <div className="font-semibold text-black_primary opacity-85">Empleando: </div>
          <UsedTecnologyItem />
        </div>
      </div>
    </div>
  );
}