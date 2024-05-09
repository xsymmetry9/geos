import React from 'react';
import levelData from "../resource/levels.json";

const PlotCards = (data) =>{
    const {levels} = data;
    console.log(levels);
    const arr = ["vocabulary", "grammar", "pronunciation", "listening", "conversation"];

    const Card = ({item}) => {
        return (<div className= "level-card">
                    <h2 className="level-card-title">{item}</h2>
                    <p className="level-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptas saepe sunt repellendus explicabo quaerat consequuntur voluptatibus nostrum et ipsam ipsa dolorem quasi tempore voluptatem ex facere dolore, ducimus dolor?</p>
                    
                </div>)
    }

    console.log(levelData["English"]["Vocabulary"]);

    return(
        <>
            <div className='cards-container'>
                {arr.map((item, index) => <Card item = {item} key = {index} />)}


            </div>
        
        </>
    )
}

export default PlotCards;