import React from "react";
import worldIcon from "../assets/world.png"

export default function Header(){
    return(
        <div className="header">
            <img src={worldIcon} className="header--img"/>
            <h5 className="header--title">my travel journal</h5>
        </div>
    )
}