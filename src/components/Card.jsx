import React from "react";
import skeletonImage from "../assets/img/paket-dlya.jpeg";

const Card = ({ name, image, price, country }) => {
  return (
    <ul className="card_item conteiner-card">
      <li className="card_item-img">
        {image ? (
          <img className="item-img" src={image} alt={name} />
        ) : (
          <img className="item-img" src={skeletonImage} alt={name} />
        )}
      </li>
      <li>
        <p className="text">{name}</p>
      </li>
      <li>
        <p className="card-text-contr">{country}</p>
      </li>
      <li>
        <p className="card-text">{`${price} $`}</p>
      </li>
    </ul>
  );
};

export default Card;
