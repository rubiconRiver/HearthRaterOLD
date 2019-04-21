import React from "react";

import Rating from "../Rating/Rating";
import Picture from "../Picture/Picture";
import Notes from "../Notes/Notes";

import "./Entry.css";

const Entry = (props) => {
  return (
    <div className="Entry">
    <div>
        <h5>{props.name}</h5>
        </div>
      <Rating />
      <Picture id={props.imgSource} />
      <Notes />
    </div>
  );
};

export default Entry;
