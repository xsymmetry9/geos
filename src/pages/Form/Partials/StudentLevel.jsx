import React, {useEffect, useState} from 'react';
import levelData from "../../../resource/levels.json";
import RenderLevel from "../../../components/RenderLevel";
import Button from '../../../components/Button/Button';

const StudentLevel = ({props, handle}) =>{
    const studentLevel = levelData["English"];    

    const [tab, setTab] = useState(0);
    const {levels}  = props;

    const nextTab = () =>{
        setTab(tab => tab + 1);
    }
    const prevTab = () =>{
        setTab(tab => tab - 1);
    }
    const PlotBarInput = (props) =>{
        return(
            <>
                <Plot {...props[tab]}/>
            </>
        )
    }
    const InputRange = ({item, levelName}) =>{
        return(
            <label htmlFor={levelName} >
                <div className="input-student-level-container">
                    <div className="title-input-container">
                        <p className="text-capitalized">{levelName}: {item[levelName]}</p>
                    </div>
                    <div className="input-container">
                        <input 
                            id={`${item.name}-${levelName}`}
                            name={`${item.name}-${levelName}`}
                            type="range" 
                            min={1} 
                            max={10} 
                            step={.5} 
                            value={item[levelName]}
                            onChange = {handle}/>
                    </div>                          
                </div>
            </label>
        )
    }

    const Plot = (item) =>{
        const arr = ["initial", "final", "target"];
        
        return(
            <>
                <h2 className='level-title text-center'>{item.name}</h2>

                <div className='input-student-level-information'>
                    <div id="input-level-information">
                        <h2 className="input-title p-3 bold">Select student's level</h2>
                        {arr.map((category) => { return(
                            <InputRange item = {item} levelName ={category} />)
                        })}
                    </div>
                    <div id="render-level-information">
                        <h2 className="level-information-title">Level Information</h2>
                        <div className="input-wrapper">
                            {/* Work on the dropdown box */}
                        </div>
                        <div className="block">
                            <div className="level-information-display-box">
                                <p className='input-title py-3'>Final Level: {item['final']}</p>
                                <RenderLevel category = {item.name} studentLevel = {item['final']}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
        return(
            <>
                <div className="content-container"> 
                    <h2 className='form-title'>Student Level</h2>
                    <PlotBarInput {...levels}/>
                
                    <div className='form-nav-buttons-group'>
                        {tab !== 0 && <Button style= "btn-levels" handle={prevTab} name={"Prev"} />}
                        {tab !== levels.length - 1 && <Button style= "btn-levels" handle={nextTab} name={"Next"} />}
                        {tab == levels.length -1 && <p className="font-red">Go to the next page</p>}
                    </div>
                </div>
            </>
        )
    }

export default StudentLevel;