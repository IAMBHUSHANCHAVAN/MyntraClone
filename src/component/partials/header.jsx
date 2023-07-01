import React from 'react'
import myntraimg from "./myntra-Logo-PNG-768x768.jpg"
import "./style.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">

                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <img
                                src={myntraimg}
                                height="70"
                                width='70'
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Men</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Women</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Kids</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Home & Living</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Beauty</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Studio</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className='nav-item  mx-3'>
                                <div>
                                <i class="far fa-user"></i>
                                <p>profile</p>
                                </div>
                            </li>
                            <li className='nav-item  mx-3'>
                                <div>
                                <i class="far fa-heart"></i>
                                <p>wishlist</p>
                                </div>
                            </li>
                            <li className='nav-item mx-3'>
                                <div>
                                <i class="fas fa-bag-shopping"></i>
                                <p>Bag</p>
                                </div>
                            </li>
                        </ul>
                    </div>





                </div>

            </nav>

        </div>
    )
}

export default Header
