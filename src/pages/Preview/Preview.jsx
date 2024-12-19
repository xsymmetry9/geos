import React from "react";
import "../../styles/Preview.scss";
import RenderInput from "../../components/Input/Input"

const Preview = ({data, handleData, handleLevelData, handlerNavControl}) =>{

    const {
        name,
        course,
        textbook,
        attendance,
        totalLessons,
        levels
    } = data;
    console.log(data);
    return(
        <>
            <div className="block">
                <h1 className="title">Preview</h1>
            </div>
            <section id="personalInformation" className="single-columns">
                <div className="block spacing-b-3"><h2>Personal Information</h2></div>
                <div className="block personal-information-container">
                    {/* Names */}
                    <div id="firstname" className="flex-two-cols">
                        <p><strong>Student's name:</strong></p>
                        <RenderInput title="name" id="name" type="text" styleName="form-preview-input" value={name} handler ={handleData} placeHolder="Student Name"/>

                    </div>
                    {/* Courses */}
                    <div id="course"className="flex-two-cols">
                        <p><strong>Course Name:</strong></p>
                        <select className="form-preview-input" name="course" id="course"  value={course} onChange={handleData}>
                            <option>Select course</option>
                            <option value="ONLINE">ONLINE</option>
                            <option value="PL">PL</option>
                            <option value="GL">GL</option>
                            <option value="SGL">SGL</option>
                            <option value="FLEX">FLEX</option>
                        </select>
                    </div>
                    {/* Textbooks */}
                    <div id="textbooks"className="flex-two-cols">
                        <p><strong>Textbook Name:</strong></p>
                        <RenderInput title="textbook" id="textbook" type="text" styleName="form-preview-input" value={textbook} handler ={handleData} placeHolder="Textbook Name"/>
                    </div>
                    {/* Attendance */}
                    <div id="attendance" className="flex-two-cols">
                        <p><strong># of Attended Classes:</strong></p>
                        <RenderInput title="attendance" id="attendance" type="number" styleName="form-preview-input" value={attendance} handler ={handleData} placeHolder="Attendance"/>
                    </div>  
                    {/* Total Lessons */}
                    <div id="totalLessons" className="flex-two-cols">
                        <p><strong>Total Lessons:</strong></p>
                        <RenderInput title="totalLessons" id="totalLessons" type="number" styleName="form-preview-input" value={totalLessons} handler ={handleData} placeHolder="Attendance"/>
                    </div>   
                </div>
                           
            </section>
            <section id="levelInformation" className="single-columns">
                <div className="block spacing-b-3"><h2>Student's Level</h2></div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Initial</th>
                            <th>Final</th>
                            <th>Target</th>
                        </tr>                      
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vocabulary</td>
                            <td>
                                <label htmlFor="vocabulary-initial">
                                    <input 
                                        className="preview-input"
                                        id={`vocabulary-initial`}
                                        name={`vocabulary-initial`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[0]['initial']}
                                        onChange = {handleLevelData}/>                                
                                </label>
                            </td>
                            <td>
                                <label htmlFor="vocabulary-final">
                                        <input 
                                            className="preview-input"
                                            id={`vocabulary-final`}
                                            name={`vocabulary-final`}
                                            type="number" 
                                            min={1} 
                                            max={10} 
                                            step={.5} 
                                            value={levels[0]['final']}
                                            onChange = {handleLevelData}/>                                
                                    </label>
                            </td>
                            <td>
                                <label htmlFor="vocabulary-target">
                                    <input 
                                        className="preview-input"
                                        id={`vocabulary-target`}
                                        name={`vocabulary-target`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[0]['target']}
                                        onChange = {handleLevelData}/>                                
                                </label>                            
                            </td>
                        </tr>
                        <tr>
                            <td>Grammar</td>
                            <td>
                                <label htmlFor="grammar-initial">
                                    <input 
                                        className="preview-input"
                                        id={`grammar-initial`}
                                        name={`grammar-initial`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[1]['initial']}
                                        onChange = {handleLevelData}/>                                
                                </label>                                
                            </td>
                            <td>
                                <label htmlFor="grammar-final">
                                    <input 
                                        className="preview-input"
                                        id={`grammar-final`}
                                        name={`grammar-final`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[1]['final']}
                                        onChange = {handleLevelData}/>                                
                                </label>
                            </td>
                            <td>
                                <label htmlFor="grammar-target">
                                    <input 
                                        className="preview-input"
                                        id={`grammar-target`}
                                        name={`grammar-target`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[1]['target']}
                                        onChange = {handleLevelData}/>                                
                                </label>
                            </td>                      
                        </tr>
                        <tr>
                            <td>Pronunciation</td>
                            <td>          
                                <label htmlFor="pronunciation-initial">
                                    <input 
                                        className="preview-input"
                                        id={`pronunciation-initial`}
                                        name={`pronunciation-initial`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[2]['initial']}
                                        onChange = {handleLevelData}/>                                
                                </label> 
                            </td>
                            <td>          
                                <label htmlFor="pronunciation-target">
                                    <input 
                                        className="preview-input"
                                        id={`pronunciation-target`}
                                        name={`pronunciation-target`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[2]['target']}
                                        onChange = {handleLevelData}/>                                
                                </label> 
                            </td>
                            <td>          
                                <label htmlFor="pronunciation-final">
                                    <input 
                                        className="preview-input"
                                        id={`pronunciation-final`}
                                        name={`pronunciation-final`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[2]['final']}
                                        onChange = {handleLevelData}/>                                
                                </label> 
                            </td>
                        </tr>
                        <tr>
                            <td>Listening</td>
                            <td>          
                                <label htmlFor="listening-initial">
                                    <input 
                                        className="preview-input"
                                        id={`listening-initial`}
                                        name={`listening-initial`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[3]['initial']}
                                        onChange = {handleLevelData}/>                                
                                </label> 
                            </td>
                            <td>          <label htmlFor="listening-target">
                                    <input 
                                        className="preview-input"
                                        id={`listening-target`}
                                        name={`listening-target`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[3]['target']}
                                        onChange = {handleLevelData}/>                                
                                </label> </td>
                            <td>          <label htmlFor="listening-final">
                                    <input 
                                        className="preview-input"
                                        id={`listening-final`}
                                        name={`listening-final`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[3]['final']}
                                        onChange = {handleLevelData}/>                                
                                </label> </td>
                        </tr>
                        <tr>
                            <td>Conversation</td>
                            <td>          
                                <label htmlFor="conversation-initial">
                                    <input 
                                        className="preview-input"
                                        id={`conversation-initial`}
                                        name={`conversation-initial`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[4]['initial']}
                                        onChange = {handleLevelData}/>                                
                                </label> 
                            </td>
                            <td>          
                                <label htmlFor="conversation-final">
                                    <input 
                                        className="preview-input"
                                        id={`conversation-final`}
                                        name={`conversation-final`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[4]['final']}
                                        onChange = {handleLevelData}/>                                
                                </label> 
                            </td>
                            <td>          
                                <label htmlFor="conversation-target">
                                    <input 
                                        className="preview-input"
                                        id={`conversation-target`}
                                        name={`conversation-target`}
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        step={.5} 
                                        value={levels[4]['target']}
                                        onChange = {handleLevelData}/>                                
                                </label> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section id="feedback">
                <div className="block spacing-b-3"><h2>Feedback</h2></div>
                <div className="block">
                        <RenderInput title="comment" id="comment" type="textarea" styleName="form-preview-input" value={data.comment} handler ={handleData} placeHolder="Your comment ..."/></div>

            </section>
            <button className="btn-print" id="print" onClick={handlerNavControl}>Print</button>
         
            
        </>

    )
}
export default Preview;