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
        return(
            <>
                <h4>{item.name}</h4>
                <label htmlFor = {`${item.name}-initial`}>initial
                    <input
                        type='range'
                        name= {`${item.name}-initial`}
                        value= {item.initial}
                        min ="0"
                        max="10"
                        onChange={handle}>
                    </input>
                </label>
                <p>{item.initial}</p>
     
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