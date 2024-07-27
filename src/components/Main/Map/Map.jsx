import "./Map.css";

export default function Maps() {
  return (
    <>
      <div className="container__img">
          <img src="../../static/background/waves.png" alt="waves" className="waves"/>
          <img
            src="../../static/background/fish2.png"
            alt="fish"
            className="fish"
          />
        {/* <img src="../../static/background/fish3.png" alt="fish3" /> */}
      </div>
      <div className="map__container">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "45px",
            marginBottom: "50px",
          }}
        >
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Санкт‑Петербург
          </a>
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_dostoyevskogo_16/Z0kYdQNpQUUBQFtjfXVzdH9rZA==/?ll=30.349807%2C59.925381&utm_medium=mapframe&utm_source=maps&z=17.11"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Улица Достоевского, 16 — Яндекс Карты
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=30.349807%2C59.925381&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQwMjg1MBJU0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0YPQu9C40YbQsCDQlNC-0YHRgtC-0LXQstGB0LrQvtCz0L4sIDE2IgoNZ8zyQRWXs29C&z=17.11"
            className="map"
            frameBorder="1"
            allowFullScreen={true}
            style={{ position: "relative" }}
          ></iframe>
        </div>
        <button className="intro__button">Оформить заявку</button>
      </div>
    </>
  );
}
