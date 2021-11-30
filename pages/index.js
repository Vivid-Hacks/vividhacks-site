import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Index() {
  const { data: session } = useSession();

  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}
