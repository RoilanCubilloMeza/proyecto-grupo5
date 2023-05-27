import styles from "../styles/Home.module.css";
import Marquee from "@/components/marque";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import CarruselAnuncios from "@/pages/AnunciosComercial";

 



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


