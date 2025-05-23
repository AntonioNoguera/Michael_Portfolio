'use client';

import myself from '@svg_assets/svg_github.svg';
import UsedTecnologyItem from './used_technology_item';

import github_logo from '@svg_assets/svg_github.svg';

import Image, { StaticImageData } from 'next/image';

export type Project = {
  id: string;
  icon: string;
  name: string;
  description: string;
  platform: string;
  github_link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-row gap-6 w-full rounded-2xl p-4 bg-white shadow">
      <Image
        src={project.icon}
        alt="Una descripción de la imagen"
        width={0}
        height={0}
        className=" w-[55%] h-auto flex  rounded-md"
      />

      {/* TODO: Gap a base de breakpoints */}
      <div className="flex flex-col w-[45%] justify-between">
        <div className='flex flex-col gap-2'>
          <h2 className="text-[3vh] font-semibold">{project.name}</h2>
          <p className="text-[2.2vh] font-regular inline-flex">{project.description}</p>
        </div>

        {/* <div className="flex-row sm:flex-col w-full items-center  justify-end gap-6"> */}
        <div className='flex flex-row justify-between'>
          <div className="flex flex-col  flex-grow w-full items-start justify-start gap-2">
            {/* <div className="font-semibold  text-[2vh] text-black opacity-50 ">Empleando: </div> */}
            <UsedTecnologyItem />
          </div>

          <div className='flex flex-col items-end  p-2 justify-end bg-[#151B23] rounded-full'>
            <Image
              alt=""
              className='filter invert'
              style={{ width: 'auto', height:'200'}}  
              src={github_logo}
            />
          </div>

        </div>

      </div>
    </div>
  );
}