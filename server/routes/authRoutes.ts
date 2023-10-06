import express from 'express';
import { register, login } from '../controllers/authController';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', verifyToken, login);

export default router;
