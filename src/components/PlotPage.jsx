import React from "react";
import PlotCards from "../plot/PlotCards";
import Graph from "../plot/Graph";
import RenderLogo from "../components/Image/RenderLogo";

const Preview = (data) =>{
    const {name,
        course,
        textbook,
        attendance,
        totalLessons,
        comment} = data; //returns data
    
    const getAverage = () =>{
        const average = attendance / totalLessons * 100;
        return parseFloat(average.toFixed(1));
    }
    const getSum = (arr, str) =>{
        let sum = 0;
        for(let i = 0; i < 5; i++){
            sum = sum + parseInt(arr.levels[i][str]);
        }
        return sum;
    }
    const getLevelAverage = (arr, str) =>{
        const sum = getSum(arr, str);
        const average = sum / 5;

        return average;
    } 

    const Date = ({__date}) =>{
        return(
            <>
            <div className='two-columns-container'>
                <p className='personalInformation-title'>Date: </p>
                <p className='personalInformation-description justify-end'>{__date}</p>
            </div>
        
            </>
        )
    }
    const Attendance = ({__attendance}) =>{
        return(
            <>
                <div className='two-columns-container'>
                    <p className='personalInformation-title'>Attendance: </p>
                    <p className='personalInformation-description justify-end'>{__attendance} times</p>
                </div>
      
            </>
        )
    }
    const TotalLessons = ({__totalLessons}) =>{
        return(
            <div className='two-columns-container'>
                <p className='personalInformation-title'>Total Lessons: </p>
                <p className='personalInformation-description justify-end'>{__totalLessons} times</p>
            </div>
        )
    }
    const RateOfAttendance = ({__rate}) =>{
        return(
            <div className='two-columns-container'>
                <p className='personalInformation-title'>% of Attendance: </p>
                <p className='personalInformation-description justify-end'>{__rate}%</p>
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
        const Table = ({__data}) =>{
            const labels = ["", "vocabulary", "grammar", "pronunciation", "listening", "conversation", "total", "average"];

            const PlotRow = ({data, label}) =>{
                return(
                    <>
                        <td className='print-col'><p className='title-table text-capitalized'>{label}</p></td>
                        <td className='print-col'><p id={`${label}-${labels[1]}`}>{data.levels[0][label]}</p></td>
                        <td className='print-col'><p id={`${label}-${labels[2]}`}>{data.levels[1][label]}</p></td>
                        <td className='print-col'><p id={`${label}-${labels[3]}`}>{data.levels[2][label]}</p></td>
                        <td className='print-col'><p id={`${label}-${labels[4]}`}>{data.levels[3][label]}</p></td>
                        <td className='print-col'><p id={`${label}-${labels[5]}`}>{data.levels[4][label]}</p></td>
                        <td className='print-col'><p id={`${label}-${labels[6]}`}>{getSum(data, label)}</p></td>
                        <td className='print-col'><p id={`${label}-${labels[7]}`}>{getLevelAverage(data, label)}</p></td>
                    </>
                )
            }
            return(
                <table className='print-table'>
                    {/* Prints header */}
                    <trow>
                        {labels.map((item, index) =>(<th key={index} className="table-col table-header">{item}</th>))}
                    </trow>
                    <trow>
                        {/* Prints Initial Level */}
                        <PlotRow data = {__data} label={"initial"}/>
                    </trow>
                    <trow>
                        <PlotRow data = {__data} label={"target"}/>
                    </trow>
                    <trow>
                        <PlotRow data = {__data} label={"final"}/>
                    </trow>
                </table>
            )
        }
    
        return(
            <>
                <Label />
                <Table __data = {data} />
            </>
        )
    }
    const Comment = ({__comment}) =>{

        return(
            <div className="card">
                <div className="card-title">
                    <strong><p>{'Comment'.toUpperCase()}</p></strong>
                </div>
                <div className = "card-description">
                    <p className="comment">{__comment}</p>
                </div>
            </div>
        )

    }
    const Signature = () =>{
        return(
            <div className="signature-section">
                <div className="card-title-no-border"><p>Signature</p></div>
                <div className="signature-line"id = "line"></div>
            </div>)
    }
    return(
        <>
                <div className='title-container'>
                    <div className='img-container'>
                        <RenderLogo style ="logoName" description="logo"/>
                        <h1>Student Progress Report</h1>
                    </div>
                </div>
                <div className='even-columns'>
                    <div>
                        <p>Student's Name: <strong>{name}</strong></p>
                        <p>Course: {course}</p>
                        <p>Textbook: {textbook}</p>
                    </div>
                    <div>
                        <Date __date = {data.getDate()}/>
                        <Attendance __attendance = {attendance} />
                        <TotalLessons __totalLessons = {totalLessons} />
                        <RateOfAttendance __rate = {getAverage()}/>
                    </div>
                </div>
                <StudentLevelTable />
                <div className = "graph-levelInfo">
                    <div className="comment-signature-container">
                        <Graph {...data}/>
                        <Comment __comment = {comment} /> 
                        <Signature />   
                    </div>
                    <PlotCards {...data}/>
                </div>
    </>

    )
}
export default Preview;