import React from 'react';
import "../styles/preview.scss";

const Preview = (data) =>{

    const Name = () =>{
        return(
            <>
            <div className='two-columns-container'>
                <p className='personalInformation-title'>Student Name</p>
                <p className='personalInformation-title justify-end'>Gary</p>
            </div>
            </>
        )
    }
    const Course = ()=>{
        return(
            <>
                <div className='two-columns-container'>
                    <p className='personalInformation-title'>SGL</p>
                    <p className='personalInformation-description justify-end'>EF4</p>
                </div>
            </>
        )
    }
    const Date = () =>{
        return(
            <>
            <div className='two-columns-container'>
                <p className='personalInformation-description'>Date</p>
                <p className='personalInformation-description justify-end'>2024/03/26</p>
            </div>
        
            </>
        )
    }

    const Attendance = () =>{
        return(
            <>
                <div className='two-columns-container'>
                    <p className='personalInformation-description'>Attendance</p>
                    <p className='personalInformation-description justify-end'>14 times</p>
                </div>
      
            </>
        )
    }
    const TotalLessons = () =>{
        return(
            <div className='two-columns-container'>
                <p className='personalInformation-description'>Total Lessons</p>
                <p className='personalInformation-description justify-end'>19 times</p>
            </div>
        )
    }
    const RateOfAttendance = () =>{
        return(
            <div className='two-columns-container'>
                <p className='personalInformation-description'>% of Attendance</p>
                <p className='personalInformation-description justify-end'>84%</p>
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
        const Table = () =>{
            return(
                <div className='table'>
                    <div className="row">
                        <div className="col"><p></p></div>
                        <div className="col"><p className='table-header'>Vocabulary</p></div>
                        <div className="col"><p className='table-header'>Grammar</p></div>
                        <div className="col"><p className='table-header'>Pronunciation</p></div>
                        <div className="col"><p className='table-header'>Listening</p></div>
                        <div className="col"><p className='table-header'>Conversation</p></div>
                        <div className="col"><p className='table-header'>Total</p>
                        </div><div className="col"><p className='table-header'>Average</p></div>
                    </div>
                    <div className="row">
                        <div className='col'><p className='title-table'>Initial Level</p></div>
                        <div className='col'><p id="initial-vocabulary">8</p></div>
                        <div className='col'><p id="initial-grammar">8</p></div>
                        <div className='col'><p id="initial-pronunciation">8</p></div>
                        <div className='col'><p id="initial-listening">8</p></div>
                        <div className='col'><p id="initial-conversation">8</p></div>
                        <div className='col'><p id="initial-total">8</p></div>
                        <div className='col'><p id="initial-average">8</p></div>
                    </div>
                    <div className="row">
                        <div className='col'><p className='title-table'>Target</p></div>
                        <div className='col'><p id="target-vocabulary">8</p></div>
                        <div className='col'><p id="target-grammar">8</p></div>
                        <div className='col'><p id="target-pronunciation">8</p></div>
                        <div className='col'><p id="target-listening">8</p></div>
                        <div className='col'><p id="target-conversation">8</p></div>
                        <div className='col'><p id="target-total">8</p></div>
                        <div className='col'><p id="target-average">8</p></div>
                    </div>
                    <div className="row">
                        <div className='col'><p className='title-table'>Initial Level</p></div>
                        <div className='col'><p id="final-vocabulary">8</p></div>
                        <div className='col'><p id="final-grammar">8</p></div>
                        <div className='col'><p id="final-pronunciation">8</p></div>
                        <div className='col'><p id="final-listening">8</p></div>
                        <div className='col'><p id="final-conversation">8</p></div>
                        <div className='col'><p id="final-total">8</p></div>
                        <div className='col'><p id="final-average">8</p></div>
                    </div>

                </div>
            )
        }
        return(
            <>
                <Label />
                <Table />
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