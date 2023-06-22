import { Router } from "express";

import usersController from "../../controllers/private/users.controller";

import checkToken from "../../middleware/auth.middleware";

const router = Router();

router.get('/', checkToken, usersController.getUsers);

router.get('/:id', checkToken, usersController.getUser);

router.get('/:id/posts', checkToken, usersController.getUserPosts);

export default router;