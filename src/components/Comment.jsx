import React from 'react';

const InputComment = ({props, handleData}) =>{

    return(
        <>
            <h2 className='form-title'>Comments</h2>
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