import { debounce } from "lodash";
import { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    // Дебаунс для вызова родительского метода
    this.debouncedUpdateSearch = debounce((term) => {
      if (this.props.onUpdateSearch) {
        this.props.onUpdateSearch(term);
      }
    }, 300);
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term }); // Синхронно обновляем состояние
    this.debouncedUpdateSearch(term); // Вызываем метод с задержкой
  };

  componentWillUnmount() {
    this.debouncedUpdateSearch.cancel(); // Очищаем дебаунс
  }

  render() {
    return (
      <div className="df-ae">
        <p className="card-text-contr mr-10">Looking for</p>
        <input
          type="text"
          className="search-input"
          placeholder="Start typing here..."
          value={this.state.term} // Значение синхронно отображается в поле ввода
          onChange={this.onUpdateSearch} // Обновление текста
          aria-label="Search input"
        />
      </div>
    );
  }
}

export default SearchPanel;
