import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurBest from "../components/OurBest";

const Home = () => {
  return (
    <>
      <div className="hero-wrapper">
        <Header />
        <Hero />
      </div>
          <AboutUs />
          <OurBest/>
          <Footer/>
    </>
  );
};
export default Home;
