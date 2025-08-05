

import github_logo from '@png_assets/svg_personal_github.png';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const LoadingOverlay = ({ loading }: { loading: boolean }) => {
    return (
        <div
            className={`fixed inset-0 bg-primary z-50 text-2xl text-white_primary items-center justify-center flex flex-col gap-3 transition-opacity duration-1000 ${loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
        >
            <ReactMarkdown
                components={{
                    p: ({ children }) => <span>{children}</span>,
                }}
            >
                {"El portafolio  \n de  **Michael**"}
            </ReactMarkdown>

            <Image
                src={String(github_logo.src)}
                alt={`Bandera de idioma`}
                height={50}
                width = {50}
                className=" border-t-transparent   animate-spin-slow"
            />

        </div>
    );
};
export default LoadingOverlay;