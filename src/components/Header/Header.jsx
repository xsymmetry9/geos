import "./header.scss";
import RenderLogo from "../Image/RenderLogo";
import React from 'react';

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
                    <li onClick={navControl} className='navigation-lists' id="input"><a>Input</a></li>
                    <li onClick={navControl} className='navigation-lists' id="preview"><a>Preview</a></li>
                    <li onClick={()=> console.log("print")} className="navigation-lists" id="print"><a>Print</a></li>
                </ul>
            </div>
  
        </header>
    )
}

export default Header;