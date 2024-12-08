import coffeeData from "../assets/coffeeDB";

const FilterPanel = ({ onFilterSelect, activeFilter }) => {
  const allCountry = Array.from(
    new Set(coffeeData.map((item) => item.country))
  ).sort(); // Сортировка в алфавитном порядке

  return (
    <div className="filter-container df-ae">
      <p className="card-text-contr mr-10">Or filter</p>
      {allCountry.map((country) => (
        <button
          key={country}
          className={`filter-btn ${activeFilter === country ? "active" : ""}`}
          onClick={() => onFilterSelect(country)}
        >
          {country}
        </button>
      ))}
      <button
        className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
        onClick={() => onFilterSelect("all")}
      >
        All
      </button>
    </div>
  );
};

export default FilterPanel;
