import { Request, Response } from "express";
import {
  AuthInputs,
  User as UserInterface,
} from "../../interfaces/auth.interface";
import { v4 as uuidV4 } from "uuid";
import { hash, compare } from "bcryptjs";
import {
  addNewUserToFile,
  checkUserExistenceInFile,
  generateToken,
} from "../../services/users.services";

const register = async (req: Request, res: Response): Promise<Response> => {
  const { username, password }: AuthInputs = req.body;
  if (!username || !password) return res.status(400).json({ message: 'please provide all fields' });

  const hashedPassword: string = await hash(password, 12);
  const checkUser: UserInterface | null = await checkUserExistenceInFile(
    username
  );
  if (checkUser)
    return res.status(400).json({ message: "username provided already exists" });

  const newUser: UserInterface = {
    id: uuidV4(),
    username,
    password: hashedPassword,
  };
  const token: string = generateToken(newUser);
  addNewUserToFile(newUser);
  return res.status(200).json({ token });
};

const login = async (req: Request, res: Response) => {
  const { username, password }: AuthInputs = req.body;
  if (!username || !password) return res.status(400).json({ message: 'please provide all fields' });

  const user: UserInterface = await checkUserExistenceInFile(username);
  if (!user)
    return res
      .status(404)
      .json({ message: "username provided is not registered" });

  const passwordCheck = await compare(password, user.password);
  if (!passwordCheck)
    return res.status(400).json({ message: "invalid password" });

  const token: string = generateToken(user);
  return res.status(200).json({ token });
};

export default {
  login,
  register,
};
