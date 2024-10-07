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
                        <a><FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>input</a>
                        </li>
                    <li onClick={navControl} className='navigation-lists' id="preview">
                        <a>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>preview</a></li>
                    <li onClick={navControl} className="navigation-lists" id="print">
                        <a><FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>print</a></li>
                </ul>
            </div>
  
        </header>
    )
}

export default Header;