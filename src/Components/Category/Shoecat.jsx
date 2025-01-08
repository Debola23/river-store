import { useState } from "react";
import { Footer } from "../Footer/Footer"
import { Barner } from "../Headers/Barner/Barner"
import { Navv } from "../Headers/OtherHeader/Navv"
import Style from "./Cat.module.css"
import { Category } from "./Category"

export const Shoecat = () => {

  const [showSizeBox, setShowSizeBox] = useState(null); 
  const [selectedSizes, setSelectedSizes] = useState({}); 

  const productData = [
    {
      id: 1,
      image: "/Images/shoe3.png", 
      name: "Red Heels",
      price: "$119.99",
    },
    {
      id: 2,
      image: "/Images/shoe4.png", 
      name: "Adidas Trainers ",
      price: "$29.99",
    },
    {
      id: 3,
      image: "/Images/flashsale2.png", 
      name: "Air Jordan 1",
      price: "$250.00",
    },
    {
      id: 4,
      image: "/Images/flashsale3.png", 
      name: "Air Force 1",
      price: "$150.00",
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
      <div className={Style.shoecat}>
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
                      <button onClick={() => handleSizeSelect(product.id, "39")}>39</button>
                      <button onClick={() => handleSizeSelect(product.id, "40")}>40</button>
                      <button onClick={() => handleSizeSelect(product.id, "41")}>41</button>
                      <button onClick={() => handleSizeSelect(product.id, "42")}>42</button>
                      <button onClick={() => handleSizeSelect(product.id, "43")}>43</button>
                      <button onClick={() => handleSizeSelect(product.id, "44")}>44</button>
                      <button onClick={() => handleSizeSelect(product.id, "45")}>45</button>
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
