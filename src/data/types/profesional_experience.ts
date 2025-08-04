import { StaticImageData } from "next/image";

export type ProfesionalExperience = {
    companyIcon: StaticImageData | string;
    companyName: string;
    companyPeriod: string;
    position: string;
    positionIcon: StaticImageData | string; 
};