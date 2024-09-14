// backend/app.ts
import express from 'express';
import path from 'path';
import imageRoutes from './routes/imageRoutes';

const app = express();

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/images', imageRoutes);

export default app;
