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
                        min= "1"
                        max= "10">
                    </input>
                ) : type === "textarea" ? (
                    <textarea
                        name={title}
                        value={value}            
                        onChange= {handler}
                        placeholder={placeholder}
                        rows={"6"}>
                </textarea>
                ) : <p>Error</p>}
        </>
    )
}

export default RenderInput;