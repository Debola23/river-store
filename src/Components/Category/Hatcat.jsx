import { Footer } from "../Footer/Footer"
import { Barner } from "../Headers/Barner/Barner"
import { Navv } from "../Headers/OtherHeader/Navv"
import Style from "./Cat.module.css"
import { Category } from "./Category"

export const Hatcat = () => {


  const productData = [
    {
      id: 1,
      image: "/Images/trucker4.jpeg", 
      name: "Silver Chain",
      price: "$700.00",
    },
    {
      id: 2,
      image: "/Images/hat5.jpg",  
      name: "Gold Aztec Ring ",
      price: "$1,400.00",
    },
    {
      id: 3,
      image: "/Images/hat2.jpeg", 
      name: "Silver Watch",
      price: "$599.99",
    },
    {
      id: 4,
      image: "/Images/hat4.jpg", 
      name: "Gold Ring",
      price: "$2,700.00",
    },
    {
      id: 5,
      image: "/Images/hat1.jpeg", 
      name: "Silver Arabic Watch",
      price: "$7,000.00",
    },
  ];


  return (
      <>
        <Barner/>
        <Navv/>
        <div className={Style.hatcat}>
            <section className={Style.product}>
              {productData.map((product) => (
                <div key={product.id} className={Style.productCard}>
                  <img src={product.image} alt={product.name} className={Style.productImage}/>
                  <div className={Style.priceTag}>{product.price}</div>
                  <div className={Style.cartIcon} >
                    <img className={Style.cart} src="/Images/cart.png" alt="Cart Icon" />
                  </div>
                  <div className={Style.productInfo}>
                    <h4>{product.name}</h4>
                  </div>
                </div>
              ))}
            </section>
        </div>
        <Category/>
        <div className={Style.footer}>
        <Footer/>
        </div>
      </>
  )
}
