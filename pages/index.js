import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import styles from '../styles/Home.module.css'
import Row from "../components/Row";
import requests from "./requests";

export default function Home() {
  return (
    <div className="app">
      <Header />

      <Hero fetchUrl={requests.fetchTrending} />
      <br />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Footer />
    </div>
  );
}
