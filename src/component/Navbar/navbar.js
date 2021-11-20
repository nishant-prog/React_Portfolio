import { render } from "@testing-library/react";
import React , { Component } from "react";
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {

    return (
        <nav className="nav">
            <div className="logo" >
             <img src="/assets/profile6.jpeg" />
            </div>
        <div className="navlinks">
            <ul>
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
            </ul>
        </div>
        </nav>
    )

}
export default Navbar;