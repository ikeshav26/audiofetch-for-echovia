import express from 'express';


const router=express.Router();


router.get('/convert',(req,res)=>{
    res.send('Conversion started');
})




export default router;