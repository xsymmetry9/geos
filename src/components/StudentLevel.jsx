import React from 'react';

const StudentLevel = ({props}) =>{
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
                <h4>{item.name.toUpperCase()}</h4>
                <label htmlFor = {`${item.name}-initial`}>initial
                    <input
                        type='range'
                        name= {`${item.name}-initial`}
                        value= {item.initial}
                        min ="0"
                        max="10"
                        onChange={(e) => console.log(e.currentTarget.value)}>
                    </input>
                </label>
                <label htmlFor = {`${item.name}-final`}>Final
                    <input
                        type='range'
                        name = {`${item.name}-final`}
                        value= {item.final}
                        min ="0"
                        max="10"
                        onChange={(e) => console.log(e.currentTarget.value)}>                   
                    </input>
                </label>
                <label htmlFor = {`${item.name}-target`}>Target
                    <input
                        type='range'
                        name= {`${item.name}-final`}
                        value= {item.target}
                        min ="0"
                        max="10"
                        onChange={(e) => console.log(e.currentTarget.value)}>
                    </input>
                </label>
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