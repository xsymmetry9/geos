import React from 'react';
import Heading from "./Heading/Heading";
import Input from './Input/Input';

const PersonalInformation = ({props, handleData}) =>{
    return(
        <>
                <Heading name="heading-1" styleName='form-title' titleName="Personal Information"/>
                <div className='d-grid'>
                    <div className='row'>
                        <div className='input-container'>
                            <Input title="name" id="name" type="text" styleName="form-input" value={props.name} handler ={(e) => handleData(e)} placeHolder="Student Name"/>
                        </div>
                    </div>
                        
                    <div className="row double-columns">
                        <div className='input-container'>
                            <Input title="course" id="course" type="text" styleName="form-input" value={props.course} handler ={handleData} placeHolder="PL"/>
                        </div>
                        <div className="input-container">
                            <Input title="textbook" id="textbook" type="text" styleName="form-input" value={props.textbook} handler ={handleData} placeHolder="EF1"/>                            
                        </div>
                    </div>
                    <div className='row double-columns'>
                            <div className='input-container'>
                                <Input title="attendance" id="attendance" type="number" styleName="form-input" value={props.attendance} handler ={handleData} placeHolder="28"/>                            
                            </div>
                            <div className='input-container'>
                                <Input title="total lessons" id="total-lesson" type="number" styleName="form-input" value={props.totalLessons} handler ={handleData} placeHolder="30"/>                            
                            </div>
                        </div>
                </div>
            
        </>
    )
    
}

export default PersonalInformation;