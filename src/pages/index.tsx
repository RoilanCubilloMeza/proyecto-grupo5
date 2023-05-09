import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Carrusel from "<nuevo>/components/CarruComercial";
import ScheduleCarousel from "<nuevo>/components/CarruTiquetes";
import Marquee from "<nuevo>/components/marque";
import RegistrationForm from "<nuevo>/components/Formulario";


const videos = [
  {
    id: "video1",
    url: "https://www.youtube.com/watch?v=tAqaq0tUrIM",
  },
  {
    id: "video2",
    url: "https://www.youtube.com/watch?v=ZnZqB5Z75zI",
  },
  {
    id: "video3",
    url: "https://www.youtube.com/watch?v=TrieMFaFSgU",
  },
];



const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Marquee text="¡Comerciales!" />
      <Marquee text="Empresas Asiciadad!" />
      <div>
        <div>
          <Carrusel videos={videos} />
        </div>
        <div>
          <div>
            <Marquee text="¡Proximos Viejes!" />
            <span></span>
            < ScheduleCarousel />
          </div>
          <div>
            <RegistrationForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
