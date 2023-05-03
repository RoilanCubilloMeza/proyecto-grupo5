import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import VideoPlayer from "<nuevo>/pages/Anuncios";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Comercial</h1>
      <div>
        <VideoPlayer videoId="https://youtu.be/SvhH287Xwcc" tittleId="hola" />
        <VideoPlayer videoId="https://youtu.be/SvhH287Xwcc" tittleId="comercial 2" />
      </div>
    </div>
  );
};

export default Home;
