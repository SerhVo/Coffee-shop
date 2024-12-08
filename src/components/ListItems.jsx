import Card from "./Card.jsx";

const ListItems = ({ data, onItemSelect }) => {
  if (!Array.isArray(data)) {
    return <p>Error loading data</p>;
  }

  if (data.length === 0) {
    return <p>No items match your search.</p>;
  }

  return (
    <section>
      <div className="container">
        <ul className="card-container">
          {data.map((item) => (
            <li key={item.id} onClick={() => onItemSelect(item)}>
              <Card {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ListItems;
