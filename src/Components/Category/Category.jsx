import { Link } from "react-router-dom"
import Style from "./Category.module.css"

export const Category = () => {
  return (
    <>
         <section className={Style.title}>
            <div>
                <div className={Style.bar}>
                    <span className={Style.barName}>Categories</span>
                </div>
            </div>
        </section>
        <div className={Style.pInfo}>
            Browse Through Our Products 
        </div>
    <section className={Style.catBox}>
        <div className="container text-center mt-5 py-5">
          <div className={Style.categoryBox} id={Style.categoryBox}>
          <Link to="/shoecat" className={Style.shoe} >
            <div id={Style.catsize}> 
               <a href="" className={Style.categoryLink}>
                    <img src="./Images/shoeicon.png" className={Style.categoryImg} alt=""/>
                    <div className={Style.catText}>
                        Shoe
                    </div>
                </a> 
            </div>
            </Link>
             <Link to="/watchcat" className={Style.watch} >
             <div  id={Style.catsize}>
                <a href="" className={Style.categoryLink}>
                    <img src="./Images/watchicon.png" className={Style.categoryImg} alt=""/>
                    <div className={Style.catText}>
                        Watch
                    </div>
                </a>
            </div>
            </Link>
             <Link to="/tshirtcat" className={Style.tshirt} >
             <div  id={Style.catsize}> 
                <a href="" className={Style.categoryLink}>
                    <img src="./Images/tshirticon.png" className={Style.categoryImg} alt=""/>
                    <div className={Style.catText}>
                        T-shirt
                    </div>
                </a>
            </div>
            </Link>
            <Link to="/hatcat" className={Style.cap} >
            <div id={Style.catsize}> 
                <a href="" className={Style.categoryLink}>
                    <img src="./Images/haticon.png" className={Style.categoryImg} alt=""/>
                    <div className={Style.catText}>
                        Hats
                    </div>
                </a>
            </div>
            </Link>
            </div>
        </div>
    </section>
    </>
   

  )
}
