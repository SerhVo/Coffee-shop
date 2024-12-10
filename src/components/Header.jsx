import { Link } from "react-router-dom";
import coffeeBeansImage from "../assets/img/coffee_beans.svg";

const menuItems = [
  { to: "/", label: "Coffee house" },
  { to: "/ourCoffee", label: "Our coffee" },
  { to: "/ourPleasure", label: "For your pleasure" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <nav className="header__nav" aria-label="Main navigation">
            <Link to="/">
              <img
                src={coffeeBeansImage}
                alt="Coffee Beans Logo"
                loading="lazy"
              />
            </Link>
            <ul className="header__menu">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link className="link" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
