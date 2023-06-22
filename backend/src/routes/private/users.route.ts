import { Router } from "express";

import usersController from "../../controllers/private/users.controller";

import checkToken from "../../middleware/auth.middleware";

const router = Router();

router.get('/', checkToken, usersController.getUsers);

export default router;