import coffeeBeansImage from "../assets/img/coffee_beansN3-black.svg";
import coffeeBeans2 from "../assets/img/coffee_beans2b.svg";
import { Link } from "react-router-dom";

const menuItems = [
  { to: "/", label: "Coffee house", imgSrc: coffeeBeans2 },
  { to: "/ourCoffee", label: "Our coffee" },
  { to: "/ourPlesuare", label: "For your pleasure" },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__container">
          <nav aria-label="Footer navigation">
            <ul className="footer_menu">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link className="link black" to={item.to}>
                    {item.imgSrc && <img src={item.imgSrc} alt="Логотип" />}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="line-container-black">
            <img
              className="title-img"
              src={coffeeBeansImage}
              alt="Coffee Beans"
            />
          </div>
          <div className="footer__copyright">
            <p>2024 Coffee shop. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
