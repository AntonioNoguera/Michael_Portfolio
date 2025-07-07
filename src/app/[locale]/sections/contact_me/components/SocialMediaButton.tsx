import React from 'react';

interface SocialMediaButtonProps {
  icon: string;
  iconAlt?: string;
  platformName: string;
  username: string;
  onClick?: () => void;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon,
  iconAlt = "social media icon",
  platformName,
  username,
  onClick
}) => {

  const buttonClassName = "bg-primary rounded-2xl text-white_primary text-xl md:text-2xl lg:text-3xl px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 font-semibold items-center flex-row flex shadow-md cursor-pointer w-full max-w-xs md:max-w-sm lg:max-w-none hover:shadow-lg hover:scale-105 hover:bg-primary/90 transition-all duration-200 ease-in-out";
  const iconClassName = "inline-block w-8 h-8 brightness-0 invert";
  const usernameClassName = "font-light italic text-sm text-white opacity-50 mb-1";

  return (
    <div className={buttonClassName} onClick={onClick}>
      <img
        src={icon}
        alt={iconAlt}
        className={iconClassName}
      />

      <div className="flex flex-row items-end gap-x-3 ml-4">
        <div>{platformName}</div>
        <div className={usernameClassName}>{username}</div>
      </div>
    </div>
  );
};

export default SocialMediaButton;