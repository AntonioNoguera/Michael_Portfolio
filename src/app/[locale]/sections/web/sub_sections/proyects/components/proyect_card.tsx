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
    <div className="border flex flex-row justify-between w-full p-6 rounded-xl bg-white shadow">

      <Image
        src={myself}
        alt="Una descripción de la imagen"
        className="rounded-3xl -ml-6"
        style={
          {
            height: 'auto',
            width: '35%',
          }
        }
      />

      <div className='flex flex-col gap-2 justify-between'>
        <div>
          <h2 className="text-xl font-semibold">{project.name}</h2>
          <h2 className="text-md font-regular">{project.description}</h2>
        </div>

        <div className='flex flex-row w-full  gap-3 items-center justify-between'> 
          <span>Hola</span>
          <UsedTecnologyItem />
        </div>
      </div>

    </div>
  );
}
