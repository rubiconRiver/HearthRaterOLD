import React, { Component } from 'react';
import axios from '../../Axios'

import Entry from '../../components/Entry/Entry';
import './CardList.css';

const CARDNUMBER = 3;

class CardList extends Component {
    state = {
        cardNumber: CARDNUMBER,
        cards: []
    }

    componentDidMount() {
        
    
    axios.get("https://hearthrater.firebaseio.com/CardList.json").then(response => {
        const cards = response.data;
        console.log(response.data);
        // const updatedCards = cards.map(card => {
        //     return {
        //         ...card,
        //         author: "Garett"
        //     }
        // });
        // console.log("[cards]" + cards);
        // console.log("[updatedCards}" + updatedCards);
    })

}

    render() { 

        let entryList = [];

        for (var i = 0; i < this.state.cardNumber; i++) {
            entryList.push(
                <div>
                    <Entry key={i}/>
                </div>
            )
        }


        return (  
            <div>
                {entryList}
            </div>
        )
    }
}
 
export default CardList;