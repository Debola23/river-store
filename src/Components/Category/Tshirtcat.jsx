import { useState } from "react";
import { Footer } from "../Footer/Footer"
import { Barner } from "../Headers/Barner/Barner"
import { Navv } from "../Headers/OtherHeader/Navv"
import Style from "./Cat.module.css"
import { Category } from "./Category"

export const Tshirtcat = () => {

  const [showSizeBox, setShowSizeBox] = useState(null); 
  const [selectedSizes, setSelectedSizes] = useState({}); 

  const productData = [
    {
      id: 1,
      image: "/Images/product1.jpeg", 
      name: "Black Denim Jacket",
      price: "$119.99",
    },
    {
      id: 2,
      image: "/Images/product12.jpg", 
      name: "Bleached Tshirt ",
      price: "$17.99",
    },
    {
      id: 3,
      image: "/Images/tshirt2.png", 
      name: "Blue Shirt",
      price: "$12.99",
    },
    {
      id: 4,
      image: "/Images/tshirt3.png", 
      name: "Ross Tshirt",
      price: "$8.99",
    },
    {
      id: 5,
      image: "/Images/tshirt4.png", 
      name: "Red Polo",
      price: "$14.99",
    },
    {
      id: 6,
      image: "/Images/tshirt5.jpg", 
      name: "Black Twins Shirt",
      price: "$39.99",
    },
    {
      id: 7,
      image: "/Images/product7.jpeg", 
      name: "Black Jacket",
      price: "$15.99",
    },
    {
      id: 8,
      image: "/Images/product8.jpg", 
      name: "Blue Puffer Jacket",
      price: "$22.99",
    },
  ];

  const handleCartClick = (id) => {
    setShowSizeBox(showSizeBox === id ? null : id); 
  };

  const handleSizeSelect = (id, size) => {
    setSelectedSizes({ ...selectedSizes, [id]: size }); 
    setShowSizeBox(null); 
    console.log(`Size ${size} selected for product ${id}`);
  };

  return (
      <>
        <Barner/>
        <Navv/>
        <div className={Style.tshirtcat}>
          <section className={Style.product}>
                {productData.map((product) => (
                  <div key={product.id} className={Style.productCard}>
                    <img src={product.image} alt={product.name} className={Style.productImage}/>
                    <div className={Style.priceTag}>{product.price}</div>
                    <div className={Style.cartIcon} onClick={() => handleCartClick(product.id)}>
                      <img className={Style.cart} src="/Images/cart.png" alt="Cart Icon" />
                    </div>
                    {showSizeBox === product.id && (
                      <div className={Style.sizeBox}>
                        <p>Select Size:</p>
                        <button onClick={() => handleSizeSelect(product.id, "S")}>S</button>
                        <button onClick={() => handleSizeSelect(product.id, "M")}>M</button>
                        <button onClick={() => handleSizeSelect(product.id, "L")}>L</button>
                        <button onClick={() => handleSizeSelect(product.id, "XL")}>XL</button>
                      </div>
                    )}
                    <div className={Style.productInfo}>
                      <h4>{product.name}</h4>
                      {selectedSizes[product.id] && (
                        <p>Selected Size: {selectedSizes[product.id]}</p>
                      )}
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
