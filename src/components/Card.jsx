import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Paragraphe from "./paragraphe";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Paragraphe info={props.tel} />
        <Paragraphe info={props.email} />
      </div>
    </div>
  );
}

export default Card;
