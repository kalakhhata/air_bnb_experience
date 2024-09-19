import React from "react";

export default function Card(props) {
    
    return (
        <div className="card-container"> 
            <div className="card">
             
                {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
                <img src={props.imgC} alt={props.title} className="card--image" />
                <div className="card--stats">
                    <img src="/images/star.png" alt="star" className="card--star" />
                    <span>{props.rating}</span>
                    <span className="gray">({props.rc})</span>
                    <span className="gray">{props.location}</span>
                </div>

            
                <p className="card--title">{props.title}</p>

                <div className="card--badge">SOLD OUT</div>
                <p>
                    <span className="bold">From {props.price} </span>/ Person
                </p>
            </div>
            
        </div>
    );
}
