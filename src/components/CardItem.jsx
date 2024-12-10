import coffeeBeansImage from "../assets/img/coffee_beansN3-black.svg";
import skeImage from "../assets/img/aromistico.jpg";
import Footer from "./Footer";
import Header from "./Header";
import HeroOC from "./Hero-OC";

const CardItem = ({ item, onBackToList }) => {
  if (!item) return null;

  const { image, name, country, description, price } = item;

  return (
    <>
      <div className="heroOC-wrapper">
        <Header />
        <HeroOC />
      </div>
      <div className="container mar-t-b ">
        <ul className="d-flex aic">
          <li className="container-line">
            {image ? (
              <img className="card-img" src={image} alt={name} />
            ) : (
              <img className="card-img" src={skeImage} alt={name} />
            )}
          </li>
          <li>
            <h2 className="title-h2">{name}</h2>
            <div className="line-container_df-jc ">
              <img
                className="title-img"
                src={coffeeBeansImage}
                alt="Coffee Beans"
              />
            </div>
            <p className="mt-20">
              <span style={{ fontWeight: "bold" }}>Country:</span> {country}
            </p>
            <p className="mt-20">
              <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
              {description || "No description available"}
            </p>
            <p className="mt-20">
              <span style={{ fontWeight: "bold" }}>Price: </span>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                {price} $
              </span>
            </p>
            <button onClick={onBackToList} className="back-btn">
              Back to List
            </button>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default CardItem;
