import React, {useEffect, useState} from 'react';
import PersonalInformation from '../components/PersonalInformation'
import StudentLevel from '../components/StudentLevel'
import Comment from '../components/Comment'
import Student from '../components/Student.js';

const Form = () =>{

    const [data, setData] = useState(
        new Student("Gary", "English File 1", 5, 10)
    )
    const handleSubmit = (name, course, attendance, totalLessons) =>{
        setData(...data, 
            {name: name, course: course, attendance: attendance, totalLessons: totalLessons});
    }

    return(
        <div id="content">
            <PersonalInformation props = {data} handle = {handleSubmit}/>
            <StudentLevel props = {data}/>
            <Comment props = {data}/>
            <p>{data.name}</p>
        </div>
    )
}
export default Form;