import React from 'react';

import Rating from '../Rating/Rating';
import Picture from '../Picture/Picture';
import Notes from '../Notes/Notes';

//import Style from './Entry.js';

const Entry = (props) => {
    return (
        <div>
            <Rating/>
            <Picture id={props.pictureKey}/>
            <Notes/>  
        </div>         
    )
}
 
export default Entry;