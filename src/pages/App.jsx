import React, {useState} from 'react';
import Student from '../components/Student.js';
import Header from './Header'
import Footer from './Footer'
import Form from '../components/Form';

const App = () =>{

    //Creates a new student
    const [data, setData] = useState(
        new Student("Gary", "English File 1", 5, 10)
    );
    const Title = () =>{
        return (<>
            <h1>Student Progress Report</h1>
        </>)
    }

    return (
        <>
            <Header/>
            <Title />
            <Form props = {data}/>

            <Footer />
        </>

    )


}

export default App;