import React, {useState} from 'react';

const PersonalInformation = ({props}) =>{

    const [data, setData] = useState(props);

    const handleChange = (e) =>{
        const {name, value} = e.currentTarget;
        setData({ ...data, [name]: value});
    }
  
    return(
        <>
            <div className="form-container">
                <h2>Personal Information</h2>
                <label>Name:
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className='form-input'
                        value = {data.name}
                        onChange={(e) => handleChange(e)}
                        placeholder='Student Name'>
                    </input>
                </label>
                <label>Textbook:
                    <input
                        id="course"
                        name="course"
                        type="text"
                        className='form-input'
                        value={data.course}
                        onChange={(e) => handleChange(e)}>

                    </input>
                </label>
                <label>Attendance
                    <input
                        id="attendance"
                        name="attendance"
                        type="number"
                        className='form-input'
                        value={data.attendance}
                        onChange={(e) => handleChange(e)}
                        >
                        </input>
                </label>
                <label>Total Lessons:
                    <input
                        id="total-lesson"
                        className='form-input'
                        name="total-lessons"
                        type="number"
                        value={data.totalLessons}
                        onChange={(e) => handleChange(e)}
                        >
                        
                        </input>
                </label>
                <button>Next</button>
            
            </div>
        </>
    )
    
}

export default PersonalInformation;