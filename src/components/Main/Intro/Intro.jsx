import { useNavigate } from "react-router-dom";
import Advantages from "../Advantages/Advantages";
import "./Intro.css";

export default function Intro() {
  const navigate = useNavigate();
  return (
    <>
      <div className="intro">
        <div className="intro__container">
          <h1 className="intro__h1">
            Мы — профессионалы в сфере доставки рыбы и морепродуктов по всей
            России
          </h1>
          <p className="intro__p">
            Независимо от того, в каком регионе вы находитесь, мы обеспечим
            быструю и надежную доставку прямо к вашей двери. Наша компания
            специализируется на оптовых поставках. У нас широкий ассортимент
            высококачественной продукции.
          </p>
          <button className="intro__button" onClick={() => navigate("/catalog")}>Оформить заявку</button>
          <div>
            <p className="intro__p2">
              Мы начали свою деятельность в 2016 году. За это время наша
              компания набрала большую базу постоянных клиентов, с которыми у
              нас очень тесные и дружественные отношения. <br></br>
              <br></br>ООО “ДСТ” всегда находит компромисс в решении
              поставленных задач.
            </p>
          </div>
        </div>
        <Advantages />
      </div>
    </>
  );
}
