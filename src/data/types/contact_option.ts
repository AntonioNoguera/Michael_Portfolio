import { StaticImageData } from "next/image";

export type ContactOption = {
    networkIcon: StaticImageData | string;
    networkName: string;
    networkUsername: string;
    newtorkLink: string;
}