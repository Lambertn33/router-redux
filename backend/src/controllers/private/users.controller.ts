import axios from "axios";

import { Request, Response } from "express";

import { User as UserInterface } from "../../interfaces/user.interface";

import { Post as PostInterface } from "../../interfaces/post.interface";

const apiUrl: string = "https://jsonplaceholder.typicode.com/users";

const getUsers = async (_: Request, res: Response): Promise<Response> => {
  const response = await axios.get(apiUrl);
  const users: UserInterface[] = await response.data;
  return res.status(200).json({ users });
};

const getUser = async (req: Request, res: Response): Promise<Response> => {
  const userId: string = req.params.id;
  const response = await axios.get(`${apiUrl}/${userId}`);
  const user: UserInterface = await response.data;
  return res.status(200).json({ user });
};

const getUserPosts = async (req: Request, res: Response): Promise<Response> => {
    const userId: string = req.params.id;
    const response = await axios.get(`${apiUrl}/${userId}/posts`);
    const posts: PostInterface = await response.data;
    return res.status(200).json({ posts });
  };

export default {
  getUsers,
  getUser,
  getUserPosts
};
