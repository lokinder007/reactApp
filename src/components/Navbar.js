import React, { useState } from 'react'
// import { NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';





const Navbar = () => {
 
  const [show, setShow] = useState(false)

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <div className="container">

            <Link className="logo " to="/">
              <h2>
                <span>R</span>eact
                <span>A</span>pp
              </h2>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>

              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div
              className={`collapse navbar-collapse ${show ? "show" : ""}`} >
              
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              

                      <li className="nav-item">
                        <NavLink
                          // activeClassName="menu_active"
                          className="nav-link"
                           to="/about"
                          // activeStyle={{ color: 'blue', fontWeight: 'bold' }}
                          >
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          // activeClassName="menu_active"
                          className="nav-link"
                          to="/contact"
                          // activeStyle={{ color: 'blue', fontWeight: 'bold' }}
                          >
                          Contact
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          // activeClassName="menu_active"
                          className="nav-link"
                          to="/projects"
                          // activeStyle={{ color: 'blue', fontWeight: 'bold' }}
                          >
                          Projects
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          // activeClassName="menu_active"
                          className="nav-link"
                          to="/profile"
                          // activeStyle={{ color: 'blue', fontWeight: 'bold' }}
                          >
                          Profile
                        </NavLink>
                      </li>
      

                <div className="social-links">
                  <Link to="/" title="Facebook"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#" title="Twitter"><i className="fab fa-twitter"></i></Link>
                  <Link to="#" title="Instagram"><i className="fab fa-instagram"></i></Link>
                  <Link to="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </ul>

             

            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar