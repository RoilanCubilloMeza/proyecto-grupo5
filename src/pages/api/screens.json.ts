import { NextApiRequest, NextApiResponse } from "next";

interface Pantalla {
  id: number;
 companyName: string;
 link: string;
 router:string;
 price:string;
 departureTime:string;
 images: string;

}

const pantallas: Pantalla[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(pantallas);
  } else if (req.method === "POST") {
    const newpantallas: Pantalla = {
      id: Math.floor(Math.random() * 1000),
      router: req.body.router,
      price: req.body.price,
      departureTime:req.body.departureTime,
      companyName: req.body.companyName,
      link: req.body.link,
      images: req.body.images
    };
    pantallas.push(newpantallas);
    res.status(201).json(newpantallas);
  } else if (req.method === "PUT") {// TODO: improve the nested if else structure for clean code
    const pantallasId = Number(req.query.id);
    const updatedPantallas: Pantalla = {
      id: pantallasId,
      router: req.body.router,
      price: req.body.price,
      departureTime:req.body.departureTime,
      companyName: req.body.companyName,
      link: req.body.link,
      images: req.body.images
    };
    const index = pantallas.findIndex((pantallas) => pantallas.id === pantallasId);
    if (index !== -1) {
        pantallas[index] = updatedPantallas;
      res.status(200).json(updatedPantallas);
    } else { // TODO: improve the nested if else structure for clean code
      res.status(404).json({ message: "pantallas not found" });
    }
  } else if (req.method === "DELETE") {
    const pantallasId = Number(req.query.id);
    const index = pantallas.findIndex((pantallas) => pantallas.id === pantallasId);
    if (index !== -1) {
        pantallas.splice(index, 1);
      res.status(200).json({ message: "pantallas deleted" });
    } else {
      res.status(404).json({ message: "pantallas not found" });
    }
  }
}