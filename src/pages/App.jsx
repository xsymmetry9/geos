import React, {useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import Form from './Form';
import Preview from './Preview';
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
            'Comment goes here')
    );

    const navControl = (e) =>{
        setPages(e.currentTarget.getAttribute("id"));
    }

    const handleData = (e) =>{
        const {name, value} = e.currentTarget;
        setData({ ...data, [name]: value});
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
        setPages(1);
    }

    const Title = () =>{
        return (<>
            <h1 className='title' id='title-name'>Student Progress Report</h1>
        </>)
    }
    const contents = {
        "input": <Form data ={data} handleData={handleData} handleLevels={handleLevels} handleSubmit = {handleSubmit} />,
        "preview": <Preview {...data}/>,
        "print": <Preview {...data}/>}
    return (
        <>
            <Header navControl = {navControl}/>
            {contents[page]}
            <Footer />
        </>

    )


}

export default App;