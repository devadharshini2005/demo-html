import {fetch,create,update,delet,fetchpar} from '../controller/userController.js';
import express from 'express';

const router=express.Router();
 
router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/delete/:id',delet);
router.get('/fetchpar/:id',fetchpar);
export default router;