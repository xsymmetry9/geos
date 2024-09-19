import React, {useState} from 'react';
import levelData from "../resource/levels.json";
import RenderLevel from "../components/RenderLevel.jsx";


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

    const DropdownMenu = (props) =>{
        

    }
    const Plot = (item) =>{
        const arr = ["initial", "final", "target"];
        
        return(
            <>
                <h2 className='level-title text-center'>{item.name}</h2>
        
                <div className='input-student-level-information'>
                    <div id="input-level-information">
                        <div className="input-student-level-container">
                            <p>Initial: <span>{item['initial']}</span></p>
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
                            <p>Final: <span>{item['final']}</span></p>
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
                            <p>Target: <span>{item['target']}</span></p>
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
                        <h1>Level Information</h1>
                        <select 
                            name="level-information"
                            id="level-information"
                            value={item['final']}
                            >Select their final level
                                {studentLevel[item.name].levels.map((levelItem, index) => {
                                return (<option key={index} value={levelItem.id}>{levelItem.name}</option>)
                            })}
                            
                        </select>
                            <RenderLevel levelType={'final'} value={item['final']} titleName ={item.name}/>

                    </div>
                          
                    {/* {arr.map((categoryItem, index) => {
                            return(
                                <div key={`${item.name}-${categoryItem}-${index}`} className="form-card">
                                    <label className="wrapper-level-input" htmlFor = {`${item.name}-${categoryItem}`}>
                                        <div className="wrapper-two-columns input-title">
                                            <span className='text-capitalized'>{categoryItem}</span>
                                            <span className='text-capitalized'>Level: {item[categoryItem]}</span>
                                        </div>
                                        <div className='wrapper-level-input'>
                                            <input type='number' min="1" max="10" step={.1}></input>
                                            <Input title = {`${item.name}-${categoryItem}`} type="range" value ={item[categoryItem]} handler={handle}/>
                                        </div>
                                    </label>
                                    <RenderLevel levelType={categoryItem} value={item[categoryItem]} titleName ={item.name}/>
                                </div>
                            )
                        })} */}
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