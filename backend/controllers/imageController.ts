import { Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import { ImageSettings } from '../types/imageSettings';

// Image processing controller
export const processImage = async (req: Request, res: Response) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  const settings: ImageSettings = req.body;

  const filePath = path.join(__dirname, 'uploads', file.filename);

  try {
    let image = sharp(filePath);

    // Apply settings if provided
    if (settings.brightness) {
      image = image.modulate({ brightness: settings.brightness });
    }

    if (settings.saturation) {
      image = image.modulate({ saturation: settings.saturation });
    }

    if (settings.hue) {
      image = image.modulate({ hue: settings.hue });
    }

    if (settings.lightness) {
      image = image.modulate({ lightness: settings.lightness });
    }

    if (settings.contrast) {
      const contrastValue = settings.contrast;
      // Adjust contrast using `linear` method
      image = image.linear(contrastValue, 0);
    }

    // Process and save the image
    await image.toFile(filePath + '_processed.jpg');

    res.json({ message: 'File processed successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error processing image.');
  }
};
