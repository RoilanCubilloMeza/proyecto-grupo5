import { NextApiRequest, NextApiResponse } from "next";

interface User {
  id: number;
  name: string;
  email: string;
  
}

const users: User[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const newUser: User = {
      id: Math.floor(Math.random() * 1000),
      name: req.body.name,
      email: req.body.email,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } else if (req.method === "PUT") {
    const userId = Number(req.query.id);
    const updatedUser: User = {
      id: userId,
      name: req.body.name,
      email: req.body.email,
    };
    const index = users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      users[index] = updatedUser;
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } else if (req.method === "DELETE") {
    const userId = Number(req.query.id);
    const index = users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      users.splice(index, 1);
      res.status(200).json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
}
