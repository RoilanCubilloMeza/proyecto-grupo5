import { notAllowedResponse } from "@/root/api/response/notAllowedResponse";
import { NextApiRequest, NextApiResponse } from "next";

import { loginProvider } from "@/database/providers/usuarios/login.provider";



const register= async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {name} = req.body;
    const {email}= req.body
    const {rol}= req.body
    const {password}= req.body;
    const entityCreated = await loginProvider.register(name,email,rol, password);
    res.status(200).json(entityCreated);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}


const handlers: any = {};
handlers["POST"] = (req: NextApiRequest, res: NextApiResponse) => register(req, res);


export default function LoginController(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const handler = handlers[method as keyof typeof handlers];
  if (handler) {
    return handler(req, res);
  } else {
    return notAllowedResponse(res, method!);
  }
}
