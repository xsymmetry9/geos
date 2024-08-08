import React from "react";
import PlotPage from "../components/PlotPage"
import "../styles/print.scss";

const Preview = (data) =>{
    return(
        <>
            <PlotPage {...data}/>
        </>

    )
}
export default Preview;