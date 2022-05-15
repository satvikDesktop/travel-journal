import React from "react"
import "./css/Card.css"

export default function Travel(props) {
    
    return (
    <div>
     <div className="card">
        <img src={props.item.imageUrl}  className="card--image" />
        <div className="side">
        <div className="head">
        <img src="https://www.linkpicture.com/q/location_11.png" className="loc--image" />&nbsp; 
         <h3 className="card--location">{props.item.location}</h3>&nbsp;&nbsp;
         <a href={props.item.googleMapsUrl}  target="_blank" className="card--gLink">View on Google Maps </a>
         </div>

         <h1 className="card--title">{props.item.title}</h1>

         <div className="dates">
         <h4 className="card--date">{props.item.startDate}</h4>
         <p> - </p>
         <h4 className="card--date">{props.item.endDate}</h4>
        </div>  

         <p className="card--desc">{props.item.description}</p>
         </div>
    </div>
    <hr className="solid"></hr>
    </div>
    )
}