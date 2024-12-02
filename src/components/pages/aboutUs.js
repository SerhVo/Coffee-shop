import AboutUs from "../aboutUs/AboutUs";
import Footer from "../footer/Footer";
import Header from "../header/header";
import Hero from "../hero/hero";
import OurBest from "../ourBeast/OurBest";

const AboutUsPage = () => {
  return (
    <>
      <div className="hero-wrapper">
        <Header />
        <Hero />
      </div>

      <AboutUs />
      <OurBest />
      <Footer />
    </>
  );
};
export default AboutUsPage;
