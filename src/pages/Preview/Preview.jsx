import React, {useState} from "react";
import "./Preview.scss";
import RenderInput from "../../components/Input/Input"

const Preview = ({data, handleData}) =>{
    const [isNameEditable, setIsNameEditable] = useState(false);
    const [isCourseEditable, setIsCourseEditable] = useState(false);
    const [IsTextbookEditable, setIsTextbookEditable] = useState(false);
    const [isAttendanceEditable, setIsAttendanceEditable] = useState(false);
    const [isTotalLessonsEditable, setTotalLessonEditable] = useState(false);

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
                <div className="block">
                {/* Names */}
                <div className="flex-two-cols">
                        <p>Name:</p>
                        {(!isNameEditable) ? <p>{name}</p> : <RenderInput title="name" id="name" type="text" styleName="form-input" value={name} handler ={handleData} placeHolder="Student Name"/>}
                        <button className="floating-btn" onClick={() => setIsNameEditable((prevState) => !prevState)}>
                            {!isNameEditable ? "edit" : "done"}
                        </button>
                    </div>
                {/* Courses */}
                    <div className="flex-two-cols">
                        <p>Course:</p>
                        {(!isCourseEditable) ? <p>{course}</p> : <RenderInput title="course" id="course" type="text" styleName="form-input" value={course} handler ={handleData} placeHolder="PL"/>
                    }
                        <button className="floating-btn" onClick={() => setIsCourseEditable((prevState) => !prevState)}>
                            {!isCourseEditable ? "edit" : "done"}
                        </button>                    
                    </div>
                {/* Textbooks */}
                    <div className="flex-two-cols">
                        <p>Textbook:</p>
                        {(!IsTextbookEditable) ? <p>{course}</p> : <RenderInput title="textbook" id="textbook" type="text" styleName="form-input" value={textbook} handler ={handleData} placeHolder="Textbook"/>
                    }
                        <button className="floating-btn" onClick={() => setIsTextbookEditable((prevState) => !prevState)}>
                            {!IsTextbookEditable ? "edit" : "done"}
                        </button>
                    </div>
                {/* Attendance */}
                    <div className="flex-two-cols">
                        <p>Attendance:</p>
                        {(!isAttendanceEditable) ? <p>{attendance}</p> : <RenderInput title="attendance" id="attendance" type="number" styleName="form-input" value={attendance} handler ={handleData} placeHolder="Attendance"/>
                    }
                        <button className="floating-btn" onClick={() => setIsAttendanceEditable((prevState) => !prevState)}>
                            {!isAttendanceEditable ? "edit" : "done"}
                        </button>                    </div>  
                {/* Total Lessons */}
                    <div className="flex-two-cols">
                        <p>Total Lessons:</p>
                        {(!isTotalLessonsEditable) ? <p>{totalLessons}</p> : <RenderInput title="totalLessons" id="totalLessons" type="number" styleName="form-input" value={totalLessons} handler ={handleData} placeHolder="Attendance"/>
                    }
                        <button className="floating-btn" onClick={() => setTotalLessonEditable((prevState) => !prevState)}>
                            {!isTotalLessonsEditable ? "edit" : "done"}
                        </button>                      </div>   
                </div>
                           
            </section>
            <section id="levelInformation" className="single-columns">
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
                            <tb>Vocabulary</tb>
                            <tb>{data.levels[0]['initial']}</tb>
                            <tb>{data.levels[0]['final']}</tb>
                            <tb>{data.levels[0]['target']}</tb>
                        </tr>
                        <tr>
                            <tb>Grammar</tb>
                            <tb>{data.levels[1]['initial']}</tb>
                            <tb>{data.levels[1]['final']}</tb>
                            <tb>{data.levels[1]['target']}</tb>
                        </tr>
                        <tr>
                            <tb>Pronunciation</tb>
                            <tb>{data.levels[2]['initial']}</tb>
                            <tb>{data.levels[2]['final']}</tb>
                            <tb>{data.levels[2]['target']}</tb>
                        </tr>
                        <tr>
                            <tb>Listening</tb>
                            <tb>{data.levels[3]['initial']}</tb>
                            <tb>{data.levels[3]['final']}</tb>
                            <tb>{data.levels[3]['target']}</tb>
                        </tr>
                        <tr>
                            <tb>Conversation</tb>
                            <tb>{data.levels[4]['initial']}</tb>
                            <tb>{data.levels[4]['final']}</tb>
                            <tb>{data.levels[4]['target']}</tb>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section id="feedback">
                <div className="block">
                    <p>
                        {data.comment};
                    </p>
                </div>

            </section>
         
            
        </>

    )
}
export default Preview;