import "./Advantages.css";

export default function Advantages() {
  return (
    <div className="advantages">
      <div className="advantages__inside">
        <p>Преимущества работы с нами</p>
        <div className="advantages__img">
          <div>
            <img src="../../static/delivery.png" alt="delivery" />
          </div>
          <div>
            <img src="../../static/range.png" alt="range" />
          </div>
          <div>
            <img src="../../static/price.png" alt="price" />
          </div>
          <div>
            <img src="../../static/availability.png" alt="availability" />
          </div>
          <div>
            <img src="../../static/bonus.png" alt="bonus" />
          </div>
          <div>
            <img src="../../static/individual.png" alt="individual" />
          </div>
        </div>
      </div>
    </div>
  );
}
