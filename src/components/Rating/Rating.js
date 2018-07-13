import React from 'react';

import './Rating.css';

const Rating = () => {
    return (
        <div>
            <h6> Rating out of 5</h6>
<form action="/action_page.php">
  <select name="cars">
    <option value="1">1</option>
    <option value="1">1.5</option>
    <option value="1">2</option>
    <option value="1">2.5</option>
    <option value="3">3</option>
    <option value="3">3.5</option>
    <option value="4">4</option>
    <option value="4">4.5</option>
    <option value="5">5</option>
  </select>
</form>
        </div>
    )
}
 
export default Rating;