import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";


function Service() {
  return (
    <>
      <Navbar/>
      <Hero
        cname="hero-mid"
        title="Hizmetlerimiz"
        url="/"
      />
      <Trip/>
     <Footer/>
    </>
  );
}

export default Service;
