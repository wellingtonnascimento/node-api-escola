import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// Não deveria Existir
// router.get('/', userController.index); // Listar Usuarios
// router.get('/:id', userController.show);// Listar usuario

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
