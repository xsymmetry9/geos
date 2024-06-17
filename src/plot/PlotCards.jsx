import React from 'react';
import levelData from "../resource/levels.json";

const PlotCards = (data) =>{
    const {levels} = data;

    const arr = ["vocabulary", "grammar", "pronunciation", "listening", "conversation"];

    const Card = ({item, index}) => {
        const score = levels[index].final;
        
        return (<div className= "level-card">
                    <h2 className="level-card-title">{item}</h2>
                    <p className="level-card-description">{levelData["English"][item].Levels[score].description}</p>
                </div>)
    }

    return(
        <>
            <div className='cards-container'>
                {arr.map((item, index) => <Card item = {item} index = {index} key = {index} />)}
            </div>
        
        </>
    )
}

export default PlotCards;