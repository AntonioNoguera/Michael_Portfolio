import instagram from '@svg_assets/svg_instagram.svg'
import { ContactOption } from "@/data/types/contact_option";
import linkedin from '@svg_assets/svg_linkedin.svg'
import github from '@svg_assets/svg_github.svg'

export const ContactOptions: ContactOption[] = [
    {
        networkIcon: instagram,
        networkName: "Instagram",
        networkUsername: "IngLaLegge",
        newtorkLink: "https://instagram.com/IngLaLegge"
    },
    {
        networkIcon: github,
        networkName: "GitHub",
        networkUsername: "AntonioNoguera",
        newtorkLink: "https://github.com/AntonioNoguera"
    },

    {
        networkIcon: linkedin,
        networkName: "LinkedIn",
        networkUsername: "Michael Noguera",
        newtorkLink: "https://linkedin.com/in/michael-antonio-noguera-guzmán-1aa865233"
    },
]