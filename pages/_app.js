import { useEffect } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true
    })
  }, [])
  return ( 
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
