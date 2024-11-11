import "./card2.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Card2() {
  return (
    <div className="card2__all">
      <div className="container">
        <div className="card2">
          <div className="start">
            <div className="star_left">
              <h3>Алексей С.А.</h3>
              <p>28 июня 2021</p>
            </div>
            <div className="start__right">
              <div className="right_star">
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
              </div>
              <p>Общая оценка: (4,8) </p>
            </div>
          </div>

          <p>
            «Цена хорошая, все соответствует ожиданиям. Подбирала перголу для
            своего участка. Также мне хотелось бы отметить вежливость работников
            компании, все подробно рассказали. Я считаю этот магазин отличным. И
            наверняка буду покупать снова или советовать коллегам.»
          </p>
          <a href="#">Читать полностью</a>
        </div>

        <div className="card2">
          <div className="start">
            <div className="star_left">
              <h3>Алексей С.А.</h3>
              <p>28 июня 2021</p>
            </div>
            <div className="start__right">
              <div className="right_star">
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
              </div>
              <p>Общая оценка: (4,8) </p>
            </div>
          </div>

          <p>
            «Цена хорошая, все соответствует ожиданиям. Подбирала перголу для
            своего участка. Также мне хотелось бы отметить вежливость работников
            компании, все подробно рассказали. Я считаю этот магазин отличным. И
            наверняка буду покупать снова или советовать коллегам.»
          </p>
          <a href="#">Читать полностью</a>
        </div>

        <div className="card2">
          <div className="start">
            <div className="star_left">
              <h3>Алексей С.А.</h3>
              <p>28 июня 2021</p>
            </div>
            <div className="start__right">
              <div className="right_star">
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
                <FontAwesomeIcon icon={faStar} className="star2" />
              </div>
              <p>Общая оценка: (4,8) </p>
            </div>
          </div>

          <p>
            «Цена хорошая, все соответствует ожиданиям. Подбирала перголу для
            своего участка. Также мне хотелось бы отметить вежливость работников
            компании, все подробно рассказали. Я считаю этот магазин отличным. И
            наверняка буду покупать снова или советовать коллегам.»
          </p>
          <a href="#">Читать полностью</a>
        </div>
      </div>
    </div>
  );
}

export default Card2;
