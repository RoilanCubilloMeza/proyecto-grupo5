import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Video from "<nuevo>/components/Video";
import Carrusel from "<nuevo>/components/Carrusel";

const videos = [
  {
    id: 'video1',
    url: 'https://www.youtube.com/watch?v=tAqaq0tUrIM',
  },
  {
    id: 'video2',
    url: 'https://www.youtube.com/watch?v=ZnZqB5Z75zI',
  },
  {
    id: 'video3',
    url: 'https://www.youtube.com/watch?v=TrieMFaFSgU',
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Comerciales</h1>
      <div>
        <div>
        </div>
        <Carrusel videos={videos} />

      </div>
    </div>
  );
};

export default Home;
