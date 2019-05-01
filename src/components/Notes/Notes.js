import React, { useState } from "react";

import "./Notes.css";

export default function Notes(props) {
  const [notes, setNotes] = useState(props.notes ? props.notes : undefined);
  const [rating, setRating] = useState(props.rating ? props.rating : 0);

  const onChange = event => {
    setNotes(event.target.value);
  };

  const valueChange = event => {
    setRating(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:9000/cardrating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        notes: notes,
        nid: props.cardId,
        rating: rating,
        user: localStorage.getItem('authentication')
      })
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <select name="rating" onChange={valueChange} value={rating}>
            <option value="0"> </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <textarea
          id="notes"
          onChange={onChange}
          value={notes}
          cols="20"
          rows="5"
          placeholder={notes ? props.notes : "notes"}
        />
        <div>
          <button>save!</button>
        </div>
      </form>
    </div>
  );
}
