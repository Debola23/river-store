import Style from "./Hero.module.css"
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';


export const Hero = () => {
 

  return (
   <section className={Style.hero}>
     <Carousel>
      <Carousel.Item>
        <img src="./Images/barner2.jpg" alt="" className={Style.heropic}/>
        <Carousel.Caption>
          <h1>Up To 30% Off</h1>
          <p>
              <h5>
                On Jackets and flat shoes, valid until 17th of this month.
              </h5>
          </p>
          <NavLink to="/latest" className="nav-link">
            <button className={Style.cta}>
              <span className={Style.hover}> Shop now </span>
                  <svg id={Style.arrow} xmlns="http://www.w3.org/2000/svg"width="30" height="10"viewBox="0 0 46 16">
                    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"  transform="translate(30)"></path>
                  </svg>
            </button>
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./Images/barner3.jpg" alt="" className={Style.heropic}/>
        <Carousel.Caption>
          <h1>Get Quality Blanks</h1>
          <p>
              <h5>
                High quality blanks available in any color.
              </h5>
          </p>
          <NavLink to="/latest" className="nav-link">
            <button className={Style.cta}>
              <span className={Style.hover}> Shop now </span>
                  <svg id={Style.arrow} xmlns="http://www.w3.org/2000/svg"width="30" height="10"viewBox="0 0 46 16">
                    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"  transform="translate(30)"></path>
                  </svg>
            </button>
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./Images/barner1.jpg" alt="" className={Style.heropic}/>
        <Carousel.Caption>
        <h1>Up To 30% Off</h1>
          <p>
              <h5>
                On chains, rings and braclets valid until 19th of next month.
              </h5>
          </p>
          <NavLink to="/latest" className="nav-link">
            <button className={Style.cta}>
              <span className={Style.hover}> Shop now </span>
                  <svg id={Style.arrow} xmlns="http://www.w3.org/2000/svg"width="30" height="10"viewBox="0 0 46 16">
                    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"  transform="translate(30)"></path>
                  </svg>
              </button>
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </section>
  )
}
