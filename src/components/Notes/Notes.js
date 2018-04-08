import React from 'react';

import './Notes.css'

const Notes = () => {
    return (
        <div className="Notes">
            <textarea cols="25" rows="5" defaultValue="Default Card Notes"></textarea>
        </div>
    )
}
 
export default Notes;