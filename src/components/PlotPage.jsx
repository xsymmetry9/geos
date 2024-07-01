import React from "react";
import "../styles/preview.scss";
import "../styles/print.scss";
import PlotCards from "../plot/PlotCards";
import Graph from "../plot/Graph";
import RenderLogo from "../components/Image/RenderLogo";
import { sum } from "lodash";

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
      
    const Name = ({__name}) =>{
        return(
            <>
                <div className='two-columns-container'>
                    <p className='personalInformation-title'>Student Name</p>
                    <p className='personalInformation-title justify-end studentName'>{__name}</p>
                </div>
            </>
        )
    }
    const Course = ({__course, __textbook})=>{
        return(
            <>
                <div className='two-columns-container'>
                    <p className='personalInformation-title'>{__course}</p>
                    <p className='personalInformation-description justify-end'>{__textbook}</p>
                </div>
            </>
        )
    }
    const Date = ({__date}) =>{
        return(
            <>
            <div className='two-columns-container'>
                <p className='personalInformation-description'>Date</p>
                <p className='personalInformation-description justify-end'>{__date}</p>
            </div>
        
            </>
        )
    }

    const Attendance = ({__attendance}) =>{
        return(
            <>
                <div className='two-columns-container'>
                    <p className='personalInformation-description'>Attendance</p>
                    <p className='personalInformation-description justify-end'>{__attendance} times</p>
                </div>
      
            </>
        )
    }
    const TotalLessons = ({__totalLessons}) =>{
        return(
            <div className='two-columns-container'>
                <p className='personalInformation-description'>Total Lessons</p>
                <p className='personalInformation-description justify-end'>{__totalLessons} times</p>
            </div>
        )
    }
    const RateOfAttendance = ({__rate}) =>{
        return(
            <div className='two-columns-container'>
                <p className='personalInformation-description'>% of Attendance</p>
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
                        <div className='col'><p className='title-table'>Initial</p></div>
                        <div className='col'><p id="initial-vocabulary">{__data.levels[0].initial}</p></div>
                        <div className='col'><p id="initial-grammar">{__data.levels[1].initial}</p></div>
                        <div className='col'><p id="initial-pronunciation">{__data.levels[2].initial}</p></div>
                        <div className='col'><p id="initial-listening">{__data.levels[3].initial}</p></div>
                        <div className='col'><p id="initial-conversation">{__data.levels[4].initial}</p></div>
                        <div className='col'><p id="initial-total">{getSum(__data, 'initial')}</p></div>
                        <div className='col'><p id="initial-average">{getLevelAverage(__data, "initial")}</p></div>
                    </div>
                    <div className="row">
                        <div className='col'><p className='title-table'>Target</p></div>
                        <div className='col'><p id="target-vocabulary">{__data.levels[0].target}</p></div>
                        <div className='col'><p id="target-grammar">{__data.levels[1].target}</p></div>
                        <div className='col'><p id="target-pronunciation">{__data.levels[2].target}</p></div>
                        <div className='col'><p id="target-listening">{__data.levels[3].target}</p></div>
                        <div className='col'><p id="target-conversation">{__data.levels[4].target}</p></div>
                        <div className='col'><p id="target-total">{getSum(__data, 'target')}</p></div>
                        <div className='col'><p id="target-average">{getLevelAverage(__data, "target")}</p></div>
                    </div>
                    <div className="row">
                        <div className='col'><p className='title-table'>Final</p></div>
                        <div className='col'><p id="final-vocabulary">{__data.levels[0].final}</p></div>
                        <div className='col'><p id="final-grammar">{__data.levels[1].final}</p></div>
                        <div className='col'><p id="final-pronunciation">{__data.levels[2].final}</p></div>
                        <div className='col'><p id="final-listening">{__data.levels[3].final}</p></div>
                        <div className='col'><p id="final-conversation">{__data.levels[4].final}</p></div>
                        <div className='col'><p id="final-total">{getSum(__data, 'final')}</p></div>
                        <div className='col'><p id="final-average">{getLevelAverage(__data, "final")}</p></div>
                    </div>
                </div>
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
                <div className="card-title"><h2>Comment</h2></div>
                <p className="card-comment">{__comment}</p>
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
            <div className='print-window'>
                <div className='title-container'>
                    <div className='img-container'>
                        <RenderLogo style ="logoName" description="logo"/>
                        <h1 className="preview-title">Student Progress Report</h1>
                    </div>
                </div>
                <div className='even-columns'>
                    <div>
                        <Name __name = {name}/>
                        <Course __course = {course} __textbook= {textbook}/>
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
                    <div>
                        <Graph {...data}/>
                        <Comment __comment = {comment} /> 
                        <Signature />   
                    </div>
                    <PlotCards {...data}/>
                </div>
            </div>
    </>

    )
}
export default Preview;