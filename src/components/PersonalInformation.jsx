import React, {useState} from 'react';

const PersonalInformation = ({props}) =>{

    const [data, setData] = useState(props);

    const handleChange = (e) =>{
        const {name, value} = e.currentTarget;
        setData({ ...data, [name]: value});
    }
  
    return(
        <>
            <div className="section-container">
                <h2>Personal Information</h2>
                <div className='d-grid'>
                    <div class="row">
                        <div className='input-container'>
                            <label>Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className='form-input'
                                value = {data.name}
                                onChange={(e) => handleChange(e)}
                                placeholder='Student Name'>
                            </input>
                        </div>
                        <div className="input-container">
                            <label>Textbook</label>
                            <input
                                id="course"
                                name="course"
                                type="text"
                                className='form-input'
                                value={data.course}
                                onChange={(e) => handleChange(e)}>  
                            </input>
                        </div>
                    </div>

                    <div className="d-grid">
                        <div className='row'>
                            <div className='input-container'>
                                <label>Attend￼
￼Nextance</label>
                                <input
                                    id="attendance"
                                    name="attendance"
                                    type="number"
                                    className='form-input'
                                    value={data.attendance}
                                    onChange={(e) => handleChange(e)}>
                                </input>    
                            </div>
                            <div className='input-container'/>
                                <label>Total Lessons</label>
                                <input
                                    id="total-lesson"
                                    className='form-input'
                                    name="total-lessons"
                                    type="number"
                                    value={data.totalLessons}
                                    onChange={(e) => handleChange(e)}>
                                </input>
                            </div>
                        </div>
                    </div>
                <button>Next</button>
            
            </div>
        </>
    )
    
}

export default PersonalInformation;