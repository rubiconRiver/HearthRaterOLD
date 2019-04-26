import React, { useState, useEffect } from "react";

import Entry from "../../components/Entry/Entry";
import "./CardList.css";

export default function CardList(props) {
  const [fetchJSON, setFetchJSON] = useState(undefined);
  const [classFilter, setClassFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("http://localhost:9000/cards", {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        setFetchJSON(json);
      });
  }

  const classChange = event => {
    setClassFilter(event.target.value);
    if (event.target.value === "Neutral") {
      setTypeFilter("All");
    }
  };

  const typeChange = event => {
    setTypeFilter(event.target.value);
  };

  return (
    <div>
      <select name="class" onChange={classChange} value={classFilter}>
        <option value="All">All Classes</option>
        <option value="Neutral">Neutral</option>
        <option value="Mage">Mage</option>
        <option value="Rogue">Rogue</option>
        <option value="Warrior">Warrior</option>
        <option value="Warlock">Warlock</option>
        <option value="Paladin">Paladin</option>
        <option value="Shaman">Shaman</option>
        <option value="Hunter">Hunter</option>
        <option value="Priest">Priest</option>
        <option value="Druid">Druid</option>
      </select>

      <select name="type" onChange={typeChange} value={typeFilter}>
        <option value="All">All Card Types</option>
        <option value="Spell">Spell</option>
        <option value="Minion">Minion</option>
        <option value="Weapon">Weapon</option>
      </select>

      <div className="cardList">
        {fetchJSON
          ? fetchJSON
              .filter(json => {
                console.log("card_class: " + json.card_class);
                if (classFilter === "All") {
                  return true;
                } else {
                  return json.card_class === classFilter;
                }
              })
              .filter(json => {
                if (typeFilter === "All") {
                  return true;
                } else {
                  return json.card_type === typeFilter;
                }
              })
              .map(({ id, name, imageURL, cardRatings, card_type }) => (
                <div key={id}>
                  <Entry
                    saved={setSaved}
                    cardId={id}
                    name={name}
                    imgSource={imageURL}
                    notes={cardRatings[0] ? cardRatings[0].notes : null}
                    rating={cardRatings[0] ? cardRatings[0].rating : null}
                  />
                </div>
              ))
          : null}
      </div>
    </div>
  );
}
