import React from 'react';
import Header from './Header'
import Footer from './Footer'
import PersonalInformation from '../components/PersonalInformation'

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
            </div>
            <Footer />
        </>

    )


}

export default App;