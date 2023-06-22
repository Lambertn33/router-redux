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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.checkUserExistenceInFile = exports.addNewUserToFile = void 0;
const fs_1 = __importDefault(require("fs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const filePath = "./data/users.json";
const addNewUserToFile = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fs_1.default.promises.readFile(filePath, "utf-8");
    const existingData = JSON.parse(data);
    existingData.users.push(newUser);
    const updatedData = JSON.stringify(existingData, null, 2);
    yield fs_1.default.promises.writeFile(filePath, updatedData, "utf8");
});
exports.addNewUserToFile = addNewUserToFile;
const checkUserExistenceInFile = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fs_1.default.promises.readFile(filePath, "utf-8");
    const existingData = JSON.parse(data);
    const user = existingData.users.find((user) => user.username === username);
    return user;
});
exports.checkUserExistenceInFile = checkUserExistenceInFile;
const generateToken = (user) => {
    const secretKey = "randomKey";
    return jsonwebtoken_1.default.sign({ user }, secretKey, { expiresIn: "2h" });
};
exports.generateToken = generateToken;