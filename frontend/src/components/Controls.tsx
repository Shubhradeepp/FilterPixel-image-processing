import React, { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

const Controls: React.FC = () => {
  const { settings, setSettings } = useContext(ImageContext) || {};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: parseFloat(value)
    }));
  };

  return (
    <div>
      <label>
        Brightness:
        <input
          type="range"
          name="brightness"
          min="0.1"
          max="2"
          step="0.1"
          value={settings.brightness}
          onChange={handleChange}
        />
      </label>
      <label>
        Contrast:
        <input
          type="range"
          name="contrast"
          min="0.1"
          max="2"
          step="0.1"
          value={settings.contrast}
          onChange={handleChange}
        />
      </label>
      <label>
        Saturation:
        <input
          type="range"
          name="saturation"
          min="0.1"
          max="2"
          step="0.1"
          value={settings.saturation}
          onChange={handleChange}
        />
      </label>
      <label>
        Rotation:
        <input
          type="range"
          name="rotation"
          min="0"
          max="360"
          step="1"
          value={settings.rotation}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Controls;
