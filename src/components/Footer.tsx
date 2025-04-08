import React from 'react';

import Image from 'next/image';

import instagram_logo from '@svg_assets/svg_instagram.svg';
import linkedin_logo from '@svg_assets/svg_linkedin.svg';
import github_logo from '@svg_assets/svg_github.svg';


const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-4 w-full">
            <div className="container mx-auto px-4 flex gap-8 flex-col md:flex-row items-center justify-center">

                <Image
                    src={instagram_logo}
                    alt="Una descripción de la imagen"
                    width={25}
                    className='filter invert'/>

                <Image
                    src={linkedin_logo}
                    alt="Una descripción de la imagen"
                    width={25}  
                    className='filter invert'/>

                <Image
                    src={github_logo}
                    alt="Una descripción de la imagen"
                    width={25}  
                    className='filter invert'/>
            </div>
        </footer>
    );
};

export default Footer;