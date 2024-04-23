import React from 'react';
import "../styles/preview.scss";

const Preview = (data) =>{

    const Name = () =>{
        return(
            <>
            <div className='two-columns-container'>
                <p>Student Name</p>
                <p>Gary</p>
            </div>
            </>
        )
    }
    const Course = ()=>{
        return(
            <>
            <div className='two-columns-container'></div>
            </>
        )
    }
    const Date = () =>{
        return(
            <>
                <p>Date</p>
                <p>2024/03/26</p>
            </>
        )
    }

    const Attendance = () =>{
        return(
            <>
                <p>Attendance</p>
                <p>14 times</p>
            </>
        )
    }
    const TotalLessons = () =>{
        return(
            <>
                <p>Total Lessons</p>
                <p>19 times</p>
            </>
        )
    }
    const RateOfAttendance = () =>{
        return(
            <>
                <p>% of Attendance</p>
                <p>84%</p>
            </>
        )
    }
    return(
        <>
        <div className='papersize'>
            <div className='title-container'>
                <div className='img-container'>
                    <img className="imgLogo" src='https://www.geos.com.tw/Templates/C109122EZW/images/all/logo.svg'></img>
                </div>
                <h1>Student Progress Report</h1>
            </div>

            <div className='even-columns'>

            <div>
                <Name />
                <Course />
            </div>
            <div>
                <Date />
                <Attendance />
                <TotalLessons />
                <RateOfAttendance />
            </div>
 
        </div>


        </div>
   
        
     
        </>
    )
}
export default Preview;