const Card = ({ name, image, price }) => {
  return (
    <div className="card_item">
      <img className="item-img" src={image} alt={name}></img>
      <p>{name}</p>
      <p className="card-text">{`${price} $`}</p>
    </div>
  );
};
export default Card;
