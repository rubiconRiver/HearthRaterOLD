import React, {useState, useEffect} from "react";

import Entry from "../../components/Entry/Entry";
import "./CardList.css";

export default function CardList(props) {
  
  const [fetchJSON, setFetchJSON] = useState(undefined);
  useEffect(() => {
      fetchData();
  }, [])

function fetchData(){
  fetch("http://localhost:9000/cards", {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => {setFetchJSON(json)
  })

}

  return(
    <div>
    {fetchJSON ? fetchJSON.map(({id, name, imageURL, cardRatings }) => (
        <div key={id} className="CardList">
          <Entry cardId={id} name={name} imgSource={imageURL} notes={cardRatings[0] ? cardRatings[0].notes : null}/>
        </div> 
        )) 
        : null }  
    </div>
      );
  }
