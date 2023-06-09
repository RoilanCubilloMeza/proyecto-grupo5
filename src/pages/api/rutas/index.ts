import { rutaProvider } from "@/database/providers/rutas/rutas.provider";
import { notAllowedResponse } from "@/root/api/response/notAllowedResponse";
import { NextApiRequest, NextApiResponse } from "next";

const getAll = async (res: NextApiResponse) => {
  try {
    const entities = await  rutaProvider.getAll();
    res.status(200).json(entities);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { router } = req.body;
    const { price } = req.body;
    const { departureTime } = req.body;
    const entityCreated = await rutaProvider.create(router,price,departureTime);
    res.status(200).json(entityCreated);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const handlers: any = {}; //TODO: changes all any 
handlers["GET"] = (_req: NextApiRequest, res: NextApiResponse) => getAll(res);
handlers["POST"] = (req: NextApiRequest, res: NextApiResponse) => create(req, res);

export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const handler = handlers[method as keyof typeof handlers](req, res);
  return handler! || notAllowedResponse(res, method!);
}