import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Row from "../components/Row";
import requests from "./requests";

export default function Home() {
  return (
    <div className="home_page">
      <h1 className="nice__">NETFLIX CLONE</h1>

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}
