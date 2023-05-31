import { rutaProvider } from "@/database/providers/rutas/rutas.provider";
import { notAllowedResponse } from "@/root/api/response/notAllowedResponse";
import { NextApiRequest, NextApiResponse } from "next";

async function getById(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id);
  try {
    const result = await rutaProvider.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

async function updateById(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id);

  const { name } = req.body;
  try {
    await rutaProvider.updateById(id);
    res.status(200).json({ id, message: "Information updated" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

async function deleteById(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id);
  try {
    await rutaProvider.deleteById(id);
    res.status(200).json({ id, message: "Information deleted" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const handlers: any = {}; //TODO: changes all any 
handlers["GET"] = (req: NextApiRequest, res: NextApiResponse) => getById(req, res);
handlers["PUT"] = (req: NextApiRequest, res: NextApiResponse) => updateById(req, res);
handlers["DELETE"] = (req: NextApiRequest, res: NextApiResponse) => deleteById(req, res);

export default function authorsByIdController(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const handler = handlers[method as keyof typeof handlers](req, res);
  return handler! || notAllowedResponse(res, method!);
}
