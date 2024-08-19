import React from "react";
import "./Preview.scss";

const Preview = (data) =>{
    const {
        name,
        course,
        textbook,
        attendance,
        totalLessons
    } = data;
    console.log(data);
    return(
        <>
            <div className="block">
                <h1 className="title">Print Preview</h1>
            </div>
            <section id="personalInformation" className="single-columns">
                    <div className="even-columns">
                        <p>Name</p>
                        <p>{name}</p>
                    </div>
                    <div className="even-columns">
                        <p>Course</p>
                        <p>{course}</p>
                    </div>
                    <div className="even-columns">
                        <p>Textbook</p>
                        <p>{textbook}</p>
                    </div>
                    <div className="even-columns">
                        <p>Attendance</p>
                        <p>{attendance}</p>
                    </div>  
                    <div className="even-columns">
                        <p>Total Lessons</p>
                        <p>{totalLessons}</p>
                    </div>                  
            </section>
            <section id="levelInformation" className="single-columns">

            </section>
            <section id="feedback">

            </section>
         
            
        </>

    )
}
export default Preview;