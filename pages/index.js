import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Row from "../components/Row";
import requests from "./requests";

export default function Home() {
  return (
    <div>
      <h1>NETFLIX CLONE</h1>

      <Row title="Netflix Originals" fetchUrl={requests} />
      <Row title="Trending Now" fetchUrl={requests} />
    </div>
  );
}
