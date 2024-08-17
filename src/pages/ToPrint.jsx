import React from "react";
import "../styles/print.scss";
import Print from "./Print";

const PrintPage = (data) =>{
    return(
        <>
            <div className='print-window papersize'>
                <Print {...data}/>
            </div>
        </>

    )
}
export default PrintPage;