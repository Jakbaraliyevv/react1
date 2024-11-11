import "./nogo.scss";
import photo from "../../assets/kocha.png";
import photo_obzor from "../../assets/uy.png";

function Nogo() {
  return (
    <div className="all">
      <div className="nogo">
        <div className="container">
          <div className="nogo_left">
            <h3>Немного о нас</h3>
            <p className="border"></p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
              integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
              nec senectus duis nibh. In faucibus adipiscing tellus enim,
              consequat integer accumsan. Ultrices ipsum nulla consequat
              malesuada enim mollis est.Lorem <br />
              <br /> ipsum dolor sit amet, consectetur adipiscing elit. At lacus
              integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
              nec senectus duis nibh. In faucibus adipiscing tellus enim,
              consequat integer accumsan. Ultrices ipsum nulla consequat
              malesuada <br />
              <br /> enim mollis est. Venenatis, sagittis, amet ornare donec
              purus suscipit nam sodales. Varius sit amet nullam dictumst massa
              consequat odio faucibus.
            </p>
          </div>
          <div className="nogo_right">
            <img src={photo} alt="" />
          </div>
        </div>
      </div>

      <div className="obzor">
        <div className="container">
          <h2>Статьи, новости и обзоры</h2>
          <div className="obzor_cards">
            <div className="obzor_card">
              <div className="obzor_img">
                <img src={photo_obzor} alt="" />
              </div>
              <div className="obzor_txt">
                <h3>Как выбрать беседку для дачи</h3>
                <p className="p112">19 сентября 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>

                <a href="#">Читать далее </a>
              </div>
            </div>

            <div className="obzor_card">
              <div className="obzor_img">
                <img src={photo_obzor} alt="" />
              </div>
              <div className="obzor_txt">
                <h3>Как выбрать беседку для дачи</h3>
                <p className="p112">19 сентября 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>

                <a href="#">Читать далее </a>
              </div>
            </div>

            <div className="obzor_card">
              <div className="obzor_img">
                <img src={photo_obzor} alt="" />
              </div>
              <div className="obzor_txt">
                <h3>Как выбрать беседку для дачи</h3>
                <p className="p112">19 сентября 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>

                <a href="#">Читать далее </a>
              </div>
            </div>

            <div className="obzor_card">
              <div className="obzor_img">
                <img src={photo_obzor} alt="" />
              </div>
              <div className="obzor_txt">
                <h3>Как выбрать беседку для дачи</h3>
                <p className="p112">19 сентября 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>

                <a href="#">Читать далее </a>
              </div>
            </div>

            <div className="obzor_card">
              <div className="obzor_img">
                <img src={photo_obzor} alt="" />
              </div>
              <div className="obzor_txt">
                <h3>Как выбрать беседку для дачи</h3>
                <p className="p112">19 сентября 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>

                <a href="#">Читать далее </a>
              </div>
            </div>

            <div className="obzor_card">
              <div className="obzor_img">
                <img src={photo_obzor} alt="" />
              </div>
              <div className="obzor_txt">
                <h3>Как выбрать беседку для дачи</h3>
                <p className="p112">19 сентября 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>

                <a href="#">Читать далее </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nogo;
