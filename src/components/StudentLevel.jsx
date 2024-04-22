import React from 'react';

const StudentLevel = ({props, handle}) =>{
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
  
    const Plot = (item) =>{
        const arr = ["initial", "final", "target"];
        return(
            <>
                <h4>{item.name}</h4>
                
                <div className='range-input-container'>
                    {arr.map((categoryItem, index) => {
                        return(
                            <>
                             <label key={index} htmlFor = {`${item.name}-${categoryItem}`}>{categoryItem}
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
                <div> 
                    <h3>Student Level</h3>
                    <PlotAll {...props}/>
                </div>
            </>
        )

    }


export default StudentLevel;