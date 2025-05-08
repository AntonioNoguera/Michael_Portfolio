
import Image, { StaticImageData } from 'next/image';

export type ProfessionalExperienceProps = {
    companyIcon: StaticImageData | string
    companyName: string;
    companyPeriod: string;
    position: string;
    positionIcon: string; 
};

export default function ProfessionalExperienceItem({companyIcon, companyName, companyPeriod, position, positionIcon}: ProfessionalExperienceProps) {
    return (
        <div className="flex flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
                <Image src={companyIcon} alt="Enviaflores" width={25} height={25} />
                <strong>{companyName}</strong>
                <span className="hidden md:block">{companyPeriod}</span>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-end mt-1 md:mt-0">
                <span>{position}</span>
                <Image src={positionIcon} alt="Android" width={25} height={25} />
            </div>
        </div>
    )
}