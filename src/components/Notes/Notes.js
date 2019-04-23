import React,{ useState }from 'react';

import './Notes.css'

export default function Notes(props) {
    const [notes, setNotes] = useState("");

    const onChange = (event) =>  {
        setNotes(event.target.value);
    }

    const onSubmit = (event) => {


        fetch("http://localhost:9000/cardrating", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                notes: notes,
                nid: props.cardId,
                rating: "123"
            })
        });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <textarea id="notes" onChange={onChange} value={notes} cols="35" rows="5" placeholder={props.notes} />
            <button>save!</button>
            </form>
        </div>
        
    );
    
}