import React from 'react';
import Header from './Header'
import Footer from './Footer'
import PersonalInformation from '../components/PersonalInformation'
import StudentLevel from '../components/StudentLevel'
import Comment from '../components/Comment'

const App = () =>{
    const Title = () =>{
        return (<>
            <h1>Student Progress Report</h1>
        </>)
    }

    return (
        <>
            <Header/>
            <div id="content">
                <Title />
                <PersonalInformation />
                <StudentLevel />
                <Comment />
            </div>
            <Footer />
        </>

    )


}

export default App;