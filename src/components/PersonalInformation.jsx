import React from 'react';
import Heading from "./Heading/Heading";
import RenderInput from './Input/Input';

const PersonalInformation = ({props, handleData}) =>{
    return(
        <>
            <Heading name="heading-2" styleName='form-title' titleName="Personal Information"/>
            <div className='wrapper-container'>
                <label htmlFor="name">
                    <div className='two-columns'>
                        <p>Name</p>
                        <RenderInput title="name" id="name" type="text" styleName="form-input" value={props.name} handler ={(e) => handleData(e)} placeHolder="Student Name"/>
                    </div>
                </label>
                <label htmlFor="course">
                    <div className="two-columns">
                        <p>Course</p>
                        <select id="course" name="course" value={props.course} onChange={handleData}>
                            <option value="">Select course</option>
                            <option value="ONLINE">ONLINE</option>
                            <option value="PL">PL</option>
                            <option value="GL">GL</option>
                            <option value="SGL">SGL</option>
                            <option value="FLEX">FLEX</option>
                        </select>
                    {/* <RenderInput title="course" id="course" type="text" styleName="form-input" value={props.course} handler ={handleData} placeHolder="PL"/> */}
                    </div>
                    
                </label>
                <label htmlFor= "textbook">
                    <div className="two-columns">
                        <p>Textbook</p>
                        <RenderInput title="textbook" id="textbook" type="text" styleName="form-input" value={props.textbook} handler ={handleData} placeHolder="EF1"/>                            
                    </div>
                </label>
                <label htmlFor= "attendance">
                    <div className="two-columns">
                        <p>Attendance</p>
                        <RenderInput title="attendance" id="attendance" type="number" styleName="form-input" value={props.attendance} handler ={handleData} placeHolder="28"/>
                    </div>
                </label>                             
                <label htmlFor="totalLessons">
                    <div className='two-columns'>
                        <p>Total Lessons</p>
                        <RenderInput title="totalLessons" id="total-lesson" type="number" styleName="form-input" value={props.totalLessons} handler ={handleData} placeHolder="30"/>                          
                    </div>  
                </label>
            </div>
            
        </>
    )
    
}

export default PersonalInformation;