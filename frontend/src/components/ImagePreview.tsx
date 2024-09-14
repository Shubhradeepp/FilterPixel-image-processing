import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ImageContext } from '../context/ImageContext';

const ImagePreview: React.FC = () => {
  const { image, settings } = useContext(ImageContext) || {};
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      const fetchPreview = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/process', {
            image,
            ...settings
          }, {
            responseType: 'blob'
          });

          const url = URL.createObjectURL(response.data);
          setPreview(url);
        } catch (error) {
          console.error('Error fetching image preview:', error);
        }
      };

      fetchPreview();
    }
  }, [image, settings]);

  return (
    <div>
      {preview ? <img src={preview} alt="Preview" style={{ maxWidth: '100%' }} /> : <p>No image selected</p>}
    </div>
  );
};

export default ImagePreview;
