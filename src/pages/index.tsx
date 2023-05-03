import type { NextPage } from "next";
import buses from "./buses";
import styles from "../styles/Home.module.css";
import VideoPlayer from "./publicity";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Comercial</h1>
      <div>
        <VideoPlayer videoId="https://youtu.be/SvhH287Xwcc" tittleId="hola" />
        <VideoPlayer videoId="https://youtu.be/SvhH287Xwcc" tittleId="comercial 2" />
      </div>
      <div>
      
    </div>
    </div>
  );
};

export default Home;
