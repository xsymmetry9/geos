import React, {useState} from 'react';
import PersonalInformation from '../components/PersonalInformation'
import StudentLevel from '../components/StudentLevel'
import Comment from '../components/Comment'
import Student from '../components/Student.js';
import Level from '../components/Levels.js';

const Form = () =>{
    const [data, setData] = useState(
        new Student(
            "Gary",
            "English File 1",  
             5,
             10,
             [new Level("vocabulary", 5, 4, 2),
                new Level("grammar", 5, 6, 7),
                new Level("pronunciation", 5, 6, 7),
                new Level("listening", 5, 6, 7),
                new Level("conversation", 5, 6, 7)],
            'Comment goes here')
    )
    const handleSubmit = (e) =>{
        const {name, value} = e.currentTarget;
        setData({ ...data, [name]: value});
    }
    const handleLevels = (e) =>{
        const {name, value} = e.currentTarget;
        const parentCategory = name.split('-')[0];
        const childCategory = name.split('-')[1];

        setData({ ...data,
            levels: data.levels.map((category) =>{
                if(category.name === parentCategory)
                {
                    return{
                        ...category,
                        [childCategory]: value
                    };
                } else{
                    return category
                }
                
            }),
        });       
    }



    return(
        <>
            <div className='form-container' id="content">
                <PersonalInformation props = {data} handleSubmit = {handleSubmit}/>
                <StudentLevel props = {data} handle= {handleLevels}/>
                <Comment props = {data} handleSubmit ={handleSubmit}/> 
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <h3>{data.name}</h3>
            <p>{data.course}</p>
            <p>{data.attendance}</p>
            <p>{data.totalLessons}</p>
            <p>{data.comment}</p>
            {data.levels.map((item, index) => <p key={index}>{item.name}: {item.initial}</p>)}
        </>
  
    )
}
export default Form;