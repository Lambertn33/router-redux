import fs from "fs";

import { User as UserInterface } from "../interfaces/auth.interface";

const filePath = "./data/users.json";

interface ExistingUsersInterface {
  users: UserInterface[];
}

export const addNewUserToFile = (newUser: UserInterface) => {
  fs.readFile(filePath, "utf-8", (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
        console.log(err);
      return;
    }

    let existingData: ExistingUsersInterface;
    try {
      existingData = JSON.parse(data);
    } catch (err) {
        console.log(err);
      return;
    }

    existingData.users.push(newUser);
    const updatedData: string = JSON.stringify(existingData, null, 2);

    fs.writeFile(filePath, updatedData, "utf8", (writeErr) => {
      if (writeErr) {
        console.log(err);
        return;
      }
    });
  });
};
