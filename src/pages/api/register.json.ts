import { NextApiRequest, NextApiResponse } from "next";

interface login {
  id: number;
  name: string;
  email: string;
  rol:"client"
  password: string;
}

const users: login[] = [];




export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === "POST") {
    const newUser: login = {
      id: Math.floor(Math.random() * 1000),
      name: req.body.name,
      email: req.body.email,
      rol:  req.body.rol,
      password:req.body.rol,
    };
    users.push(newUser);
    res.status(201).json(newUser);

  } 
  }

