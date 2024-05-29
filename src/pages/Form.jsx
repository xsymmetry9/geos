import React, {useState} from 'react';
import PersonalInformation from '../components/PersonalInformation.jsx'
import StudentLevel from '../components/StudentLevel.jsx'
import Comment from '../components/Comment.jsx'

const Form = ({data, handleData, handleLevels, handleSubmit}) =>{
    const [page, setPage] = useState(0);

    const arr = [
        <PersonalInformation props = {data} handleData = {handleData}/>,
        <StudentLevel props = {data} handle= {handleLevels}/>,
        <Comment props = {data} handleData ={handleData}/> 
    ]
    const nextPage = () =>{
        if(page < arr.length - 1)
        {
            setPage(page => page + 1);
        } else {
            handleSubmit();
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
                {/* page goes here */}
                {arr[page]}

                {/* Navigation goes here */}
                <div className='form-nav-buttons-group'>
                    <button className={`${page === 0 ? "hidden" : "block"}`} onClick ={prevPage}>&#10229;</button>
                    <button onClick={nextPage}>
                        {page < arr.length - 1 ? <span>&#10230;</span>: <span>Preview</span> }
                    </button>
                </div>

            </div>
        </>
  
    )
}
export default Form;