import React,{ useState }from 'react';

import './Notes.css'

export default function Notes(props) {
    const [notes, setNotes] = useState("");
    const [rating, setRating] = useState(props.rating)

    const onChange = (event) =>  {
        setNotes(event.target.value);
    }

    const valueChange = event => {
        setRating(event.target.value);
    }

    const onSubmit = (event) => {

        event.preventDefault();
        fetch("http://localhost:9000/cardrating", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                notes: notes,
                nid: props.cardId,
                rating: rating
            })
        });
    }



    return (
        <div>
            <form onSubmit={onSubmit}>
            <select name="rating" onChange = {valueChange} value={props.rating}> 
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
            <textarea id="notes" onChange={onChange} value={notes} cols="20" rows="5" placeholder={props.notes ? props.notes : "notes"} />
            <button>save!</button>
            </form>
        </div>
        
    );
    
}