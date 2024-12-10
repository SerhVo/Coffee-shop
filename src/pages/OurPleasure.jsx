import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListItems from "../components/ListItems";
import coffeeData from "../assets/coffeeDB";
import CardItem from "../components/CardItem"; 
import AboutGoods from "../components/AboutGoods";
import HeroAG from "../components/HeroAG";

class OurPleasure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: coffeeData, // Исходные данные
      term: "", // Поисковая строка
      filter: "all", // Фильтр
      selectedItem: null, // Выбранный элемент
    };
  }

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
      return <CardItem item={selectedItem} onBackToList={this.onBackToList} />;
    }

    // Если элемент не выбран, показываем общий список
    const visibleData = this.filterPost(this.searchPost(data, term), filter);

    return (
      <>
        <div className="heroAG-wrapper">
          <Header />
          <HeroAG />
        </div>
        <AboutGoods />
        <ListItems data={visibleData} onItemSelect={this.onItemSelect} />
        <Footer />
      </>
    );
  }
}

export default OurPleasure;
