import React, { useContext } from 'react';
import axios from 'axios';
import { ImageContext } from '../context/ImageContext';

const ImageUpload: React.FC = () => {
  const { setImage } = useContext(ImageContext) || {};

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post('http://localhost:5000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        setImage(response.data.filePath);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
    </div>
  );
};

export default ImageUpload;
