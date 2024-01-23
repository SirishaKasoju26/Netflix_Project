import React from 'react';
import { Link } from 'react-router-dom';
import fb from "../../Assets/facebook (1).png";
import instagram from "../../Assets/instagram (1).png";
import twitter from "../../Assets/twitter (2).png";

import "../../Components/Footer/Footer.css"
const Footer = () => {
    const social = [fb, instagram, twitter]
    return (
        <footer>
            <h1>NETFLIX</h1>

            <div className="links">
                <h3>Useful links</h3>
                <div className="link">
                    <Link to="/">Home</Link>
                    <Link to="/training">Training</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>

            <div className="social">
                {social.map((item) => {
                    return <img src={item} alt='' />
                })}
            </div>
        </footer>
    );
};

export default Footer