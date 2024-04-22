import React, {useState} from 'react';
import PersonalInformation from '../components/PersonalInformation'
import StudentLevel from '../components/StudentLevel'
import Comment from '../components/Comment'
import Student from '../components/Student.js';
import Level from '../components/Levels.js';

const Form = () =>{
    const [page, setPage] = useState(0);
    const [data, setData] = useState(
        new Student(
            "Gary",
            "English File 1",  
             5,
             10,
             [new Level("vocabulary"),
                new Level("grammar"),
                new Level("pronunciation"),
                new Level("listening"),
                new Level("conversation")],
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

    const arr = [
        <PersonalInformation props = {data} handleSubmit = {handleSubmit}/>,
        <StudentLevel props = {data} handle= {handleLevels}/>,
        <Comment props = {data} handleSubmit ={handleSubmit}/> 
    ]
    const nextPage = () =>{
        if(page < arr.length - 1)
        {
            setPage(page => page + 1);
        } else {
            alert("error")
        }        
    }
    const prevPage = () =>{
        if(page > 0)
        {
            setPage(page => page - 1);
        } else {
            alert("error");
        }
    }

    return(
        <>
            <div className='form-container' id="content">
                {arr[page]}
                <div className='form-nav-buttons-group'>
                    <button className={`${page === 0 ? "hidden" : "block"}`} onClick ={prevPage}>Previous</button>
                    <button onClick={nextPage}>{page < arr.length - 1 ? "Next page" : "Submit"}</button>
                </div>

            </div>
        </>
  
    )
}
export default Form;