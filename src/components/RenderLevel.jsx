import levelData from "../resource/levels.json";
import React from 'react';

const RenderLevel = (props) =>{
    const {titleName, value} = props;
    const levels = levelData["English"][titleName].levels

    return(
        <>
            <p className="level-text">{levels[value-1].description}</p>
        </>
    )
}


export default RenderLevel;