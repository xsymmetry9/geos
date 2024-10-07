import React from 'react';
import Heading from "../../../components/Heading/Heading.jsx";
import RenderInput from "../../../components/Input/Input.jsx";

const InputComment = ({props, handleData}) =>{

    return(
        <>
            <Heading name ="heading-2" styleName="form-title" titleName="comments"/>
            <div className='input-wrapper'>
                <RenderInput 
                    title="comment" 
                    id="comment" 
                    type="textarea" 
                    styleName="form-input" 
                    value={props.comment} 
                    handler ={handleData} 
                    placeholder="Comment goes here"/>  
            </div>
                            
        </>
   
    )
}
export default InputComment;