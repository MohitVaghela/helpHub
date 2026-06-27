import express from 'express';
import { register,login,auth } from '../controller/authController.js';
import validRole from '../services/roledefiner.js';

const router = express.Router();

router.post('/register',validRole,register)
router.post('/login',login)
router.post('/me',auth)

export default router;