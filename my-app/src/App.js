import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App(){
    const dataElements = data.map(people => {

        return (<Card 
                     key={people.id}
                     title={people.title} 
                     price={people.price} 
                     imgC={people.coverImg} 
                     rating={people.stats.rating} 
                     rc={people.stats.reviewCount} 
                     location={people.location} 
                     openSpots={people.openSpots}
                     />)
    })
     // Check if data is imported correctly

    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className="card-list">
                {dataElements}
            </div>
            
        </div>
    )

}