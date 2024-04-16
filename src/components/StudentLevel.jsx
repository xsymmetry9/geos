import React from 'react'

const StudentLevel = ({props}) =>{

    props.levels.forEach(item =>{
        console.log(item);
    }) 

    const plot = (item) =>{
        return(
            <div className='level-container'>
                <h4>{item.name}</h4>
                <label htmlFor ="vocabulary-initial">initial
                    <input
                        type='range'
                        name='vocabulary-initial'
                        value= "5"
                        min ="0"
                        max="10"
                        >
                    </input>
                </label>
                <label htmlFor ="final">Final
                    <input
                        type='range'
                        name='final'
                        value= "5"
                        min ="0"
                        max="10"
                        >
                        
                    </input>
                </label>
                <label htmlFor ="target">Target
                    <input
                        type='range'
                        name='target'
                        value= "5"
                        min ="0"
                        max="10"
                        >
                        
                    </input>
                </label>
                </div>

        )
    }

        return(
            <>
                <div> 
                    <h3>Student Level</h3>
    
                </div>
            </>
        )

    }


export default StudentLevel;