import React from 'react';
import levelData from "../resource/levels.json";

const PlotCards = (data) =>{
    const {levels} = data;

    const arr = ["vocabulary", "grammar", "pronunciation", "listening", "conversation"];

    const Card = ({item, index}) => {
        const score = levels[index].final;
        
        return (<div className= "level-card">
                    <div className="level-card-title">
                        <strong><p className="level-card-title">{item.toUpperCase()}</p></strong>
                    </div>
                    <div className="level-card-description">
                        <p>{levelData["English"][item].levels[score].description}</p>

                    </div>
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