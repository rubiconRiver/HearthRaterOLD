import React from "react";

import Picture from "../Picture/Picture";
import Notes from "../Notes/Notes";

import "./Entry.css";

const Entry = props => {

  props.test("hello from " + props.name);

  return (
    <div className="Entry">
      <div>
        <h5>{props.name}</h5>
      </div>
      <Picture id={props.imgSource} />
      <Notes
        saved={props.saved}
        cardId={props.cardId}
        notes={props.notes ? props.notes : null}
        rating={props.rating}
      />
    </div>
  );
};

export default Entry;
