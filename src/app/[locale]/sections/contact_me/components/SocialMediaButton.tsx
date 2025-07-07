import React from 'react';
import Image from 'next/image';
import { ContactOption } from '@/data/types/contact_option';

interface SocialMediaButtonProps {
  networkInfo: ContactOption;
  className?: string;
  onClick?: () => void;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ networkInfo, className, onClick }) => {

  const iconClassName = "inline-block w-8 h-8 brightness-0 invert";
  const usernameClassName = "font-light italic text-sm text-white opacity-50 mb-1";

  return (
    <div className={className} onClick={onClick}>
      <Image
        src={networkInfo.networkIcon}
        alt={networkInfo.networkName+"icon"}
        className={iconClassName}
      />

      <div className="flex flex-row items-end gap-x-3 ml-4">
        <div>{networkInfo.networkName}</div>
        <div className={usernameClassName}>{networkInfo.networkUsername}</div>
      </div>
    </div>
  );
};

export default SocialMediaButton;