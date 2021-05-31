import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Exercise 1
// function Alert(props) {
//      const {text} = props;
//     return (
//       <>
//         <div class="alert alert-danger" role="alert">
//             {text}
//         </div>
//       </>
//     );
//   }
// //Exercise 2
//   function Alert(props) {
//     const {text} = props;
//       if(props.show === false){
//           return null;
//       }
//       else {
//         return (
//             <>
//               <div class="alert alert-danger" role="alert">
//                   {text}
//               </div>
//             </>
//           );
//       }
//  }

//Exercise 3+4
  function Alert(props) {
    const {text, color} = props;
    const colorClasses = {
        red: 'alert-danger',
        orange: 'alert-warning',
        green: 'alert-success'
    }
    if(colorClasses[props.color]===undefined){
        return (alert ("Please select other alert color"))
    }
    else {
        return (
            <>
              <div class={`alert ${colorClasses[color]}`} role="alert">
                  {text}
              </div>
            </>
        );

    }
 }
  
  export default Alert;