import "./MiniCatalog.css"
import Carousel from "./Carousel/Carousel.jsx"

export default function MiniCatalog() {
    return (
        <div className="mini__catalog">
            <p className="mini__catalog__p">Часто покупаемые</p>
            <Carousel />
            <button className="intro__button">Перейти в каталог</button>
        </div>
    )
}