import React, {useState} from 'react';
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import Form from './Form/Form';
import Preview from "./Preview/Preview";
import ToPrint from './ToPrint';
import Student from '../components/Student'
import Level from '../components/Levels'

const App = () =>{
    const [page, setPages] = useState("input");
    const [data, setData] = useState(
        new Student(
            "Gary",
            "PL",
            "English File 1",  
             5,
             10,
             [new Level("vocabulary", 1, 2, 3),
                new Level("grammar", 1, 2, 3),
                new Level("pronunciation",1 ,2, 3),
                new Level("listening", 1, 2, 3),
                new Level("conversation", 1, 2, 3)],
            "Gary has been a great student.  He listens well and always participates in every discussion he is assigned.  Since he has had a lot of speaking time, he has had a lot of chances to use the class material we learned.  He is doing well and I hope he can keep it up.")
    );
    const [average, setAverage] = useState(0);

    const navControl = (e) =>{
        const page = e.currentTarget.getAttribute("id");
        setPages(page);
        // if(page === "print")
        //     {
        //         document.querySelector(".content").print();
        //         console.log("hello");
        //     }
        //     else{
        //         setPages(page);
        //     }
    }

    const handleData = (e) =>{
        const {name, value} = e.currentTarget;
        setData({ ...data, [name]: value});

        if(name == "attendance" || name == "totalLessons")
            console.log(value);

    }
    const handleLevels = (e) =>{
        const {name, value} = e.currentTarget;
        const parentCategory = name.split('-')[0];
        const childCategory = name.split('-')[1];

        setData({ ...data,
            levels: data.levels.map((category) =>{
                if(category.name === parentCategory)
                {
                    return{
                        ...category,
                        [childCategory]: value
                    };
                } else{
                    return category
                } 
            }),
        });       
    }
    const handleSubmit = ()=>{
        console.log(page);
        setPages("preview");
    }

    const Title = () =>{
        return (<>
            <h1 className='title' id='title-name'>Student Progress Report</h1>
        </>)
    }
    const contents = {
        "input": <Form data ={data} handleData={handleData} handleLevels={handleLevels} handleSubmit = {handleSubmit} />,
        "preview": <Preview {...data}/>,
        "print": <ToPrint {...data}/>}
    return (
        <>
            <Header navControl = {navControl}/>
            <div className="content">
                {contents[page]}
            </div>
            <Footer />
        </>

    )


}

export default App;