import React from 'react';
import "./input.scss";

const RenderInput = (props) =>{
    const {title, id, type, styleName, value, handler, placeholder} = props;

    return(
        <>
              {type === "text" || type === "number" ? (
                <input
                    id= {id}
                    name= {title}
                    type= {type}
                    className= {styleName}
                    value = {value}
                    onChange={handler}
                    placeholder= {placeholder}>
                </input> ) : type === "range" ?(
                    <input
                        name = {title}
                        type={type}
                        className={styleName}
                        value={value}
                        onChange={handler}
                        min= "0"
                        max= "10">
                    </input>
                ) : <p>Error</p>}
        </>
    )
}

export default RenderInput;