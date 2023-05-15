import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Carrusel from "<nuevo>/components/CarruComercial";
import ScheduleCarousel from "<nuevo>/components/CarruTiquetes";
import Marquee from "<nuevo>/components/marque";
import RegistrationForm from "<nuevo>/components/Formulario";



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
      <Marquee text="¡Comerciales!"  />
      <Marquee  text="Empresas Asiciadad!" />
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
