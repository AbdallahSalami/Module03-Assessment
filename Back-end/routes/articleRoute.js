// RoleRoute.js
import {
    addArticle,
    getAllArticle,
    getOneArticle,
    updateArticle,
    deleteArticle
} from '../Controllers/ArticleModel.js';
import { Router } from 'express';
import {  verifyToken } from '../midleware/auth.js';
const router = Router();

router.post('/', addArticle);
router.get('/',getAllArticle);
router.get('/:id', getOneArticle);
router.patch('/:id',updateArticle);
router.delete('/:id', deleteArticle);



export default router;
