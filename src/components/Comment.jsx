import React from 'react';
import Heading from "./Heading/Heading";

const InputComment = ({props, handleData}) =>{

    return(
        <>
            <Heading name ="heading-2" styleName="form-title" titleName="comments"/>
            <div className='input-container'>
                <textarea
                    name="comment"
                    value={props.comment}            
                    onChange={(e) => handleData(e)}>
                </textarea>
            </div>
        </>
   
    )
}
export default InputComment;