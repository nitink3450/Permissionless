import React from 'react'
import './Footer.css';
import logo from '../../Assets/logo.png';
const Footer = () => {
    return (
        <>
            <div className="mainF">
                <img className='footerLogo' src={logo} alt="" />
                <ul type="none" className="itemList">
                    <li>2022</li>
                    <li>Designed by Nitin K</li>
                    <li>J-Firm</li>
                    <li style={{border:"none"}}>All rights reserved</li>
                </ul>
                <div className="icons">
                    <i className="fa-brands fa-square-twitter"></i>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
            </div>

        </>
    )
}

export default Footer