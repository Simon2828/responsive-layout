import React, { Component } from 'react';
import '../Footer.css';
import warranty from '../warranty.svg'

const Footer = function() {
    return (
        <div className="footer flex-container">
            <div>
                <p><a>Contact us</a></p>
                <p><a>Where to buy</a></p>
                <p className="copyright">&copy;Copyright 2011. <span>Privacy Policy</span></p>
            </div>
            <div className="flex-container_column">
                <p>Warranty</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eos</p>
            </div>
            <div className="flex-center">
                <img src={warranty} className="warranty" alt="2 year warranty" height='140px' width='280px'/>
            </div>
        </div>
    );
}

export default Footer;
