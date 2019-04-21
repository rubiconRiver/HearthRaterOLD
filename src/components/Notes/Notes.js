import React,{ useState }from 'react';
import SaveButton from '../SaveButton/SaveButton'

import './Notes.css'

export default function Notes(props) {
    const [notes, setNotes] = useState("");

    const onChange = (event) =>  {
        setNotes(event.target.value);
    }

    const onSubmit = (event) => {
        const data = new FormData(event.target);

        fetch("http://localhost:9000/cardrating", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                notes: notes
            })
        });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <textarea id="notes" onChange={onChange} value={notes} cols="35" rows="5" placeholder="Notes" />
            <button>save!</button>
            </form>
        </div>
    );
    
}