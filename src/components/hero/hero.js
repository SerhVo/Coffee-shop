import coffeeBeansImage from "../../assets/img/coffee_beansN3.svg";

const Hero = () => {
  return (
    <div className="section-title">
      <h1 className="title-h1">Everything You Love About Coffee</h1>
      <div className="line-container">
        <img className="title-img" src={coffeeBeansImage} alt="" />
      </div>

      <h2 className="title-h2">We makes every day full of energy and taste</h2>
      <h2 className="title-h2">Want to try our beans?</h2>
      <h2 className="title-h2">Coffee shop</h2>
      <button className="header__button" type="button">
        More
      </button>
    </div>
  );
};

export default Hero;
