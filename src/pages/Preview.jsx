import React from 'react';
import "../styles/preview.scss";

const Preview = (data) =>{

    const Name = () =>{
        return(
            <>
            <div className='two-columns-container'>
                <p>Student Name</p>
                <p className='justify-end'>Gary</p>
            </div>
            </>
        )
    }
    const Course = ()=>{
        return(
            <>
                <div className='two-columns-container'>
                    <p>SGL</p>
                    <p className='justify-end'>EF4</p>
                </div>
            </>
        )
    }
    const Date = () =>{
        return(
            <>
            <div className='two-columns-container'>
                <p>Date</p>
                <p className='justify-end'>2024/03/26</p>
            </div>
        
            </>
        )
    }

    const Attendance = () =>{
        return(
            <>
                <div className='two-columns-container'>
                    <p>Attendance</p>
                    <p className='justify-end'>14 times</p>
                </div>
      
            </>
        )
    }
    const TotalLessons = () =>{
        return(
            <div className='two-columns-container'>
                <p>Total Lessons</p>
                <p className='justify-end'>19 times</p>
            </div>
        )
    }
    const RateOfAttendance = () =>{
        return(
            <div className='two-columns-container'>
                <p>% of Attendance</p>
                <p className='justify-end'>84%</p>
            </div>
        )
    }
    const StudentLevelTable = () => {
        const Label = () =>{
            const labelObj =[
                {level: "1", name: "Low beginner"}, 
                {level: "2-3", name: "Low Intermediate"}, 
                {level: "4-5", name: "Intermediate"}, 
                {level: "8-9", name: "Upper-Intermediate"},
                {level: "10", name: "Advanced"}];
            return(
                    <div className='label-containers'>
                        {labelObj.map((item, index) => <div key={index} className='d-flex'><p>{item.level}.</p><p>{item.name}</p></div>)}
                    </div>)
            }
        return(
            <>
                <Label />
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
                <StudentLevelTable />


            </div>
        </>
    )
}
export default Preview;