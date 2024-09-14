import React, { createContext, useState, ReactNode } from 'react';

interface ImageContextType {
  image: string | null;
  setImage: (image: string | null) => void;
  settings: {
    brightness: number;
    contrast: number;
    saturation: number;
    rotation: number;
  };
  setSettings: (settings: {
    brightness: number;
    contrast: number;
    saturation: number;
    rotation: number;
  }) => void;
}

export const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [image, setImage] = useState<string | null>(null);
  const [settings, setSettings] = useState({
    brightness: 1,
    contrast: 1,
    saturation: 1,
    rotation: 0
  });

  return (
    <ImageContext.Provider value={{ image, setImage, settings, setSettings }}>
      {children}
    </ImageContext.Provider>
  );
};
