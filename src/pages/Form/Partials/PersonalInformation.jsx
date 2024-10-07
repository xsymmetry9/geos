import React from 'react';
import RenderInput from '../../../components/Input/Input';

const PersonalInformation = ({props, handleData}) =>{
    return(
        <>
            <h2 className="form-title">Personal Information</h2>
            <div className='personal-information-input'>
                <label htmlFor="name">
                    <div className='input-wrapper'>
                        <p className="input-title">Name</p>
                        <RenderInput title="name" id="name" type="text" styleName="form-input" value={props.name} handler ={(e) => handleData(e)} placeHolder="Student Name"/>
                    </div>
                </label>
                <label htmlFor="course">
                    <div className="input-wrapper">
                        <p className="input-title">Course</p>
                        <select id="course" name="course" value={props.course} onChange={handleData}>
                            <option value="">Select course</option>
                            <option value="ONLINE">ONLINE</option>
                            <option value="PL">PL</option>
                            <option value="GL">GL</option>
                            <option value="SGL">SGL</option>
                            <option value="FLEX">FLEX</option>
                        </select>
                    </div>
                    
                </label>
                <label htmlFor= "textbook">
                    <div className="input-wrapper">
                        <p className="input-title">Textbook</p>
                        <RenderInput title="textbook" id="textbook" type="text" styleName="form-input" value={props.textbook} handler ={handleData} placeHolder="EF1"/>                            
                    </div>
                </label>
                <label htmlFor= "attendance">
                    <div className="input-wrapper">
                        <p className="input-title">Attendance</p>
                        <RenderInput title="attendance" id="attendance" type="number" styleName="form-input" value={props.attendance} handler ={handleData} placeHolder="28"/>
                    </div>
                </label>                             
                <label htmlFor="totalLessons">
                    <div className='input-wrapper'>
                        <p className="input-title">Total Lessons</p>
                        <RenderInput title="totalLessons" id="total-lesson" type="number" styleName="form-input" value={props.totalLessons} handler ={handleData} placeHolder="30"/>                          
                    </div>  
                </label>
            </div>
            
        </>
    )
}
export default PersonalInformation;