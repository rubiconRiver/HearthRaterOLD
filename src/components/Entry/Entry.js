import React from 'react';

import Rating from '../Rating/Rating';
import Picture from '../Picture/Picture';
import Notes from '../Notes/Notes';

import './Entry.css';

const Entry = (props) => {
    return (
        <div className="Entry">
            <Rating/>
            <Picture id={props.pictureKey}/>
            <Notes/>  
        </div>         
    )
}
 
export default Entry;