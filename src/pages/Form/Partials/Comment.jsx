import React from 'react';
import RenderInput from "../../../components/Input/Input.jsx";

const InputComment = ({props, handleData}) =>{

    return(
        <>
            <h2 className='form-title'>Comments</h2>
            <div className='input-wrapper pt-3'>
                <textarea name="comment" id="comment" value={props.comment} onChange={handleData} placeHolder ="Comment goes here"></textarea> 
            </div>
                            
        </>
   
    )
}
export default InputComment;