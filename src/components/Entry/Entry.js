import React from "react";

import Rating from "../Rating/Rating";
import Picture from "../Picture/Picture";
import Notes from "../Notes/Notes";

import "./Entry.css";

const Entry = (card) => {
  console.log("entry props", card.props.imgSource);
  return (
    <div className="Entry">
    <div>
        <h5>{card.props.name}</h5>
        </div>
      <Rating />
      <Picture id={card.props.imgSource} />
      <Notes />
    </div>
  );
};

export default Entry;
