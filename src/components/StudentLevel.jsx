import React, {useState} from 'react';
import levelData from "../resource/levels.json";
import RenderLevel from "../components/RenderLevel.jsx";
import Input from "../components/Input/Input.jsx";

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
    const Plot = (item) =>{
        const arr = ["initial", "final", "target"];
        return(
            <>
                <h2 className='level-title text-center'>{item.name}</h2>
                <div className='three-columns'>
                    {arr.map((categoryItem, index) => {
                            return(
                                <div key={`${item.name}-${categoryItem}-${index}`} className="form-card">
                                    <label className="wrapper-level-input" htmlFor = {`${item.name}-${categoryItem}`}>
                                        <div className="wrapper-two-columns">
                                            <span className='text-capitalized'>{categoryItem}</span>
                                            <span className='spacing-left-1'>Level: {item[categoryItem]}</span>
                                        </div>
                                        <div>
                                            <Input title = {`${item.name}-${categoryItem}`} type="range" value ={item[categoryItem]} handler={handle}/>

                                        </div>
                                    </label>
                                    <RenderLevel levelType={categoryItem} value={item[categoryItem]} titleName ={item.name}/>
                                </div>
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