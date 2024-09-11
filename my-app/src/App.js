import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

export default function App(){
    const dataElements = data.map(people => {

        return (<Card 
                     title={people.title} 
                     price={people.price} 
                     imgC={people.coverImg} 
                     rating={people.stats.rating} 
                     rc={people.stats.reviewCount} 
                     location={people.location} 
                     />)
    })
     // Check if data is imported correctly

    return(
        <div>
            <Navbar/>
            <Hero/>
            {dataElements}
        </div>
    )

}