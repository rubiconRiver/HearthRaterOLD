import React, { useState, useEffect } from "react";

import Entry from "../../components/Entry/Entry";
import "./CardList.css";

//this component is way too bloated and needs to be separated

export default function CardList(props) {
  const [fetchJSON, setFetchJSON] = useState(undefined);
  const [classFilter, setClassFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [rarityFilter, setRarityFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  // eslint-disable-next-line
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

      console.log(localStorage.getItem('authentication'))
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

  const rarityChange = event => {
    setRarityFilter(event.target.value);
  };

  const sortChange = event => {
    setSortBy(event.target.value);
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

      <select name="rarity" onChange={rarityChange} value={rarityFilter}>
        <option value="All">All Card Rarities</option>
        <option value="Common">Common</option>
        <option value="Rare">Rare</option>
        <option value="Epic">Epic</option>
        <option value="Legendary">Legendary</option>
      </select>

      {/* <select name="type" onChange={sortChange} value={sortBy}>
        <option value="name">Name</option>
        <option value="mana">Mana</option>
        <option value="class">Class</option>
      </select> */}

      <div className="cardList">
        {fetchJSON ? (
          fetchJSON
            .filter(json => {
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
            .filter(json => {
              if (rarityFilter === "All") {
                return true;
              } else {
                return json.rarity === rarityFilter;
              }
            })
            .sort((a, b) => {
              if (sortBy === "name") {
                if (a.name < b.name) {
                  return -1;
                }
              }
              if (sortBy === "class") {
                if (a.class > b.class) {
                  return -1;
                }
              }
              return a.name > b.name;
            })

            .map(({ id, name, imageURL, cardRatings, card_type }) => (
              <div key={id}>
                <Entry
                  saved={setSaved}
                  cardId={id}
                  name={name}
                  imgSource={imageURL}
                  notes={cardRatings[0] ? cardRatings[cardRatings.length - 1].notes : null}
                  rating={cardRatings[0] ? cardRatings[cardRatings.length - 1].rating : null}
                />
              </div>
            ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
