import "../styles/header.scss";
import React from 'react'

const Header = () =>{

    return(
        <header>
            <div className='header-container'>
                <div className="header-title">GEOS</div>
                <ul className='navigation-container'>
                    <li className='navigation-lists'><a>Input</a></li>
                    <li className='navigation-lists'><a>Preview</a></li>
                    <li className='navigation-lists'><a>Print</a></li>
                </ul>
            </div>
  
        </header>
    )
}

export default Header;