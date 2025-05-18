import Image, { StaticImageData } from 'next/image';


import html from '@png_assets/LOGO_HTML.png';
import js from '@png_assets/LOGO_JS.png'; 
import python from '@png_assets/LOGO_Python.png'; 
import sklearn from '@png_assets/LOGO_SK_Learn.png'; 
import bootstrap from '@png_assets/LOGO_Bootstrap.png';
import css from '@png_assets/LOGO_CSS.png';

export type TecnologyProps = {
    techName: StaticImageData | string
    companyName: string;
    companyPeriod: string;
    position: string;
    positionIcon: string;
};

export default function UsedTecnologyItem() {
    return (
        <div className="flex flex-row gap-3">

            <Image alt="" style={{ width: 'auto',}} height={30} 
                src={html}  
            />

            <Image alt="" style={{ width: 'auto',}} height={30} 
                src={css}  
            />

            <Image alt="" style={{ width: 'auto',}} height={30} 
                src={js}  
            />

            <Image alt="" style={{ width: 'auto',}} height={30} 
                src={bootstrap}  
            />

            <Image alt="" style={{ width: 'auto',}} height={30} 
                src={python}  
            />

            <Image alt="" style={{ width: 'auto',}} height={30} 
                src={sklearn}  
            />
        </div>
    );
}
