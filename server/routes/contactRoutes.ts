import { Router } from 'express';
import { saveContactInfo } from '../controllers/contactInfoController';

const router = Router();

router.post('/info', saveContactInfo);

export default router;
