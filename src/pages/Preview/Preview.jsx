import React, {useState} from "react";
import "./Preview.scss";
import RenderInput from "../../components/Input/Input"

const Preview = ({data, handleData}) =>{
    const [isNameEditable, setIsNameEditable] = useState(false);
    const [isCourseEditable, setIsCourseEditable] = useState(false);
    const [IsTextdookEditable, setIsTextdookEditable] = useState(false);
    const [isAttendanceEditable, setIsAttendanceEditable] = useState(false);
    const [isTotalLessonsEditable, setTotalLessonEditable] = useState(false);

    const {
        name,
        course,
        textdook,
        attendance,
        totalLessons
    } = data;
    console.log(data);
    return(
        <>
            <div className="block">
                <h1 className="title">Preview</h1>
            </div>
            <section id="personalInformation" className="single-columns">
                <div className="block"><h2>Personal Information</h2></div>
                <div className="block">
                {/* Names */}
                <div className="flex-two-cols">
                        <p>Name:</p>
                        <RenderInput title="name" id="name" type="text" styleName="form-preview-input" value={name} handler ={handleData} placeHolder="Student Name"/>
                    
                    </div>
                {/* Courses */}
                    <div className="flex-two-cols">
                        <p>Course:</p>
                        <RenderInput title="course" id="course" type="text" styleName="form-preview-input" value={course} handler ={handleData} placeHolder="PL"/>                                      
                    </div>
                {/* Textdooks */}
                    <div className="flex-two-cols">
                        <p>Textdook:</p>
                        <RenderInput title="textdook" id="textdook" type="text" styleName="form-preview-input" value={textdook} handler ={handleData} placeHolder="Textdook"/>
                        </div>
                {/* Attendance */}
                    <div className="flex-two-cols">
                        <p>Attendance:</p>
                        <RenderInput title="attendance" id="attendance" type="number" styleName="form-preview-input" value={attendance} handler ={handleData} placeHolder="Attendance"/>
                    </div>  
                {/* Total Lessons */}
                    <div className="flex-two-cols">
                        <p>Total Lessons:</p>
                       <RenderInput title="totalLessons" id="totalLessons" type="number" styleName="form-preview-input" value={totalLessons} handler ={handleData} placeHolder="Attendance"/>
                    </div>   
                </div>
                           
            </section>
            <section id="levelInformation" className="single-columns">
                <div className="block"><h2>Student'sLevel</h2></div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Initial</th>
                            <th>Final</th>
                            <th>Target</th>
                        </tr>                      
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vocabulary</td>
                            <td>{data.levels[0]['initial']}</td>
                            <td>{data.levels[0]['final']}</td>
                            <td>{data.levels[0]['target']}</td>
                        </tr>
                        <tr>
                            <td>Grammar</td>
                            <td>{data.levels[1]['initial']}</td>
                            <td>{data.levels[1]['final']}</td>
                            <td>{data.levels[1]['target']}</td>                      
                        </tr>
                        <tr>
                            <td>Pronunciation</td>
                            <td>{data.levels[2]['initial']}</td>
                            <td>{data.levels[2]['final']}</td>
                            <td>{data.levels[2]['target']}</td>
                        </tr>
                        <tr>
                            <td>Listening</td>
                            <td>{data.levels[3]['initial']}</td>
                            <td>{data.levels[3]['final']}</td>
                            <td>{data.levels[3]['target']}</td>
                        </tr>
                        <tr>
                            <td>Conversation</td>
                            <td>{data.levels[4]['initial']}</td>
                            <td>{data.levels[4]['final']}</td>
                            <td>{data.levels[4]['target']}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section id="feedback">
                <div className="block"><h2>Feedback</h2></div>
                <div className="block">
                        <RenderInput title="totalLessons" id="totalLessons" type="textarea" styleName="form-preview-input" value={data.comment} handler ={handleData} placeHolder="Attendance"/>                </div>

            </section>
         
            
        </>

    )
}
export default Preview;