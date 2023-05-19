import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Marquee from "@/components/marque";
import Carrusel from "@/components/CarruComercial";
import ScheduleCarousel from "@/components/CarruTiquetes";
import RegistrationForm from "@/components/Formulario";


const videos = [
  {
    id: "video1",
    url: "https://www.youtube.com/embed/632ujcxK25Q",
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
    <div className="bg-secondary">
      <div className={styles.container} >
        <div className="bg-black p-3 ">
          <Marquee text="¡Comerciales!" />
          <Marquee text="!Empresas Asociadas!" />
        </div>
        <div>
          <Carrusel videos={videos} />
        </div>
        <div>
          <div className="mb-10 m-0 ">
            <Marquee text="¡Proximos Viajes!" />
            < ScheduleCarousel />
          </div>
          <div className="p-2">
            <form>
              <RegistrationForm />
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
