// import React, { useState } from "react";

// export default function About(props) {
// //   const [myStyle, setmyStyle] = useState({
// //     color: "black",
// //     backgroundColor: "white",
// //   })
//  let myStyle = {
//     color: props.mode==='dark'?'white':'#042743',
//     backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',
   
//  }

 

//   return (
//     <div className="container">
//       <h1 className="my-2" style={{ color: props.mode==='dark'?'white':'#042743'}}>About Us</h1>
//       <div className="accordion" id="accordionExample">
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="headingOne">
//             <button
//               className="accordion-button"
//               style={myStyle}
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//             >
//               <strong>Analyze your text</strong>
//             </button>
//           </h2>
//           <div
//             id="collapseOne"
//             className="accordion-collapse collapse show"
//             aria-labelledby="headingOne"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body" style={myStyle}>
//               Manually processing and organizing text data takes time, it’s
//               tedious, inaccurate, and it can be expensive if you need to hire
//               extra staff to sort through text.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item" style={myStyle}>
//           <h2 className="accordion-header" id="headingTwo">
//             <button
//               className="accordion-button collapsed"
//               style={myStyle}
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseTwo"
//               aria-expanded="false"
//               aria-controls="collapseTwo"
//             >
//               <strong>Free to Use</strong>
//             </button>
//           </h2>
//           <div
//             id="collapseTwo"
//             className="accordion-collapse collapse"
//             aria-labelledby="headingTwo"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body" style={myStyle}>
//               It was a concerning development that he couldn't get out of his
//               mind. He'd had many friends throughout his early years and had
//               fond memories of playing with them,
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="headingThree">
//             <button
//               className="accordion-button collapsed"
//               style={myStyle}
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseThree"
//               aria-expanded="false"
//               aria-controls="collapseThree"
//             >
//               <strong>Browser Compatible</strong>
//             </button>
//           </h2>
//           <div
//             id="collapseThree"
//             className="accordion-collapse collapse"
//             aria-labelledby="headingThree"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body" style={myStyle}>
//               he couldn't understand how it had all stopped. There was some
//               point as he grew up that he played with each of his friends for
//               the very last time, and he had no idea that it would be the last.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
