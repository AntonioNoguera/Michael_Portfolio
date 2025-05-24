import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

export type UsedTecnology = {
  id: string;
  icon: StaticImageData;
  title: string;
  description: string;
};

export default function UsedTecnologyItem({ tecnologies }: { tecnologies: UsedTecnology[] }) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="flex flex-row gap-3">
      {tecnologies.map((item, index) => (
        <div
          key={index}
          className="relative inline-block"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Image
            alt={item.title || 'Technology icon'}
            height={30}
            width={30}
            src={item.icon}
            style={{ objectFit: 'contain' }}
            className="cursor-pointer transition-transform hover:scale-110"
          />
          
          {/* Tooltip */}
          {hoveredItem === item.id && (
            <div className="absolute bottom-full left-1/ transform -translate-x-1/2 mb-2 z-50">
              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg w-[200]">
                <div className="text-sm font-semibold mb-1">{item.title}</div>
                <div className="text-xs text-gray-300">{item.description}</div>
                
                {/* Flecha del tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                  <div className="border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}