import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Exercise 5
function Jumbotron(props) {
    // const {title} = props;
    return (
      <>
        <div className="card m-5" style={{width: '30rem'}}>
        <div className="p-5 bg-light">
            <h1 className="mb-3">{props.title}</h1>
            <p className="mb-3">{props.description}</p>
            <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
        </div>
        </div>
      </>
    );
  }
  
  export default Jumbotron;