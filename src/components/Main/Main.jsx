import ButtonUp from "./ButtonUp/ButtonUp.jsx";
import FeedBack from "./Feedback/FeedBack.jsx";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import Intro from "./Intro/Intro.jsx";
import Map from "./Map/Map.jsx";
import MiniCatalog from "./MiniCatalog/MiniCatalog.jsx";

export default function Main() {
    return (
        <div>
            <Header />
            <Intro />
            <MiniCatalog />
            <FeedBack />
            <Map />
            <ButtonUp />
            <Footer />
        </div>
    )
}