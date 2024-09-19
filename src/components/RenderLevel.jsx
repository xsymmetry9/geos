import levelData from "../resource/levels.json";
import React from 'react';

const RenderLevel = (props) =>{
    const {titleName, value} = props;
    const levels = levelData["English"][titleName].levels;
    const roundedValue = Math.round(value);

    return(
        <>
            <p className="level-text">{levels[roundedValue-1].description}</p>
        </>
    )
}


export default RenderLevel;