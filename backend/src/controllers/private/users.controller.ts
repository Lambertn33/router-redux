import axios from "axios";

import { Request, Response } from "express";

import { User as UserInterface } from "../../interfaces/user.interface";

const apiUrl: string = "https://jsonplaceholder.typicode.com/users";

const getUsers = async(_: Request, res: Response) => {
    const response = await axios.get(apiUrl);
    const users: UserInterface[] = await response.data;
    return res.status(200).json({ users });   
}

export default {
    getUsers
}
