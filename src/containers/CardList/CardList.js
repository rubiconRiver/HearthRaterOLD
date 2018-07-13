import React, { Component } from "react";
import axios from "../../Axios";

import Entry from "../../components/Entry/Entry";
import "./CardList.css";

class CardList extends Component {
  //This is kinda ugly right now but I'll get it fixed.  Should I initialize an empty state?
  //or should I have a separate file with state initialize state from that file?
  state = {
    cards: [
      {
        name: "Biology Project",
        imgSource:
          "https://assets.webn.mobi/hearthstone/e870a08a5b1b767718f62f5aedc4ab1ef22ac390db17b454d007de42fbe65987.png"
      },
      {
        name: "Myra's Unstable Element",
        imgSource:
          "https://assets.webn.mobi/hearthstone/3953c5ca2f58247cec8036b6d531f25a69b533ff7b5c1a7f7348452c99570d3d.png"
      },
      {
        name: "Electra Stormsurge",
        imgSource:
          "https://assets.webn.mobi/hearthstone/3a5d4d950cefae0778444e9f564f93fc54e86c932c27737a1d3cc1fc481a2588.png"
      },
      {
        name: "Spider Bomb",
        imgSource:
          "https://assets.webn.mobi/hearthstone/fd8326fa0b1dc90f2781caedc8e429a0a03ef3e00cd99d81ef8ba0676117ac3f.png"
      },
      {
        name: "Omega Defender",
        imgSource:
          "https://assets.webn.mobi/hearthstone/17e9d8b4e4b09155afb03c2f2ebe64cfe05ce013f48dc0bf85c7163be8c07c46.png"
      },
      {
        name: "Stargazer Luna",
        imgSource:
          "https://assets.webn.mobi/hearthstone/fc16101c383fe60be94a760cf7fdcf020dc97f8690f57897b65b77a6bdb606a8.png"
      }
    ]
  };

  componentDidMount() {
    axios
      .get("https://hearthrater.firebaseio.com/CardList.json")
      .then(response => {
        //  const cards = response.data;
        console.log(response.data);
        // const updatedCards = cards.map(card => {
        //     return {
        //         ...card,
        //         author: "Garett"
        //     }
        // });
        // console.log("[cards]" + cards);
        // console.log("[updatedCards}" + updatedCards);
      });
  }

  render() {
    const entryList = this.state.cards.map(card => {
      return (
        <div className="CardList">
          <Entry key={card.name} props={card} />
        </div>
      );
    });

    return <div>{entryList}</div>;
  }
}

export default CardList;
