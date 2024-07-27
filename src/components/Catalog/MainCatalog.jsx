import Header from "../Main/Header/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import FishCatalog from "./FishCatalog/FishCatalog";
import Footer from "../Main/Footer/Footer";
import ButtonUp from "../Main/ButtonUp/ButtonUp";
import "./MainCatalog.css";

const style = {
  fontSize: 16,
};

export default function MainCatalog() {
  return (
    <>
      <Header />
      <hr />
      <div className="img__wrapper">
        <img src="../../static/background/crab.png" alt="crab" className="img__crab" />
        <img src="../../static/background/buble.png" alt="bubble"  className="img__bubble"/>
        <img src="../../static/background/ship-wheel.png" alt="wheel"  className="img__wheel"/>
      </div>
      <Breadcrumbs
        aria-label="breadcrumb"
        className="breadcrumb"
        sx={{ margin: "50px 0 0 190px", "@media (max-width: 1200px)": { margin: "50px 0 0 90px" }, "@media (max-width: 800px)": { margin: "30px 0 0 40px" }}}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          className="link"
          style={style}
        >
          Главная
        </Link>
        <Link underline="hover" color="inherit" href="/catalog" style={style}>
          Каталог
        </Link>
      </Breadcrumbs>
      <FishCatalog />
      <ButtonUp />
      <Footer />
    </>
  );
}
