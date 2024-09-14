// backend/routes/imageRoutes.ts
import express from 'express';
import multer from 'multer';
import { processImage } from '../controllers/imageController';

const router = express.Router();
const upload = multer({ dest: 'backend/uploads/' });

// Route for processing images
router.post('/process', upload.single('image'), processImage);

export default router;
