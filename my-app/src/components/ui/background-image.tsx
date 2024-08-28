
import React from 'react';

interface BackgroundImageProps {
  children: React.ReactNode;
  className?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children, className }) => {
  return (
    <div
      className={`relative bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: 'url("/img/background-girls.png")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
