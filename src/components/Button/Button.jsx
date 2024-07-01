import "./Button.scss";
import React from 'react';

const Button = (props) =>{
    return(
    <div>
        <button className = {props.style} onClick={props.handle}>{props.name}</button>
    </div>)
}

export default Button;