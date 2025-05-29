import { UsedTecnology } from "./used_tecnology";

export type Proyect = {
  id: string;
  icon: string;
  name: string;
  description: string;
  github_link?: string;
  used_tecnologies: UsedTecnology[];
};