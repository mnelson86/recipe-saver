import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card" {...props}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div {...props}></div>
            </div>
        </div>
    );
}

export default Card;