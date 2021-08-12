import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
    </>
  );
}
