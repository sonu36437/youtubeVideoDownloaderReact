import React from "react";

export default function Card(props) {
 return (
    <>
         <div className="card-container">
    <div className="thumbnail">
      <img src={props.thumbnail} alt="imgae is not available"></img>
    </div>
    <div className="title">{props.title}</div>
  </div>
    </>
 )
}
