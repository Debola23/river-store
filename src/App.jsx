import 'bootstrap/dist/css/bootstrap.min.css';
import  Style from './App.module.css'
import { Barner } from './Components/Headers/Barner/Barner';
import { Navv } from './Components/Headers/OtherHeader/Navv';
import { Hero } from './Components/Hero/Hero';
import { Timer } from './Components/Sales/Timer';
import { Slidebox } from './Components/Carousel/Slidebox';
import { Category } from './Components/Category/Category';
import { Poster } from './Components/Poster/Poster';
import { Products } from './Components/Products/Products';
import { Faq } from './Components/Faq/Faq';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';


function App() {
  

  return (
   <>
     <div className={Style.App}>
      <Barner/>
      <Navv/>
      <Hero/>
      <Timer/>
      <Slidebox/>
      <Category/>
      <Poster/>
      <Products/>
      <Faq/>
      <div className={Style.part2Box}>
        <div className={Style.part2Box1}>
            <img src="/Images/fastdelivery.png" alt=""/>
            <h3 className={Style.hh3}>FAST DELIVERY</h3>
            <p className={Style.pp}>
              Free delivery for all orders over $140
            </p>
        </div>
        <div className={Style.part2Box1}>
            <img src="/Images/customercare.png" alt=""/>
            <h3 className={Style.hh3}>24/7 CUSTOMER SERVICE</h3>
            <p className={Style.pp}>
              Friendly 24/7 customer support
            </p>
        </div>
        <div className={Style.part2Box1}>
            <img src="/Images/refund.png" alt=""/>
            <h3 className={Style.hh3}>MONEY BACK GUARANTEE</h3>
            <p className={Style.pp}>
              We return money within 30 days if product was damaged before purchase
            </p>
        </div>
        </div>
        <Contact/>
        <Footer/>
     </div>
   </>
  )
}

export default App
