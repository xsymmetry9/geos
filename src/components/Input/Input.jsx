import React from 'react';
import "./input.scss";

const Input = (props) =>{
    const {title, id, type, styleName, value, handler, placeholder} = props;

    return(
        <label>
            {title && <span className ="text-capitalized">{title}</span>}
            <input
                id= {id}
                name= {title}
                type= {type}
                className= {styleName}
                value = {value}
                onChange={handler}
                placeholder= {placeholder}>
            </input>
    </label>
    )
}

export default Input;