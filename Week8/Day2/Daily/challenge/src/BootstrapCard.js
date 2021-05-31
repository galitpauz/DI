import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function BootstrapCard(props) {
    const {language, votes, handleClick} = props;


    return (
    <ul>
        <li className="language" id={language}>
            <div className="voteCount">{votes}</div>
            <div className="">{language}</div>
            <div className="button" onClick={handleClick}>Click to vote</div>
        </li>
    </ul>
    );

}

export default BootstrapCard;