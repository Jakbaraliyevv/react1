import "./footer.scss";

function Footer() {
  return (
    <div className="footer_top">
      <div className="container">
        <div className="footer_left">
          <h2>Хотите быть в курсе выгодных предложений, акций и новинок?</h2>
        </div>

        <div className="footer_right">
          <form className="form_f">
            <input type="text" placeholder="Имя" />
            <input type="email" placeholder="email" />
            <button>Подписаться</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
