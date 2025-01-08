import { Footer } from "../Footer/Footer"
import { Barner } from "../Headers/Barner/Barner"
import { Navv } from "../Headers/OtherHeader/Navv"
import Style from "./Cat.module.css"
import { Category } from "./Category"

export const Watchcat = () => {

  const productData = [
    {
      id: 1,
      image: "/Images/chain1.jpg", 
      name: "Silver Chain",
      price: "$700.00",
    },
    {
      id: 2,
      image: "/Images/ring1.jpeg", 
      name: "Gold Aztec Ring ",
      price: "$1,400.00",
    },
    {
      id: 3,
      image: "/Images/watch3.jpg", 
      name: "Silver Watch",
      price: "$599.99",
    },
    {
      id: 4,
      image: "/Images/ring2.jpeg", 
      name: "Gold Ring",
      price: "$2,700.00",
    },
    {
      id: 5,
      image: "/Images/watch4.png", 
      name: "Silver Arabic Watch",
      price: "$7,000.00",
    },
    {
      id: 6,
      image: "/Images/bracelet1.jpg", 
      name: "Silver Bracelet",
      price: "$22.17",
    },
    {
      id: 7,
      image: "/Images/watch5.png", 
      name: "Gold Watch",
      price: "$22,000.00",
    },
    {
      id: 8,
      image: "/Images/bracelet2.png", 
      name: "Black Bracelet",
      price: "$12.00.00",
    },
  ];

  
  return (
    <>
      <Barner/>
      <Navv/>
      <div className={Style.watchcat}>
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
