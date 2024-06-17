import levelData from "../resource/levels.json";
import React from 'react';

const RenderLevel = (props) =>{
    console.log(levelData["English"].conversation[props.final]);
    console.log("level", props.final)

    return(
        <>
            <p className="level-text">Hello</p>
        </>
    )
}

export default RenderLevel;