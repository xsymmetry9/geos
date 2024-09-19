import React from 'react';
import Heading from "./Heading/Heading";
import RenderInput from './Input/Input';

const PersonalInformation = ({props, handleData}) =>{
    return(
        <>
            <Heading name="heading-2" styleName='form-title' titleName="Personal Information"/>
            <div className='wrapper-container'>
                <label className='two-columns'>
                            <span>Name</span>
                            <RenderInput title="name" id="name" type="text" styleName="form-input" value={props.name} handler ={(e) => handleData(e)} placeHolder="Student Name"/>
                </label>
                <label className='two-columns'>
                    <span>Course</span>
                    <select id="options" value={props.course} onChange={() => console.log("clicked")}>
                        <option value="">Select course</option>
                        <option value="ONLINE">ONLINE</option>
                        <option value="PL">PL</option>
                        <option value="GL">GL</option>
                        <option value="SGL">SGL</option>
                        <option value="FLEX">FLEX</option>
                    </select>
                    {/* <RenderInput title="course" id="course" type="text" styleName="form-input" value={props.course} handler ={handleData} placeHolder="PL"/> */}
                </label>
                <label className='two-columns'>
                    <span>Textbook</span>
                    <RenderInput title="textbook" id="textbook" type="text" styleName="form-input" value={props.textbook} handler ={handleData} placeHolder="EF1"/>                            
                </label>
                <label className='two-columns'>
                    <span>Attendance</span>
                    <RenderInput title="attendance" id="attendance" type="number" styleName="form-input" value={props.attendance} handler ={handleData} placeHolder="28"/>
                </label>                             
                <label className='two-columns'>
                    <span>Total Lessons</span>
                    <RenderInput title="totalLessons" id="total-lesson" type="number" styleName="form-input" value={props.totalLessons} handler ={handleData} placeHolder="30"/>                            
                </label>
            </div>
            
        </>
    )
    
}

export default PersonalInformation;