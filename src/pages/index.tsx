import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Marquee from "@/components/marque";
import Carrusel from "@/components/CarruComercial";
import Link from "next/link";
import CrearUsuarioForm from "@/components/CrearUsuarioForm";
import UsuarioCreado from "@/components/UsuariosCreado";

const videos = [
  {
    id: "video1",
    url: "https://youtu.be/0XfzADCQV9s",
  },
  {
    id: "video2",
    url: "https://youtu.be/0XfzADCQV9s",
  },
  {
    id: "video3",
    url: "https://youtu.be/byAN1CNeh84",
  },
];



const Home: NextPage = () => {




  return (
    <>
    <div >
      <div className={styles.container} >
        <div className="bg-black p-3 ">
          <Marquee text="¡Comerciales!" />
          <Marquee text="!Empresas Asociadas!" />
        </div>
        <div>
          <Carrusel videos={videos} />
        </div>
 
      </div>
      <div>
        <CrearUsuarioForm/>
        <UsuarioCreado/>
      </div>
    </div>

    </>
  );
};

export default Home;


