import coffeeBeansImage from "../../assets/img/coffee_beans.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <nav className="header__nav">
            <a href="./index.html">
              <img src={coffeeBeansImage} alt="Логотип" />
            </a>
            <ul className="header__menu">
              <li>
                <a className="link" href="#traditions-section">
                  Coffee house
                </a>
              </li>
              <li>
                <a className="link" href="#chefs-section">
                  Our coffee
                </a>
              </li>
              <li>
                <a className="link" href="#formats-section">
                  For your pleasure
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
