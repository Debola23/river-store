import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./Slidebox.module.css";
import { NavLink } from 'react-router-dom';



export const Slidebox = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1524,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      const products = [
        {
          id: 1,
          image: "/Images/flashsale1.png",
          name: "Nike Trainers",
          price: "$99.00",
          oldPrice: "$149.99",
        },
        {
          id: 2,
          image: "/Images/flashsale4.png",
          name: "Purple Valarian Dress",
          price: "$4,700.00",
          oldPrice: "$5,000.00",
        },
        {
          id: 3,
          image: "/Images/flashsale7.png",
          name: "Union Varsity Jacket",
          price: "$150.99",
          oldPrice: "$180.00",
        },
        {
          id: 4,
          image: "/Images/flashsale10.png",
          name: "Black Leather Jacket",
          price: "$450.00",
        },
        {
          id: 5,
          image: "/Images/flashsale11.png",
          name: "Brown Leather Jacket",
          price: "$400.00",
          oldPrice: "$450.00",
        },
        {
            id: 6,
            image: "/Images/flashsale8.png",
            name: "Black Hoodie",
            price: "$18.26",
            oldPrice: "$27.00",
          },
          {
            id: 7,
            image: "/Images/flashsale2.png",
            name: "Air Jordan 1",
            price: "$250.00",
          },
          {
            id: 8,
            image: "/Images/flashsale5.png",
            name: "Blue Balcav Dress",
            price: "$7,200.00",
          },
          {
            id: 9,
            image: "/Images/flashsale9.png",
            name: "Denim Jacket",
            price: "$40.00",
          },
          {
            id: 10,
            image: "/Images/flashsale6.png",
            name: "Pirces Denim Jacket",
            price: "$24.30",
          },
          {
            id: 11,
            image: "/Images/flashsale3.png",
            name: "Air Force 1",
            price: "$150.00",
            oldPrice: "$27.00",
          },
          {
            id: 12,
            image: "/Images/flashsale12.png",
            name: "Red Leather Jacket",
            price: "$1,200.00",
            oldPrice: "$1,300.00",
          },
      ];
    
   
  return (
    <div className={Styles.slide}>
       <div className={Styles.productSlider}>
        <Slider {...settings}>
            {products.map((product) => (
            <div key={product.id} className={Styles.productCard}>
                <div className={Styles.cardImg}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={Styles.cardInfo}>
                <h3>{product.name}</h3>
                <div className={Styles.prices}>
                  <p className={Styles.mainPrice}>{product.price}</p>
                  {product.oldPrice && (
                  <p className={Styles.oldPrice}>{product.oldPrice}</p>
                  )}
                </div>
                </div>
                <button className={Styles.cart}>Add to Cart</button>
            </div>
            ))}
        </Slider>
        </div>
        <NavLink to="/latest" className="nav-link">
          <a className={Styles.vproduct} href="/products" data-discover="true">View All Products</a>
        </NavLink>
    </div>  
  )
}
