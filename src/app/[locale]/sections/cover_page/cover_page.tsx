'use client'

import { useTranslations } from "next-intl";
import React from "react";

export default function CoverPage() {

    const t = useTranslations('Contact_Section');
    
    return (
        <section id="cover" className="h-screen bg-cover snap-start flex flex-col items-start text-center">
            <h1>Michael Noguera</h1>
            <h2>Mobile Specialist</h2>
        </section>
    );
}