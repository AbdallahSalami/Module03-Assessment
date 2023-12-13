// RoleRoute.js
import {
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
    
} from '../Controllers/UserController.js';
import { Router } from 'express';
import {verifyToken} from '../midleware/auth.js'

const router = Router();

router.post('/', addUser);
router.get('/', getAllUser);
router.get('/:id', getOneUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
// router.post('/login',verifyToken, login);



export default router;
