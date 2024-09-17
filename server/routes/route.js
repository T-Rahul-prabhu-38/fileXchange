import express from 'express'
import { uploadImage } from '../controller/image-Controller.js';

const router = express.Router();

router.post('/upload',uploadImage);

export default router;