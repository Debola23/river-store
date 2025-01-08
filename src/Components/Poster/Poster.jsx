import Style from "./Poster.module.css"
import { Link } from "react-router-dom"
export const Poster = () => {
  return (
    <>
     <div>
        <section id={Style.news} className="w-100">
            <div className={Style.row} id={Style.newsbox}>
                <div className={Style.newsBox} id={Style.myText}>
                    <img src="/Images/posterpic1.jpg" className={Style.imgFluid} id={Style.newsImg} alt=""/>
                    <div className={Style.details} id={Style.myText}>
                    <h2 id={Style.change}>Amazing Sneaker Collection</h2>
                    <Link to="/shoecat" className={Style.shoe} >
                        <button className={Style.cta}>
                            <span className={Style.hoverUnderlineAnimation}> Shop now </span>
                        </button>
                    </Link>
                    </div>
                </div>
                <div className={Style.newsBox} id={Style.myText}>
                    <img src="/Images/posterpic2.jpg" className={Style.imgFluid} id={Style.newsImg} alt=""/>
                    <div className={Style.details} id={Style.myText}>
                    <h2 id={Style.change}>Amazing T-shirt Collection</h2>
                     <Link to="/tshirtcat" className={Style.tshirt} >
                        <button className={Style.cta}>
                            <span className={Style.hoverUnderlineAnimation}> Shop now </span>
                        </button>
                    </Link>
                    </div>
                </div>
                <div className={Style.newsBox} id={Style.myText}>
                    <img src="/Images/posterpic3.jpg" className={Style.imgFluid} id={Style.newsImg} alt=""/>
                    <div className={Style.details} id={Style.myText}>
                    <h2 id={Style.change}>Amazing Watch Collection</h2>
                    <Link to="/hatcat" className={Style.cap} >
                        <button className={Style.cta}>
                            <span className={Style.hoverUnderlineAnimation}> Shop now </span>
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
   
  )
}
