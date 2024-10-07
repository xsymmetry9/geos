import React, {useState} from 'react';
import levelData from "../resource/levels.json";
import getLevelData from "../resource/levels.json";
import RenderLevel from "./RenderLevel.jsx";


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
                {/* <div className='level-description-container'>
                        <RenderLevel {...props.levels[tab]}/>
                </div> */}
            </>
        )
    }

    const DropdownMenu = ({category, studentLevel}) =>{
        const [level, setLevel] = useState("DEFAULT");

        const levels = (getLevelData['English'][category]);
        
        const getLevelInformation = () => studentLevel == 1 || studentLevel < 1.5 ? "1" : 
            studentLevel >= 1.5 && studentLevel < 2 ? "1.5" :
            studentLevel >= 2 && studentLevel < 2.5 ? "2" : 
            studentLevel >= 2.5 && studentLevel < 3 ? "2.5" :
            studentLevel >= 3 && studentLevel < 3.5 ? "3" :
            studentLevel >= 3.5 && studentLevel < 4 ? "3.5" :
            studentLevel >= 4 && studentLevel < 4.5 ? "4" :
            studentLevel >= 4.5 && studentLevel < 5 ? "4.5" :
            studentLevel >= 5 && studentLevel < 5.5 ? "5" :
            studentLevel >= 5.5 && studentLevel < 6 ? "5.5" :
            studentLevel >= 6 && studentLevel < 6.5 ? "6" :
            studentLevel >= 6.5 && studentLevel < 7 ? "6.5" :
            studentLevel >= 7 && studentLevel < 7.5 ? "7" :
            studentLevel >= 7.5 && studentLevel < 8 ? "7.5" :
            studentLevel >= 8 && studentLevel < 8.5 ? "8" :
            studentLevel >= 8.5 && studentLevel < 9 ? "8.5" :
            studentLevel >= 9 && studentLevel < 9.5 ? "9" :
            studentLevel >= 9.5 && studentLevel < 10 ? "9.5" :
            studentLevel == 10 ? "10" :
            studentLevel > 10 ? "10+" : "error";

        return(
            <>
                <div className="level-information-display-box">
                    <p className="input-title py-3">Final Level: {studentLevel}</p>
                    <p>{levels[getLevelInformation()]}</p>
                </div>
            </>
        )

    }
    const Plot = (item) =>{
        const arr = ["initial", "final", "target"];
        
        return(
            <>
                <h2 className='level-title text-center'>{item.name}</h2>
    
                <div className='input-student-level-information'>
                    <div id="input-level-information">
                        <p className="input-title p-3 bold">Select student's level:</p>
                        <div className="input-student-level-container">
                            <p className="input-title">Initial: <span>{item['initial']}</span></p>
                            <label htmlFor="initial">
                                <input 
                                    id={`${item.name}-initial`}
                                    name={`${item.name}-initial`}
                                    type="range" 
                                    min={1} 
                                    max={10} 
                                    step={.1} 
                                    value={item['initial']}
                                    onChange = {handle}/>
                            </label>

                        </div>
                        <div className="input-student-level-container">
                            <p className="input-title">Final: <span>{item['final']}</span></p>
                            <label htmlFor="final">

                            <input 
                                id={`${item.name}-final`}
                                name={`${item.name}-final`}
                                type="range" 
                                min={1} 
                                max={10} 
                                step={.1} 
                                value={item['final']}
                                onChange = {handle}/>                    
                            </label>

                        </div>
                        <div className="input-student-level-container">
                            <p className="input-title">Target: <span>{item['target']}</span></p>
                            <label htmlFor="target">
                                <input 
                                    id={`${item.name}-target`}
                                    name={`${item.name}-target`}
                                    type="range" 
                                    min={1} 
                                    max={10} 
                                    step={.1} 
                                    value={item['target']}
                                    onChange = {handle}/>                        
                                </label>
                        </div>
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
                        <button className= {`levels ${tab !== 0 ? "active" : "disabled"}`} onClick={prevTab} disabled={tab===0}>Prev</button>
                        <button className={`levels ${tab === levels.length-1 ? "disabled" : "active"}`} disabled={tab===props.levels.length -1} onClick={nextTab}>Next</button>
                    </div>
                </div>
            </>
        )
    }

export default StudentLevel;