import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Form from '../components/Form';

const App = () =>{


    const Title = () =>{
        return (<>
            <h1 className='title' id='title-name'>Student Progress Report</h1>
        </>)
    }

    return (
        <>
            <Header/>
            <Title />
            <Form />

            <Footer />
        </>

    )


}

export default App;