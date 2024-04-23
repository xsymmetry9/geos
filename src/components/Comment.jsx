import React from 'react';

const InputComment = ({props, handleData}) =>{

    return(
        <>
            <h3>Comments</h3>
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