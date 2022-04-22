import React from 'react';
import "../styles/globals.css";
import LoadingScreen from "../components/PreLoader/LoadingScreen";
import { useState, useEffect } from "react";
import Header from '../components/Header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <LoadingScreen loading={loading} />
      <Component {...pageProps} />


    </>

  );
}

export default MyApp;
