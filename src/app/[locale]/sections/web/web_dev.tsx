import { useTranslations } from "next-intl";
import React from "react";

export default function WebSection() {

    const t = useTranslations('Mobile_Section');

    return (
        <section id="mobile" className="h-screen snap-start bg-secondary flex flex-col items-center justify-center pt-14">
            <p className="text-page_title font-bold text-center mobile-header ">
                {
                    t('title').split('\n').map((line, index) => (
                        <React.Fragment key={`line-${index}`}>
                            {line}
                            <br className="br-tall" />
                        </React.Fragment>
                    ))
                }
            </p>

            <p className="text-body2 text-center px-28 text-black_primary">
                {t('subtitle')}
            </p>

        </section>
    );
}