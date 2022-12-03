import React from "react";
import mapEmoji from "../assets/mapemoji.png"

export default function Card(props){
    return(
      <div>
        <div className="card">
            <div className="card--imgDiv">
                <img src={`/Images/${props.item.coverImg}`} alt="" className="card--img"/>
            </div>
            <div className="card--textDiv">
                <img src={mapEmoji} alt="" className="card--pin" />
                <span className="card--country">{props.item.country}</span> 
                <a href={props.item.link} className="card--mapLink">View on Google Maps</a>
                <h3 className="card--title">{props.item.title}</h3>
                <p className="card--date">{props.item.date.arrival} -{props.item.date.departure} </p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
        <hr></hr>
      </div>
    )
}