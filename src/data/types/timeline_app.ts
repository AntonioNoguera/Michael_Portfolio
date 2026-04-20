import { StaticImageData } from "next/image";

export type TimelineLink = {
    type: 'web' | 'github' | 'app_store' | 'play_store';
    url: string;
    labelKey?: string;
};

export type TimelineApp = {
    id: string;
    year: number;
    kind: 'professional' | 'personal';
    nameKey: string;
    subtitleKey?: string;
    descriptionKey: string;
    icon: StaticImageData | string;
    coverImage?: StaticImageData | string;
    featured?: boolean;
    techs?: (StaticImageData | string)[];
    links?: TimelineLink[];
};
