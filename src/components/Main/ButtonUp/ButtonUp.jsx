import { useEffect } from "react";
import "./ButtonUp.css";

///window.pageYOffset < 6500
export default function ButtonUp() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        document.querySelector(".btnUp__container").style.display = "block";
      } else {
        document.querySelector(".btnUp__container").style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    document.querySelector(".btnUp").onclick = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.querySelector(".btnUp__container").style.display = "none";
    };

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="btnUp__container">
      <img src="../../static/btnUp.png" alt="btnUp" className="btnUp" />
    </div>
  );
}
