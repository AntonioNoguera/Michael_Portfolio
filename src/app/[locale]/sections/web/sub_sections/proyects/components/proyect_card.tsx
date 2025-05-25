'use client';
import Link from 'next/link'

import UsedTecnologyItem from './used_technology_item';

import github_logo from '@png_assets/github.png';
import "keen-slider/keen-slider.min.css";

import Image, { StaticImageData } from 'next/image';

export type Project = {
  id: string;
  icon: string;
  name: string;
  description: string;
  github_link?: string;
  used_tecnologies: UsedTecnology[];
};

export type UsedTecnology = {
  id: string;
  icon: StaticImageData;
  title: string;
  description: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='px-20'>

      <div className="flex flex-row gap-6 w-full rounded-2xl p-4 bg-white shadow keen-slider__slide">
        <Image
          src={project.icon}
          alt="Una descripción de la imagen"
          width={1080}
          height={607}
          className=" w-[55%] h-auto flex  rounded-md"
        />

        <div className="flex flex-col w-[45%] justify-between">
          <div className='flex flex-col gap-2'>
            <h2 className="text-[3.2vh] font-semibold">{project.name}</h2>
            <p className="text-[2.4vh] font-regular text-black_primary inline-flex">{project.description}</p>
          </div>

          <div>

            <div className="font-semibold text-left  text-[2vh] text-black opacity-50 ">Empleando: </div>
            <div className='flex items-center flex-row justify-between'>
              <div className="flex flex-col  flex-grow w-full items-start justify-start gap-2">
                <UsedTecnologyItem
                  proyectId={project.id}
                  tecnologies={project.used_tecnologies}
                />
              </div>

              {project.github_link && (
                <Link
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className='group flex flex-row items-center bg-[#151B23] rounded-full whitespace-nowrap cursor-pointer transition-all duration-350 p-1 group-hover:px-2'>
                    <span className="text-white text-sm px-0 group-hover:px-1 transition-all duration-350 max-w-[0px] group-hover:max-w-[300px] opacity-0 group-hover:opacity-100 overflow-hidden">
                      Ver Código
                    </span>

                    <Image
                      alt="GitHub"
                      className="flex-shrink-0"
                      width={30}
                      height={30}
                      src={github_logo}
                    />
                  </div>
                </Link>
              )}


            </div>
          </div>

        </div>
      </div>

    </div>
  );
}