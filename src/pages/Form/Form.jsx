import React, {useState} from 'react';
import PersonalInformation from '../../components/PersonalInformation.jsx';
import StudentLevel from '../../components/StudentLevel.jsx';
import Comment from '../../components/Comment.jsx';
import Button from "../../components/Button/Button.jsx";
import "./Form.scss";

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
            <div className='form-container'>
                {/* page goes here */}
                {arr[page]}

                {/* Navigation goes here */}
                <div className='form-nav-buttons-group'>
                    <Button name={`\u27F5`} style={`secondary ${page === 0 ? "inactive" : "active"}`}handle={prevPage} />
                    <Button 
                        name={page < arr.length - 1 ? "\u27F6": "Preview"}
                        style={"primary"}
                        handle={nextPage}>
                    </Button>
                </div>

            </div>
        </>
  
    )
}
export default Form;