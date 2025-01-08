import { useState } from "react";
import { Barner } from '../Headers/Barner/Barner'
import { Navv } from '../Headers/OtherHeader/Navv'
import { Footer } from "../Footer/Footer"
import  Style from './Latest.module.css'

export const Latest = () => {

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
      image: "/Images/product3.jpeg", 
      name: "Black Jorts ",
      price: "$29.99",
    },
    {
      id: 3,
      image: "/Images/product2.jpeg", 
      name: "Black Denim Jacket",
      price: "$59.99",
    },
    {
      id: 4,
      image: "/Images/product5.jpeg", 
      name: "Ferari Ferrari Jacket",
      price: "$49.99",
    },
    {
      id: 5,
      image: "/Images/product4.jpeg", 
      name: "Malboro Leather Jacke",
      price: "$49.99",
    },
    {
      id: 6,
      image: "/Images/product6.jpg", 
      name: "Green Trench Coat",
      price: "$79.99",
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
    {
      id: 9,
      image: "/Images/product9.webp", 
      name: "Green Sweater",
      price: "$31.99",
    },
    {
      id: 10,
      image: "/Images/product10.webp", 
      name: "Black Varsity Jacket",
      price: "$27.99",
    },
    {
      id: 11,
      image: "/Images/product11.jpg", 
      name: "Black Jacket",
      price: "$21.26",
    },
    {
      id: 12,
      image: "/Images/product12.jpg", 
      name: "Bleached Tshirt ",
      price: "$17.99",
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
      <div className={Style.Latest}>
           <section className={Style.product}>
                {productData.map((product) => (
                  <div key={product.id} className={Style.productCard}>
                    <img src={product.image} alt={product.name}className={Style.productImage}/>
                    <div className={Style.priceTag}>{product.price}</div>
                    <div
                      className={Style.cartIcon}
                      onClick={() => handleCartClick(product.id)}
                    >
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
      <Footer/>
    </>
   
  )
}
