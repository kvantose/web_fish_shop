import "./Header.css";

export default function Home() {
  return (
    <>
      <header>
        <div className="header_container">
          <div className="location">
            <img src="../../static/location.png" alt="location" />
            <p>Санкт-Петербург</p>
          </div>
          <img src="../../static/logo.png" alt="logo" />
          <div className="tel_container">
            <img src="../../static/tel.png" alt="tel" className="tel_img" />
            <div className="tel">
              <p>С 9:00 до 20:00</p>
              <p>+7 (999) 999-99-99</p>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <ul>
        <li><a href="#">Сельдь</a></li>
        <li><a href="#">Скумбрия</a></li>
        <li><a href="#">Форель</a></li>
        <li><a href="#">Кета</a></li>
        <li><a href="#">Клыкач</a></li>
        <li><a href="#">Палтус</a></li>
        <li><a href="#">Горбуша</a></li>
        <li><a href="#">Кальмар</a></li>
        <li><a href="#">Треска</a></li>
        <li><a href="#">Зубатка</a></li>
        <li><a href="#">Окунь</a></li>
        <li><a href="#">Пикша</a></li>
        <li><a href="#">еще..</a></li>
      </ul>
    </>
  );
}
