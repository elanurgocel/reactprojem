import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
    <Navbar/>
      <Hero
        cname="hero-mid"
        title="Hakkımızda"
        url="/"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;
