import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";



function Contact() {
  return (
    <>
      <Navbar/>
      <Hero
        cname="hero-mid"
        title="İletişim"
        url="/"
      />
      <ContactForm/> 
      <Footer/>
    </>
  );
}

export default Contact;
