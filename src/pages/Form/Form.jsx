import React, {useState} from 'react';
import PersonalInformation from './Partials/PersonalInformation.jsx';
import StudentLevel from "./Partials/StudentLevel.jsx";
import Comment from "./Partials/Comment.jsx";
import Button from "../../components/Button/Button.jsx";
import "../../styles/Form.scss";

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
                <div id="form-block" className="block">
                    {arr[page]}
                </div>

                {/* Navigation goes here */}
                <div id="form-navigation" className='form-nav-buttons-group'>
                    {page != 0 && <Button name={`\u27F5`} style="secondary active" handle={prevPage} />}
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