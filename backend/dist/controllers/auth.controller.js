"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const bcryptjs_1 = require("bcryptjs");
const users_services_1 = require("../services/users.services");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const hashedPassword = yield (0, bcryptjs_1.hash)(password, 12);
    const checkUser = yield (0, users_services_1.checkUserExistenceInFile)(username);
    if (checkUser)
        return res.status(400).json({ message: "email provided already exists" });
    const newUser = {
        id: (0, uuid_1.v4)(),
        username,
        password: hashedPassword,
    };
    (0, users_services_1.addNewUserToFile)(newUser);
    return res.status(200).json({ message: "user added successfully" });
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield (0, users_services_1.checkUserExistenceInFile)(username);
    if (!user)
        return res
            .status(404)
            .json({ message: "email provided is not registered" });
    const passwordCheck = yield (0, bcryptjs_1.compare)(password, user.password);
    if (!passwordCheck)
        return res.status(400).json({ message: "invalid password" });
    const token = (0, users_services_1.generateToken)(user);
    return res.status(200).json({ token });
});
exports.default = {
    login,
    register,
};
