import React from "react"
import Navbar from "./Navbar"
import data from "./data/data"
import Travel from "./Travel"

export default function App () {

    const cards= data.map(item => {
        return (
            <Travel
                key={item.id}
                item={item}
            />
        )
    }) 

    return (
        <div>
        <Navbar />
        {cards}
        </div>
    )
}


