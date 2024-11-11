import "./catagory.scss";
import imgsvg from "../../assets/uy.png";
import imgsvg2 from "../../assets/uy2.jpg";
import imgsvg3 from "../../assets/uy3.jpg";
import imgsvg4 from "../../assets/uy4.jpg";
import imgsvg5 from "../../assets/uy5.jpg";
import imgsvg6 from "../../assets/uy6.jpg";
function Catagory() {
  return (
    <dir className="catogr">
      <div className="container">
        <h2> Категории</h2>
        <div className="all_card">
          <div className="catogory__left">
            <div className="left__text">
              <h3>Беседки</h3>
              <div className="left_txt">
                <div className="text1">
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                  <p>Подкатегория 3</p>
                </div>
                <div className="text1">
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                  <p>Подкатегория 3</p>
                </div>
              </div>
            </div>
            <div className="left__img">
              <img src={imgsvg} alt="" />
            </div>
          </div>
          <div className="catogory__middle">
            <div className="middle_card">
              <div className="middle_card_left">
                <h3>Бани</h3>
                <p>Подкатегория 1</p>
                <p>Подкатегория 2</p>
              </div>
              <div className="middle_card_right">
                <img src={imgsvg2} alt="" />
              </div>
            </div>
            <div className="middle_card">
              <div className="middle_card_left">
                <h3>Бани</h3>
                <p>Подкатегория 1</p>
                <p>Подкатегория 2</p>
              </div>
              <div className="middle_card_right">
                <img src={imgsvg3} alt="" />
              </div>
            </div>
            <div className="middle_card">
              <div className="middle_card_left">
                <h3>Бани</h3>
                <p>Подкатегория 1</p>
                <p>Подкатегория 2</p>
              </div>
              <div className="middle_card_right">
                <img src={imgsvg4} alt="" />
              </div>
            </div>
          </div>
          <div className="catogory__right">
            <div className="right__card">
              <div className="right_txt">
                <h4>Детские площадки</h4>
                <p>Подкатегория 1</p>
                <p>Подкатегория 2</p>
                <p>Подкатегория 3</p>
                <p>Подкатегория 4</p>
                <p>Подкатегория 5</p>
              </div>
              <div className="right_img">
                <img src={imgsvg5} alt="" />
              </div>
            </div>
            <div className="right__card">
              <div className="right_txt">
                <h4>Детские площадки</h4>
                <p>Подкатегория 1</p>
                <p>Подкатегория 2</p>
                <p>Подкатегория 3</p>
                <p>Подкатегория 4</p>
                <p>Подкатегория 5</p>
              </div>
              <div className="right_img">
                <img src={imgsvg6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </dir>
  );
}

export default Catagory;
