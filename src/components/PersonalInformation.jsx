import React from 'react';

const PersonalInformation = ({props, handleSubmit}) =>{
    return(
        <>
                <h2>Personal Information</h2>
                <div className='d-grid'>
                    <div className="row">
                        <div className='input-container'>
                            <label><span>Name</span>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className='form-input'
                                    value = {props.name}
                                    onChange={(e) => handleSubmit(e)}
                                    placeholder='Student Name'>
                                </input>
                            </label>
                        </div>
                        <div className="input-container">
                            <label><span>Textbook</span>
                                <input
                                    id="course"
                                    name="course"
                                    type="text"
                                    className='form-input'
                                    value={props.course}
                                    onChange={handleSubmit}>  
                                </input></label>
                        </div>
                    </div>
                    <div className='row'>
                            <div className='input-container'>
                                    <label><span>Attendance</span>
                                    <input
                                        id="attendance"
                                        name="attendance"
                                        type="number"
                                        className='form-input'
                                        value={props.attendance}
                                        onChange={handleSubmit}>
                                    </input>   
                                </label>
                            </div>
                            <div className='input-container'>
                                <label><span>Total Lessons</span>
                                    <input
                                        id="total-lesson"
                                        className='form-input'
                                        name="totalLessons"
                                        type="number"
                                        value={props.totalLessons}
                                        onChange={handleSubmit}>
                                    </input>
                                </label>
                            </div>
                        </div>
                </div>
            
        </>
    )
    
}

export default PersonalInformation;