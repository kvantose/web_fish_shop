import { useEffect } from "react"
import "./ButtonUp.css"

///window.pageYOffset < 6500
export default function ButtonUp() {

    useEffect(() => {
        window.onscroll = () => {
            if(window.pageYOffset > 500) {
                document.querySelector(".btnUp").style.display = "block"
            } else {
                document.querySelector(".btnUp").style.display = "none"
            }
        }

        document.querySelector(".btnUp").onclick = () => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),
            document.querySelector(".btnUp").style.display = "none"
        }

    }, [])
    

      return (
        <div className="btnUp">
          <img src="../../static/btnUp.png" alt="btnUp"/>
        </div>
      )
}