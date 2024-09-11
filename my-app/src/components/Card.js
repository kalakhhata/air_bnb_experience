import React from "react";



export default function Card(props){

    return(
        <div className="card">
            <img src="/images/katie-zaferes.png" className="card--image"/>
            <div className="card--stats">
                <img src="/images/star.png"  className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.rc})</span>
                <span className="gray">{props.location}</span>

            </div>
            <p>
                {props.title}
            </p>
            <p>
                <span className="bold">From {props.price} </span>/ Person
            </p>
        </div>
    )
}