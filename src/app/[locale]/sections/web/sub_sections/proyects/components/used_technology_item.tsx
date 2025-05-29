import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

export type UsedTecnology = {
    id: string;
    icon: StaticImageData;
    title: string;
    description: string;
};

interface UsedTecnologiesProps {
    proyectId: string;
    tecnologies: UsedTecnology[];
}

export default function UsedTechnologyItem({proyectId, tecnologies }: UsedTecnologiesProps) {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <div className="flex flex-row gap-3">
            {tecnologies.map((item, index) => (
                <div
                    key={proyectId + item.id}
                    className="relative inline-block"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Image
                        alt={item.title || 'Technology icon'}
                        height={30}
                        width={0}
                        src={item.icon}
                        style={{ objectFit: 'contain' }}
                        className="cursor-pointer transition-transform hover:scale-110"
                    />

                    {hoveredItem === item.id && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50">
                            <div className="bg-black_primary text-white_primary p-3 rounded-lg shadow-std w-[220] flex flex-row gap-4">
                                <div className=' '>
                                    <div className="text-sm font-semibold mb-1">{item.title}</div>
                                    <div className="text-xs">{item.description}</div>

                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                        <div className="border-l-4 border-r-4 border-t-4 border-transparent border-t-black_primary"></div>
                                    </div>
                                </div>

                                <Image
                                    alt={item.title || 'Technology icon'}
                                    width={50}
                                    height={0}
                                    src={item.icon}
                                    style={{ objectFit: 'contain' }}
                                    className="cursor-pointer transition-transform hover:scale-110"
                                />

                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}