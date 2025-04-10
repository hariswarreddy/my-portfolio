import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import ExpTimeline from "./components/ExpTimeline";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    }
    window.addEventListener("resize", resizeRatio);
    return () => {
      window.removeEventListener("resize", resizeRatio);
    }
  }, [ratio]);
  return ratio<2?(
    <>
      <Analytics/>
      <Toaster />
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Experience />
      <ExpTimeline />
      <Work />
      <Timeline />
      <Services />
      <Contact />
      <Footer />
    </>
  ):(<em id="customMessage">Please Change your window ratio to View!</em>)
}

export default App;
