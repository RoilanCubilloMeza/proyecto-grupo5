import { NextApiRequest, NextApiResponse } from "next";

interface Ruta{
  id: number;
  router: string;
  price: string;
  departureTime:string
}

const rutas: Ruta[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(rutas);
  } else if (req.method === "POST") {
    const newrutes: Ruta = {
      id: Math.floor(Math.random() * 1000),
      router: req.body.router,
      price: req.body.price,
      departureTime:req.body.departureTime
    };
    rutas.push(newrutes);
    res.status(201).json(newrutes);
  } else if (req.method === "PUT") {
    const rutesId = Number(req.query.id);
    const updatedRutes: Ruta = {
      id: rutesId,
      router: req.body.router,
      price: req.body.price,
      departureTime:req.body.departureTime
    };
    const index = rutas.findIndex((rutas) => rutas.id === rutesId);
    if (index !== -1) {
        rutas[index] = updatedRutes;
      res.status(200).json(updatedRutes);
    } else {
      res.status(404).json({ message: "Rutes not found" });
    }
  } else if (req.method === "DELETE") {
    const rutesId = Number(req.query.id);
    const index = rutas.findIndex((rutas) => rutas.id === rutesId);
    if (index !== -1) {
        rutas.splice(index, 1);
      res.status(200).json({ message: "Rutes deleted" });
    } else {
      res.status(404).json({ message: "Rutes not found" });
    }
  }
}