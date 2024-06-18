import React from 'react';
 
import './Navbar.css';

const Navbar = () => {
    return (
<>


 <div className='Navbars'>


        <nav className="navbar navbar-expand-lg navbar-dark  ">
            <div className="container">
                <a className="navbar-brand" href="/"><span className='navbar-brand-title'>AAMER FEROZ</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="navbarOffcanvas" aria-labelledby="navbarOffcanvasLabel">
                    <div className="offcanvas-header">
                        <h4 className="offcanvas-title" id="navbarOffcanvasLabel">#AAMER FEROZ</h4>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                         
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/portfolio">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </div>
        </>

    );
}

export default Navbar;
