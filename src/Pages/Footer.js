//Create a footer for the website that contains my name and social media links using react router by linking this file to the index.js file

import React from 'react';
import linkedIn from '../imgs/logo-linkedin.svg';
import GitHub from '../imgs/logo-github.svg'; 

function Footer() {
    return (
        <div className= "footer">
            <div className= "footer__container">
                
                <a 
                    href= "https://www.linkedin.com/in/adam-yang-4us/"
                    className= "footer__socialLink"
                    target="_blank" rel="noopener noreferrer">
                    <img src = {linkedIn} alt = "LinkedIn Logo" className= "footer__logo"/>
                    <style>
                        {`
                            .footer__logo {
                                width: 30px;
                                height: 30px;
                            }
                        `}
                    </style>
                    <i className= "fab fa-linkedin"></i>
                </a>
                <a 
                    href= "https://github.com/ayang21" 
                    className= "footer__socialLink"
                    target="_blank" rel="noopener noreferrer">
                    <img src = {GitHub} alt = "GitHub Logo" className= "footer__logo"/>
                    <style>
                        {`
                            .footer__logo {
                                width: 30px;
                                height: 30px;
                            }
                        `}
                    </style>
                    <i className= "fab fa-github"></i>
                </a>
            </div>
            <div className= "footer__bottom">
                <p>© 2023 Adam Yang</p>
            </div>
        </div>
    )
}

export default Footer