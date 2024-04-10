import React, {useState} from 'react';

const PersonalInformation = ({props, handle}) =>{

    const [name, setName] = useState(props.name);
    const [course, setCourse] = useState(props.course);
    const [attendance, setAttendance] = useState(props.attendance);
    const [totalLessons, setTotallessons] = useState(props.totalLessons );

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
                        value = {name}
                        onChange= {(e) =>setName(e.target.value)}
                        placeholder='Student Name'>
                    </input>
                </label>
                <label>Textbook:
                    <input
                        id="course"
                        name="course"
                        type="text"
                        className='form-input'
                        value={course}
                        onChange = {(e) => setCourse(e.target.value)}>

                    </input>
                </label>
                <label>Attendance
                    <input
                        id="attendance"
                        name="attendance"
                        type="number"
                        className='form-input'
                        value={attendance}
                        onChange= {(e) => setAttendance(e.target.value)}>
                        </input>
                </label>
                <label>Total Lessons:
                    <input
                        id="total-lesson"
                        className='form-input'
                        name="total-lessons"
                        type="number"
                        value={totalLessons}
                        onChange = {(e) => setTotallessons(e.target.value)}
                        
                        ></input>
                </label>
                <button onClick={handle}>Next</button>
            
            </div>
        </>
    )
    
}

export default PersonalInformation;