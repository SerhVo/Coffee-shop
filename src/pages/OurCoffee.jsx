import Header from "../components/Header";
import HeroOC from "../components/Hero-OC";
import ListItems from "../components/ListItems";
import SectionBeans from "../components/SectionBeans";
import Footer from "../components/Footer";
import SearchPanel from "../components/SearhPanel";
import coffeeData from "../assets/coffeeDB";
import FilterPanel from "../components/FilterPanel";
import CardItem from "../components/CardItem"; // Импорт нового компонента
import { Component } from "react";

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

    // Если элемент выбран, показываем его детали
    if (selectedItem) {
      // Если выбран элемент, показываем его подробную информацию
      return <CardItem item={selectedItem} onBackToList={this.onBackToList} />;
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
        <div className="container alignment mb-60">
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
