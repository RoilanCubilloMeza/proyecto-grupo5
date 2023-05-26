import styles from "../styles/Home.module.css";
import Marquee from "@/components/marque";
import Carrusel from "@/components/CarruComercial";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";

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




const Home= () => {

  
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


      </div>
      <div>
      </div>
    </div>

    </>
  );
};

export default Home;


