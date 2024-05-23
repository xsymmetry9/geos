import "../styles/header.scss";
import React from 'react';

const Header = ({navControl}) =>{

    return(
        <header>
            <div className='header-container'>
                <div className="header-title">GEOS</div>
                <ul className='navigation-container'>
                    <li onClick={navControl} className='navigation-lists' id="input"><a>Input</a></li>
                    <li onClick={navControl} className='navigation-lists' id="preview"><a>Preview</a></li>
                    <li onClick={navControl} className='navigation-lists' id="print"><a>Print</a></li>
                </ul>
            </div>
  
        </header>
    )
}

export default Header;