import { usuarioProvider } from "@/database/providers/usuarios/usuarios.provider";
import { notAllowedResponse } from "@/root/api/response/notAllowedResponse";
import { NextApiRequest, NextApiResponse } from "next";

const getAll = async (res: NextApiResponse) => {
  try {
    const entities = await usuarioProvider.getAll();
    res.status(200).json(entities);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name } = req.body;
    const {email}= req.body
    const {rol}= req.body
    const entityCreated = await usuarioProvider.create(name,email,rol);
    res.status(200).json(entityCreated);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}




const handlers: any = {};
handlers["GET"] = (_req: NextApiRequest, res: NextApiResponse) => getAll(res);
handlers["POST"] = (req: NextApiRequest, res: NextApiResponse) => create(req, res);



export default function usuariosController(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const handler = handlers[method as keyof typeof handlers];
  if (handler) {
    return handler(req, res);
  } else {
    return notAllowedResponse(res, method!);
  }
}
