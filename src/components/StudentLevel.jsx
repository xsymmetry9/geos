import React, {useState} from 'react';
import RenderLevel from "../components/RenderLevel.jsx";

const StudentLevel = ({props, handle}) =>{
    const [tab, setTab] = useState(0);

    const nextTab = () =>{
        setTab(tab => tab + 1);
    }
    const prevTab = () =>{
        setTab(tab => tab - 1);
    }
    const PlotBarInput = (props) =>{
        return(
            <>
                <Plot {...props.levels[tab]}/>
                <div className='level-description-container'>
                        <RenderLevel {...props.levels[tab]}/>
                </div>
            </>
        )
    }
    const Plot = (item) =>{
        const arr = ["initial", "final", "target"];
        return(
            <>
                <h2 className='level-title text-center'>{item.name}</h2>
                <div className='range-input-container'>
                    {arr.map((categoryItem, index) => {
                        return(
                            <>
                             <label key={`${item.name}-${categoryItem}-${index}`} htmlFor = {`${item.name}-${categoryItem}`}>{categoryItem}
                                <input
                                    type='range'
                                    name= {`${item.name}-${categoryItem}`}
                                    value= {item[categoryItem]}
                                    min ="0"
                                    max="10"
                                    onChange={handle}>
                                </input>
                            </label>
                            </>
                        )
                    })}
                </div>
            </>
        )
    }
        return(
            <>
                <div className="content-container"> 
                    <h2 className='form-title'>Student Level</h2>
                    <PlotBarInput {...props}/>
                
                    <div className='form-nav-buttons-group'>
                        <button className= {`levels ${tab !== 0 ? "active" : "disabled"}`} onClick={prevTab} disabled={tab===0}>Prev</button>
                        <button className={`levels ${tab === props.levels.length-1 ? "disabled" : "active"}`} disabled={tab===props.levels.length -1} onClick={nextTab}>Next</button>
                    </div>
                </div>
            </>
        )

    }


export default StudentLevel;