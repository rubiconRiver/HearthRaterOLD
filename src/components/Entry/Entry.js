import React from "react";

import Rating from "../Rating/Rating";
import Picture from "../Picture/Picture";
import Notes from "../Notes/Notes";

import "./Entry.css";

const Entry = props => {
  console.log("entry props", props.props.imgSource);
  return (
    <div className="Entry">
      <Rating />
      <Picture id={props.props.imgSource} />
      <Notes />
    </div>
  );
};

export default Entry;
