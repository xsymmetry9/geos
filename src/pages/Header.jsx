import "../styles/header.scss";
import logo from "../images/logo.svg";
import React from 'react';

const Header = ({navControl}) =>{

    return(
        <header>
            <div className='header-container'>
                <div className="header-image">
                    <a href="https://online.geos.com.tw/zh-TW/home/home" target="_blank"><img className="imgLogo" src={logo} alt="logo"/></a>
                </div>
                <ul className='navigation-container'>
                    <li onClick={navControl} className='navigation-lists' id="input"><a>Input</a></li>
                    <li onClick={navControl} className='navigation-lists' id="preview"><a>Preview</a></li>
                </ul>
            </div>
  
        </header>
    )
}

export default Header;