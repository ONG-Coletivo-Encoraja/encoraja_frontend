

import React from 'react';

interface BackgroundImageProps {
  children: React.ReactNode;
  className?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children, className }) => {
  return (
    <div
      className={`relative bg-no-repeat ${className}`}
      style={{ backgroundImage: 'url("/img/backgroundgirls.png")' }}
    >
      <div>
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
