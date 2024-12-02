import coffeeBeansImage from "../../assets/img/coffee_beansN3-black.svg";
import coffeeBeans2 from "../../assets/img/coffee_beans2b.svg";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__container">
          <ul className="footer_menu">
            <li>
              <a className="link black" href="#traditions-section">
                <img src={coffeeBeans2} alt="Логотип" />
                Coffee house
              </a>
            </li>
            <li>
              <a className="link black" href="#chefs-section">
                Our coffee
              </a>
            </li>
            <li>
              <a className="link black" href="#formats-section">
                For your pleasure
              </a>
            </li>
          </ul>
          <div className="line-container-black">
            <img className="title-img" src={coffeeBeansImage} alt="" />
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
