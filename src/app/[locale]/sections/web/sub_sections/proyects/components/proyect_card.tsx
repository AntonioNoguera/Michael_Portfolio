'use client';
import Link from 'next/link'

import UsedTecnologyItem from './used_technology_item';

import github_logo from '@png_assets/github.png';
import "keen-slider/keen-slider.min.css";

import Image from 'next/image';

import './bullets.css';
import { Proyect } from '@/data/types/proyect';

export type ProyectCardProps = {
  proyect: Proyect;
  progressData: {
    progress: number;
    timeLeft: number;
  };
}

export default function ProjectCard({ proyect, progressData }: ProyectCardProps) {
  return (
    <div className='px-20'>

      <div className="flex flex-row gap-6 w-full rounded-2xl p-4 bg-white shadow keen-slider__slide">

        <div className='w-[55%] h-auto flex rounded-md relative'>
          <Image
            src={proyect.icon}
            alt="Una descripción de la imagen"
            width={1080}
            height={0}
            className="w-full h-auto rounded-md"
          />

          <div className="autoplay-progress absolute bottom-0 left-0 z-10 w-12 h-12 flex items-center justify-center text-white_primary text-sm">
            <svg viewBox="0 0 48 48" className="absolute z-10 stroke-white_primary fill-none -rotate-90"
              style={{
                '--progress': progressData.progress,
                strokeWidth: '4px',
                strokeDasharray: '125.6',
                strokeDashoffset: `calc(125.6px * (1 - var(--progress)))`
              } as React.CSSProperties}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span>{progressData.timeLeft}</span>
          </div>
        </div>

        <div className="flex flex-col w-[45%] justify-between">
          <div className='flex flex-col gap-2'>
            <h2 className="text-[3.2vh] font-semibold">{proyect.name}</h2>
            <p className="text-[2.4vh] font-regular text-black_primary inline-flex">{proyect.description}</p>
          </div>

          <div>

            <div className="font-semibold text-left  text-[2vh] text-black opacity-50 ">Empleando: </div>
            <div className='flex items-center flex-row justify-between'>
              <div className="flex flex-col  flex-grow w-full items-start justify-start gap-2">
                <UsedTecnologyItem
                  proyectId={proyect.id}
                  tecnologies={proyect.used_tecnologies}
                />
              </div>

              {proyect.github_link && (
                <Link
                  href={proyect.github_link}
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
