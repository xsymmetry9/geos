import "./header.scss";
import RenderLogo from "../Image/RenderLogo";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faSearch, faPrint } from "@fortawesome/free-solid-svg-icons";

const Header = (props) =>{

    const {navControl}  = props;
    return(
        <header>
            <div className='header-container'>
                <div className="header-image">
                    <a href="https://online.geos.com.tw/zh-TW/home/home" target="_blank">
                        <RenderLogo style="imgLogo"/>
                    </a>
                </div>
                <ul className='navigation-container'>
                    <li onClick={navControl} className='navigation-lists' id="input">
                        <a className="nav-icon-container"><FontAwesomeIcon icon={faPencil}></FontAwesomeIcon><span className="hidden"></span></a>
                        </li>
                    <li onClick={navControl} className='navigation-lists' id="preview">
                        <a className="nav-icon-container">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon><span className="hidden">preview</span></a></li>
                    <li onClick={navControl} className="navigation-lists" id="print">
                        <a className="nav-icon-container"><FontAwesomeIcon icon={faPrint}></FontAwesomeIcon><span className="hidden">print</span></a></li>
                </ul>
            </div>
  
        </header>
    )
}

export default Header;