import fs from "fs";
import jwt from 'jsonwebtoken';
import { User as UserInterface } from "../interfaces/auth.interface";

const filePath = "./data/users.json";

interface ExistingUsersInterface {
  users: UserInterface[];
}

export const addNewUserToFile = async (
  newUser: UserInterface
): Promise<any> => {
  const data: string = await fs.promises.readFile(filePath, "utf-8");
  const existingData: ExistingUsersInterface = JSON.parse(data);
  existingData.users.push(newUser);
  const updatedData = JSON.stringify(existingData, null, 2);
  await fs.promises.writeFile(filePath, updatedData, "utf8");
};

export const checkUserExistenceInFile = async (
  username: string
): Promise<UserInterface> => {
  const data: string = await fs.promises.readFile(filePath, "utf-8");
  const existingData: ExistingUsersInterface = JSON.parse(data);
  const user: UserInterface = existingData.users.find(
    (user) => user.username === username
  )!;
  return user;
};

export const generateToken = (user: UserInterface) => {
  const secretKey: string = 'randomKey';
  return jwt.sign({ user }, secretKey, { expiresIn: '2h' });
}
