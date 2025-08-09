import express from 'express';
import { convertYoutubeToMp3 } from '../controller/convert.controller.js';


const router=express.Router();


router.post('/convert',convertYoutubeToMp3)




export default router;