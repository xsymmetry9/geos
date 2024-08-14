import React from "react";
import "../styles/print.scss";
import Print from "./Print";

const Preview = (data) =>{
    return(
        <>
            <Print {...data}/>
        </>

    )
}
export default Preview;