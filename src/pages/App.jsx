import React, {useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import Form from './Form';
import Preview from './Preview';
import Student from '../components/Student'
import Level from '../components/Levels'

const App = () =>{
    const [page, setPages] = useState(1);
    const [data, setData] = useState(
        new Student(
            "Gary",
            "PL",
            "English File 1",  
             5,
             10,
             [new Level("vocabulary"),
                new Level("grammar"),
                new Level("pronunciation"),
                new Level("listening"),
                new Level("conversation")],
            'Comment goes here')
    );

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
    const contents = [<Form data ={data} handleData={handleData} handleLevels={handleLevels} handleSubmit = {handleSubmit} />, <Preview {...data}/>];
    return (
        <>
            <Header/>
            {contents[page]}
            <Footer />
        </>

    )


}

export default App;