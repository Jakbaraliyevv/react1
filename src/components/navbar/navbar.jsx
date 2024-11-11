import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="main">
      <header className="header">
        <div className="container">
          <div className="header__left">
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} className="locationn" />
              <p>
                Ваш город:
                <select>
                  <option value="Константинополь">Константинополь</option>
                </select>
              </p>
            </div>

            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} className="locationn" />
              <p>
                <span>Наш офис:</span> Москва, ул. Новокосимская д.7
              </p>
            </div>
          </div>
          <div className="header__right">
            <ul className="ul">
              <li className="li">
                <a href="#">Статьи</a>
              </li>
              <li className="li">
                <a href="#">Оплата</a>
              </li>
              <li className="li">
                <a href="#">Гарантия</a>
              </li>
              <li className="li">
                <a href="#">Дилерам</a>
              </li>
              <li className="li">
                <a href="#">Вакансии</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="header__midle">
        <div className="container">
          <div className="middle_left">
            <div className="kv">
              <div className="kv__sm"></div>
              <div className="kv__sm"></div>
              <div className="kv__sm"></div>
            </div>
            <p>Логотип вашего магазина </p>
          </div>
          <div className="middle_center">
            <div className="center__top">
              <span className="center_span">
                <FontAwesomeIcon icon={faCheck} className="check" />
                <p>Лучшие цены</p>
              </span>
              <span className="center_span">
                <FontAwesomeIcon icon={faCheck} className="check" />
                <p>Бесплатная доставка</p>
              </span>
              <span className="center_span">
                <FontAwesomeIcon icon={faCheck} className="check" />
                <p>Гарантия от 3х лет</p>
              </span>
              <span className="center_span">
                <FontAwesomeIcon icon={faCheck} className="check" />
                <p>Более 1 000 товаров</p>
              </span>
            </div>

            <div className="center__bottom">
              <form className="form">
                <input type="search" placeholder="Поиск по каталогу..." />
                <button type="submit">Найти</button>
              </form>
            </div>
          </div>

          <div className="middle_right">
            <div className="right_top">
              <span className="oclock">
                <FontAwesomeIcon icon={faClock} className="messeg" />
                <p>Ежедневно с 9:00 до 21:00</p>
              </span>
              <a href="tel:8 (800) 800-00-00">
                <span>8 (800)</span> 800-00-00{" "}
              </a>
              <a href="tel:8 (495) 700-00-00">
                <span>8 (495)</span> 700-00-00
              </a>
            </div>
            <div className="right_bottom">
              <span className="masage">
                <FontAwesomeIcon icon={faEnvelope} className="messeg" />
                <p>youremail@mailbox.ru</p>
              </span>
              <button className="right_btn">Заказать звонок</button>
            </div>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <div className="container">
          <span className="bottom_span">
            <FontAwesomeIcon icon={faBars} className="bars" />
            <p>Каталог товаров</p>
          </span>

          <div className="link">
            <a href="#">О компании</a>
          </div>
          <div className="link">
            <a href="#">Отзывы</a>
          </div>
          <div className="link">
            <a href="#">Наши работы</a>
          </div>
          <div className="link">
            <a href="#"> Доставка</a>
          </div>
          <div className="link">
            <a href="#"> Контакты</a>
          </div>
        </div>
      </div>

      <div className="showcase">
        <div className="container">
          <div className="showcase__img"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
