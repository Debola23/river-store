import Style from "./Navv.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import  { useState, useEffect } from "react";


export const Navv = () => {

 
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Update the screen size when resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id); // Toggle dropdown open/close
  };


  
  return (
    <div className={Style.Navbar}>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
       <Container>
        <Navbar.Brand href="/" >
         <img className={Style.logo} src="/Images/waveslogo.png" alt="" id="home"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={Style.NavCollapse}>
          <Nav className="me-auto" id={Style.me}>
          <NavLink to="/latest" className="nav-link" style={{ paddingTop: "12px" }}>Latest</NavLink>
          <NavLink to="/watchcat" className="nav-link" style={{ paddingTop: "12px" }}>Accessories</NavLink>
              <div className={Style.dropDown}>
                <button  onClick={() => toggleDropdown(1)} className={Style.dropBtn}>
                  Men ▼
                </button>
                  {openDropdown === 1 && (
                    <ul className={`${Style.dropUl} ${openDropdown === 1 ? Style.open : ""}`}>
                       <li>
                        <NavLink to="/men/tshirt" onClick={() => setOpenDropdown(null)} style={({ isActive }) =>isActive? { fontWeight: "bold",  }: { color: "black", textDecoration: "none" }}>
                          T-Shirts
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/men/jacket" onClick={() => setOpenDropdown(null)}style={({ isActive }) =>isActive? { fontWeight: "bold",  }: { color: "black", textDecoration: "none" }}>
                          Jackets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/men/jean" onClick={() => setOpenDropdown(null)}style={({ isActive }) =>isActive? { fontWeight: "bold",  }: { color: "black", textDecoration: "none" }}>
                          Jeans
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/men/shoe" onClick={() => setOpenDropdown(null)}style={({ isActive }) =>isActive? { fontWeight: "bold",  }: { color: "black", textDecoration: "none" }}>
                          Shoes
                        </NavLink>
                      </li>
                    </ul> )}
                </div>
                <div className={Style.dropDown} style={{
                        marginTop: openDropdown === 1 && isMobile ? "220px" : "0",
                        transition: "margin-top 0.3s ease",
                      }}>
                  <button  onClick={() => toggleDropdown(2)} className={Style.dropBtn}>
                    Women ▼
                  </button>
                    {openDropdown === 2 && (
                      <ul className={`${Style.dropUl} ${openDropdown === 2 ? Style.open : ""}`}>
                        <li>
                          <NavLink to="/women/dress" onClick={() => setOpenDropdown(null)}style={({ isActive }) =>isActive? { fontWeight: "bold",  }: { color: "black", textDecoration: "none" }} >
                            Dresses
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/women/flatshoe" onClick={() => setOpenDropdown(null)}style={({ isActive }) =>isActive? { fontWeight: "bold",  }: { color: "black", textDecoration: "none" }} >
                            Flat Shoes
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/women/matchingset" onClick={() => setOpenDropdown(null)}style={({ isActive }) =>isActive? { fontWeight: "bold",  }: { color: "black", textDecoration: "none" }} >
                           Matching Sets
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/women/tshirt" onClick={() => setOpenDropdown(null)}style={({ isActive }) =>isActive? { fontWeight: "bold",  }: { color: "black", textDecoration: "none" }} >
                            T-shirts
                          </NavLink>
                        </li>
                      </ul> )}
                  </div>
            </Nav>
              <Nav id={Style.rightNav} style={{
                  marginTop: openDropdown === 2 && isMobile ? "220px" : "0", 
                  transition: "margin-top 0.4s ease",
                }}>
                <Nav.Link href="#search">
                  <div className={Style.searchContainer}>
                    <input type="text"className={Style.searchInput} placeholder="Search..."/>
                      <button className={Style.searchButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={Style.searchIcon}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                      </button>
                  </div> 
                </Nav.Link>
                <Nav.Link href="#cart">
                  <img className={Style.cart} src="/Images/cart.png" alt="" />
                </Nav.Link>
                <Nav.Link eventKey={2} href="#profile">
                  <div className={Style.profile1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="currentColor" className={Style.profile} viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </div>
  )
}
