import express from 'express';
import {adminValidate} from '../services/loginValidation.js';
import { getClients,verify,deactivate } from '../controller/clientController.js';

const router = express.Router();


router.get('/',adminValidate,getClients);
router.get('/:id',adminValidate,getClients);
router.patch('/:id/verify',adminValidate,verify);
router.patch('/:id/deactivate',adminValidate,deactivate);


export default router;