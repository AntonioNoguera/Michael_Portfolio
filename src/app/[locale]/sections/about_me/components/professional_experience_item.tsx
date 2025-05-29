
import { ProfesionalExperience } from '@/data/types/profesional_experience';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';

export type ProfessionalExperienceProps = {
    experienceInfo: ProfesionalExperience;
};

export default function ProfessionalExperienceItem({ experienceInfo }: ProfessionalExperienceProps) {

    const t = useTranslations('About_Me_Section');

    return (
        <div className="flex flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
                <Image src={experienceInfo.companyIcon} alt="TODO" width={25} height={25} />
                <strong className='text-left'>{t(experienceInfo.companyName)}</strong>
                <span className="hidden md:block">{t(experienceInfo.companyPeriod)}</span>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-end mt-1 md:mt-0">
                <span className='text-end'>{t(experienceInfo.position)}</span>
                <Image src={experienceInfo.positionIcon} alt="Android" width={25} height={25} />
            </div>
        </div>
    )
}