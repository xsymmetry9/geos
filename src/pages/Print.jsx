// import React, { useRef, forwardRef } from "react";
// import PlotPage from "../components/PlotPage";
// import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
// import "../styles/print.scss";


// const ComponentToPrint = forwardRef((props, ref) => {
//     return (
//         <div className="papersize" ref={ref}>
//             <PlotPage {...props} />
//         </div>
//     );
// });

// const Print = (props) => {
//     const contentRef = useRef();
//     return (

//         <>
//             <ComponentToPrint ref={contentRef} {...props} />
//             <ReactToPrint
//                 trigger={() => <button className="printBtn">Print</button>}
//                 content={() => contentRef.current}
//             />
//         </>

//     );
// }

// export default Print;
