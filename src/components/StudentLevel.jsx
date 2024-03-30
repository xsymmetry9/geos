import React, {useState} from 'react'

const StudentLevel = () =>{

    const InputLevels = () =>{
        const [initialLevel, setInitialLevel] = useState(5);
        const [target, setTarget] = useState(5);
        const [final, setFinal] = useState(5);

        return(
            <>
                <div id="initial-level" className="level-container"> 
                    <h2>Student Level</h2>
    
                    <h3>Vocabulary</h3>
                    <label for ="vocabulary-initial">initial
                        <input
                            type='range'
                            name='vocabulary-initial'
                            value= {initialLevel}
                            min ="0"
                            max="10"
                            onChange={(e) => setInitialLevel(e.target.value)}>
    
                        </input>
                    </label>
                    <label for ="final">Final
                        <input
                            type='range'
                            name='final'
                            value= {final}
                            min ="0"
                            max="10"
                            onChange={(e) => setFinal(e.target.value)}>
    
                        </input>
                    </label>
                    <label for ="target">Target
                        <input
                            type='range'
                            name='target'
                            value= {target}
                            min ="0"
                            max="10"
                            onChange={(e) => setTarget(e.target.value)}>
    
                        </input>
                    </label>
                    <p>{initialLevel}, {target}, {final}</p>
                </div>
            </>
        )

    }

    return(
        <>
            <InputLevels />
        
        </>
    )
 

    

}
export default StudentLevel;