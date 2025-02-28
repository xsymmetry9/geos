import React, { useRef, forwardRef } from "react";
import PlotPage from "./Partials/PlotPage";
import ReactToPrint from 'react-to-print';
import "../../styles/Print.scss"

const ComponentToPrint = forwardRef((props, ref) => {
    return (
        <div className="papersize" ref={ref}>
            <PlotPage {...props} />
        </div>
    );
});

const Print = (props) => {
    const contentRef = useRef();
    return (

        <>
            <ComponentToPrint ref={contentRef} {...props} />
            <div className="btns-container"> 
                <ReactToPrint
                    trigger={() => <button className ="btn-print" id="print">Print</button>}
                    content={() => contentRef.current}
                    documentTitle="Student Progress Report"
                    onBeforePrint={() => console.log("Printing...")}
                    onAfterPrint={() => console.log("Printing is complete")}
                />            
            </div>
        </>

    );
}

export default Print;
