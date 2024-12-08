import Header from "../components/Header";
import HeroOC from "../components/Hero-OC";
import ListItems from "../components/ListItems";
import SectionBeans from "../components/SectionBeans";
import Footer from "../components/Footer";
import SearchPanel from "../components/SearhPanel";
import coffeeData from "../assets/coffeeDB";
import { Component } from "react";
import FilterPanel from "../components/FilterPanel";
import coffeeBeansImage from "../assets/img/coffee_beansN3-black.svg";
import skeImage from "../assets/img/aromistico.jpg";

class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: coffeeData, // Исходные данные
      term: "", // Поисковая строка
      filter: "all", // Фильтр
      selectedItem: null, // Выбранный элемент
    };
  }

  // Обновление строки поиска
  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  // Поиск по строке
  searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
  };

  // Применение фильтра
  filterPost = (items, filter) => {
    if (filter === "all") return items;
    return items.filter((item) => item.country === filter);
  };

  // Установка фильтра
  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  // Выбор элемента
  onItemSelect = (item) => {
    this.setState({ selectedItem: item });
  };

  // Возврат к списку
  onBackToList = () => {
    this.setState({ selectedItem: null });
  };

  render() {
    const { data, term, filter, selectedItem } = this.state;

    if (selectedItem) {
      // Если выбран элемент, показываем его подробную информацию
      const { image, name, country, description, price } = selectedItem;
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
                <button onClick={this.onBackToList} className="back-btn">
                  Back to List
                </button>
              </li>
            </ul>
          </div>
          <Footer />
        </>
      );
    }

    // Если элемент не выбран, показываем общий список
    const visibleData = this.filterPost(this.searchPost(data, term), filter);

    return (
      <>
        <div className="heroOC-wrapper">
          <Header />
          <HeroOC />
        </div>
        <SectionBeans />
        <div className="container alignment">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <FilterPanel
            onFilterSelect={this.onFilterSelect}
            activeFilter={filter}
          />
        </div>
        <ListItems data={visibleData} onItemSelect={this.onItemSelect} />
        <Footer />
      </>
    );
  }
}

export default OurCoffee;
