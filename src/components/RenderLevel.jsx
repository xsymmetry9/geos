import levelData from "../resource/levels.json";
import React from 'react';

const RenderLevel = (props) =>{
    const {titleName, value} = props;
    const levels = levelData["English"][titleName].levels;
    const roundedValue = Math.round(value);

    return(
        <>
            <div className="level-information-display-box">
                <p className="level-text">{levels[roundedValue-1].description}</p>
            </div>
        </>
    )
}


export default RenderLevel;