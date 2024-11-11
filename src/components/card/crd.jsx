import "./card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import dom from "../../assets/image 35.png";

function Card() {
  return (
    <dir className="main_card">
      <div className="cards">
        <div className="container">
          <div className="card__top">
            <h2>Хиты продаж</h2>
            <div className="card__links">
              <a href="#">Беседки</a>
              <a href="#">Бани</a>
              <a href="#">Площадки</a>
              <a href="#">Дома</a>
              <a href="#">Дома</a>
              <a href="#">Бренды</a>
            </div>
          </div>
          <div className="card__bottom">
            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="container">
          <div className="card__top">
            <h2>Акционные модели</h2>
            <div className="card__links">
              <a href="#">Беседки</a>
              <a href="#">Бани</a>
              <a href="#">Площадки</a>
              <a href="#">Дома</a>
              <a href="#">Дома</a>
              <a href="#">Бренды</a>
            </div>
          </div>
          <div className="card__bottom">
            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <img src={dom} alt="" />
              </div>
              <div className="card__text">
                <div className="txt_p">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
                <h3>Название товара длинное в две строки наверное</h3>

                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faUserLarge} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                    className="icon"
                  />

                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="dashed">
                  <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                  <p>
                    Размеры: ..............................12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                <div className="btn">
                  <div className="btn__left">
                    <div className="nimadr__top">
                      <p>6 127 500 ₽</p>
                      <button>-25%</button>
                    </div>
                    <h3 className="h3">5 023 900 ₽</h3>
                  </div>
                  <div className="btn__right">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dir>
  );
}

export default Card;
