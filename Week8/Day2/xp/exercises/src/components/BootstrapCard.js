import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Exercise 3: Bootstrap

// function BootstrapCard() {
//     return (
//       <>
//         <div className="card m-5" style={{width: '30rem'}}>
//         <img className="card-img-top" src="https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg" alt="Card image cap" />
//         <div className="card-body">
//             <h5 className="card-title">Bob Dylan</h5>
//             <p className="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
//             <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
//         </div>
//         </div>
//       </>
//     );
//   }

//Exercise 4: 
function BootstrapCard(props) {
    // const {title} = props;
    return (
      <>
        <div className="card m-5" style={{width: '30rem'}}>
        <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
        </div>
        </div>
      </>
    );
  }
  
  export default BootstrapCard;