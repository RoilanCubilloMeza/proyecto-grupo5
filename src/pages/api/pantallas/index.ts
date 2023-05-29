import { pantallasProvider } from "@/database/providers/pantallas/pantallas.provider";
import { notAllowedResponse } from "@/root/api/response/notAllowedResponse";
import { link } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

const getAll = async (res: NextApiResponse) => {
  try {
    const entities = await  pantallasProvider.getAll();
    res.status(200).json(entities);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { companyName } = req.body;
    const { link } = req.body;
    const { router } = req.body;
    const { price } = req.body;
    const { departureTime } = req.body;
    const { images } = req.body;
    const entityCreated = await pantallasProvider.create(companyName,link,router,price,departureTime,images);
    res.status(201).json(entityCreated);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const handlers: any = {};
handlers["GET"] = (_req: NextApiRequest, res: NextApiResponse) => getAll(res);
handlers["POST"] = (req: NextApiRequest, res: NextApiResponse) => create(req, res);

export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const handler = handlers[method as keyof typeof handlers](req, res);
  return handler! || notAllowedResponse(res, method!);
}