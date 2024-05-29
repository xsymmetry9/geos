import React, {useState} from 'react';

const StudentLevel = ({props, handle}) =>{
    const [tab, setTab] = useState(0);
    console.log(props.levels.length);

    const nextTab = () =>{
        if(tab < props.levels.length - 1)
        {
            setTab(tab => tab + 1);
        } else {
            alert("error")
        }        
    }
    const prevTab = () =>{
        if(tab > 0)
        {
            setTab(tab => tab - 1);
        } else {
            alert("error");
        }
    }

    const PlotOne = (props) =>{
        return(
            <>
                <Plot {...props.levels[tab]}/>
            </>
        )
    }
    const PlotAll = () =>{
        return(
            <>
                {props.levels.map((item, index) => {
                    return(
                        <div key = {index}>
                            <Plot {...item}/>                            
                        </div>
                    )
                }
                )}
            </>
        )
    }
    //Tab menu (future function with a dropdown)
    const Tabs = () =>{
        const arr = ["vocabulary", "grammar", "pronunciation", "listening", "conversation"];
        return(
            <div className='tab-level'>
                <div className='tab-container'>
                    {arr.map((item) => <span>{item}</span>)}
                    <button className='dropdown-menu'></button>
                </div>
            </div>
     
        )
    }
  
    const Plot = (item) =>{
        console.log(item);
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
                    {/* <PlotAll {...props}/> */}
                    <PlotOne {...props}/>
                    <div className='level-description-container'>
                        <p className='level-text'>
                            Has sufficient vocabulary to conduct routine, everyday transaction involving familiar situations and topics.
                        </p>
                    </div>
                    <div className='form-nav-buttons-group'>
                        <button className="levels" onClick={prevTab}>Prev</button>
                        <button className="levels" onClick={nextTab}>Next</button>
                    </div>
                </div>
            </>
        )

    }


export default StudentLevel;