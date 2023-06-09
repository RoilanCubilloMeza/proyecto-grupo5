import { anuncioProvider } from "@/database/providers/anuncios/anuncios.provider";
import { notAllowedResponse } from "@/root/api/response/notAllowedResponse";
import { NextApiRequest, NextApiResponse } from "next";

const getAllAnuncio = async (res: NextApiResponse) => {
  try {
    const entities = await anuncioProvider.getAllAnuncio();
    res.status(200).json(entities);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const createAnuncio = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {tittle} = req.body;
    const {url} = req.body;
    const entityCreated = await anuncioProvider.createAnuncio(tittle,url);
    res.status(200).json(entityCreated);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const handlers: any = {}; //TODO: changes all any 
handlers["GET"] = (_req: NextApiRequest, res: NextApiResponse) => getAllAnuncio(res);
handlers["POST"] = (req: NextApiRequest, res: NextApiResponse) => createAnuncio(req, res);

export default function AnunciosController(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const handler = handlers[method as keyof typeof handlers];
  if (handler) {
    return handler(req, res);
  } else {// TODO: remove innecesary else structure for clean code
    return notAllowedResponse(res, method!);
  }
}
