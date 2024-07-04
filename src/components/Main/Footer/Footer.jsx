import "./Footer.css";

export default function Footer() {
  return (
    <>
      <hr />
      <div className="footer">
        <div className="left__footer">
          <p>+7999 999 99-99</p>
          <p>С 10:00 до 21:00</p>
          <p>ИП Иванов Иван Иванович</p>
        </div>
        <div className="center__footer">
          <img src="../../static/logo.png" alt="logo" />
        </div>
        <div className="right__footer">
          <a href="#">Каталог</a>
          <a href="#">Форель</a>
          <a href="#">Кета</a>
          <a href="#">Сельдь</a>
          <a href="#">Скумбрия</a>
        </div>
      </div>
      <hr />
      <div className="footer__bottom">
        <p>Создано username | Дизайн username</p>
      </div>
    </>
  );
}
