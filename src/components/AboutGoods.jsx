import cup_coffee from "../assets/img/coffee_cup.jpg";
import coffeeBeansImage from "../assets/img/coffee_beansN3-black.svg";

const AboutGoods = () => {
  return (
    <>
      <div className="container d-flex mar-t-b">
        <div className="section-img">
          <img className="beans-img" src={cup_coffee} alt="" />
        </div>

        <div className="beans-text alignment">
          <h2 className="title-h2">About our goods</h2>
          <div className="line-container-black">
            <img
              className="title-img alignment"
              src={coffeeBeansImage}
              alt="Coffee Beans"
            />
          </div>
          <p className="text-center">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
          </p>
        </div>
      </div>
      <div className="cont-line">
        <hr className="width: 240px; border: 1px solid black;" />
      </div>
    </>
  );
};
export default AboutGoods;
