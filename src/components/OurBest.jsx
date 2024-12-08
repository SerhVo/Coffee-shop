
import Card from "./Card.jsx";
import coffeeData from "../assets/coffeeDB.js";

const OurBest = () => {
  if (!Array.isArray(coffeeData)) {
    return <p>Error loading data</p>;
  }

  // Используем slice, чтобы отобразить только первые 3 элемента
  const limitedCoffeeData = coffeeData.slice(0, 3);

  return (
    <section>
      <div className="container section-background">
        <h2 className="title-h2 pt-80">Our best</h2>
        <ul className="card-container ">
          {limitedCoffeeData.map((item) => {
            const { id, ...itemProps } = item;
            return (
              <li key={id}>
                <Card {...itemProps} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OurBest;
