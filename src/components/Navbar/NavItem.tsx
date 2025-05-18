import Image from 'next/image';
import { StaticImageData } from 'next/image';

export interface NavItemProps {
  href: string;
  text: string;
  icon: StaticImageData; 
}

const NavItem: React.FC<NavItemProps> = ({ 
  href, 
  text, 
  icon
}) => {
  
  const hrefClass = "hover:text-secondary relative group w-full flex flex-col gap-2 items-center justify-center";
  const spanClass = "absolute -bottom-1 left-0 w-0 h-0.5 bg-white_primary transition-all duration-300 group-hover:w-full";

  return (
    <a href={href} className={hrefClass}>
      {icon && (
        <Image
          src={icon}
          alt={`Ícono para ${text}`}
          style={{
            height: '3vh',
            width: 'auto'
        }}
          className="group-hover:scale-110 transition-transform duration-300"
        />
      )}
      {text}
      {spanClass && <span className={spanClass}></span>}
    </a>
  );
}

export default NavItem; 