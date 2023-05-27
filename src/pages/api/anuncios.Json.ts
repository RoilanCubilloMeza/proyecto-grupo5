import { NextApiRequest, NextApiResponse } from "next";

interface Anuncio {
  id: number;
  descripcion: string;
  tittle: string;
  images:string
}

const anuncios: Anuncio[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(anuncios);
  } else if (req.method === "POST") {
    const newanuncio: Anuncio = {
      id: Math.floor(Math.random() * 1000),
      descripcion: req.body.descripcion,
      tittle: req.body.tittle,
      images:req.body.images
    };
    anuncios.push(newanuncio);
    res.status(201).json(newanuncio);
  } else if (req.method === "PUT") {
    const anuncioId = Number(req.query.id);
    const updatedAnuncio: Anuncio = {
      id: anuncioId,
      descripcion: req.body.descripcion,
      tittle: req.body.tittle,
      images:req.body.images
    };
    const index = anuncios.findIndex((anuncio) => anuncio.id === anuncioId);
    if (index !== -1) {
      anuncios[index] = updatedAnuncio;
      res.status(200).json(updatedAnuncio);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } else if (req.method === "DELETE") {
    const AnuncioId = Number(req.query.id);
    const index = anuncios.findIndex((anuncio) => anuncio.id === AnuncioId);
    if (index !== -1) {
      anuncios.splice(index, 1);
      res.status(200).json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
}
