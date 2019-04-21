import React, {useState, useEffect} from "react";

import Entry from "../../components/Entry/Entry";
import "./CardList.css";

export default function CardList(props) {
  
  const [fetchJSON, setFetchJSON] = useState(undefined);
  useEffect(() => {
      fetchData();
  }, [])

function fetchData(){
  fetch("http://localhost:9000/cardrating", {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => setFetchJSON(json))

    console.log(fetchJSON)
}

  return(
    <div>
    {fetchJSON ? fetchJSON.map(({name, imageURL}) => (
        <div className="CardList">
          <Entry name={name} imgSource={imageURL} />
        </div> )) 
        : null }
    </div>
      );
  }
