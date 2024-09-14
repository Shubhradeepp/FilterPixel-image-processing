import React from 'react';
import ImageUpload from './components/ImageUpload';
import ImagePreview from './components/ImagePreview';
import Controls from './components/Controls';
import { ImageProvider } from './contexgitt/ImageContext';

const App: React.FC = () => {
  return (
    <ImageProvider>
      <div className="App">
        <h1>Image Processing App</h1>
        <ImageUpload />
        <Controls />
        <ImagePreview />
      </div>
    </ImageProvider>
  );
};

export default App;
