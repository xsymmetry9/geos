import React, { useRef, forwardRef } from "react";
import PlotPage from "../components/PlotPage";
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import "../styles/print.scss";


const ComponentToPrint = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <PlotPage {...props} />
        </div>
    );
});

const Print = (props) => {
    const contentRef = useRef();
    return (

        <div className="container-print-view">
            <div className="printContainer">
                    <ComponentToPrint ref={contentRef} {...props} />
                </div>

                <ReactToPrint
                    trigger={() => <button className="printBtn">Print</button>}
                    content={() => contentRef.current}
                />
        </div>

    );
}

export default Print;
