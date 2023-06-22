import { Request, Response } from "express";
import { AuthInputs, User as UserInterface } from "../interfaces/auth.interface";
import { v4 as uuidV4 } from 'uuid';
import { hash } from "bcryptjs";
import { addNewUserToFile } from "../services/users.services";

const register = async(req: Request, res: Response) => {
    const { username, password }: AuthInputs = req.body;
    const hashedPassword = await hash(password, 12);
    const newUser: UserInterface = {
        id: uuidV4(),
        username,
        password: hashedPassword
    }
    addNewUserToFile(newUser);
    return res.status(200).json({ message: "user added successfully" });
        
}

export default {
    register
}