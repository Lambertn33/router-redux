"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewUserToFile = void 0;
const fs_1 = __importDefault(require("fs"));
const filePath = "./data/users.json";
const addNewUserToFile = (newUser) => {
    fs_1.default.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        let existingData;
        try {
            existingData = JSON.parse(data);
        }
        catch (err) {
            console.log(err);
            return;
        }
        existingData.users.push(newUser);
        const updatedData = JSON.stringify(existingData, null, 2);
        fs_1.default.writeFile(filePath, updatedData, "utf8", (writeErr) => {
            if (writeErr) {
                console.log(err);
                return;
            }
        });
    });
};
exports.addNewUserToFile = addNewUserToFile;
