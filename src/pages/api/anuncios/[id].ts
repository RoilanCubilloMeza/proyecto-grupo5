import { anuncioProvider } from "@/database/providers/anuncios/anuncios.provider";
import { notAllowedResponse } from "@/root/api/response/notAllowedResponse";
import { NextApiRequest, NextApiResponse } from "next";

async function getByIdAnuncio(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id);
  try {
    const result = await anuncioProvider.getByIdAnuncio(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

async function updateByIdAnuncio(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id);

  const { descripcion } = req.body;
  try {
    await anuncioProvider.updateByIdAnuncio(id,descripcion);
    res.status(200).json({ id, message: "Information updated" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

async function deleteByIdAnuncio(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id);
  try {
    await anuncioProvider.deleteByIdAnuncio(id);
    res.status(200).json({ id, message: "Information deleted" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const handlers: any = {};
handlers["GET"] = (req: NextApiRequest, res: NextApiResponse) => getByIdAnuncio(req, res);
handlers["PUT"] = (req: NextApiRequest, res: NextApiResponse) => updateByIdAnuncio(req, res);
handlers["DELETE"] = (req: NextApiRequest, res: NextApiResponse) => deleteByIdAnuncio(req, res);

export default function authorsByIdController(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const handler = handlers[method as keyof typeof handlers](req, res);
  return handler! || notAllowedResponse(res, method!);
}
