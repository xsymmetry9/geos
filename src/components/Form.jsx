import React from 'react';
import PersonalInformation from '../components/PersonalInformation'
import StudentLevel from '../components/StudentLevel'
import Comment from '../components/Comment'

const Form = ({props}) =>{

    return(
        <div id="content">
            <PersonalInformation {...props}/>
            <StudentLevel {...props}/>
            <Comment {...props}/>
        </div>
    )
}
export default Form;