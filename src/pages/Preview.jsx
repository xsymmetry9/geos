import React from "react";
import PlotPage from "../components/PlotPage"
import Print from "../pages/Print.jsx";
import "../styles/print.scss";

const Preview = (data) =>{
    return(
        <>
            {/* <div className="papersize">
                <PlotPage {...data}/>
            </div> */}
            <Print {...data}/>
        </>

    )
}
export default Preview;