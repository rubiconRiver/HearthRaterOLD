import React, { Component } from 'react';
import axios from '../../Axios'

import Entry from '../../components/Entry/Entry';

const CARDNUMBER = 3;

class CardList extends Component {
    state = {
        cardNumber: CARDNUMBER,
        cards: []
    }

    componentDidMount() {
        
    
    axios.get("https://hearthrater.firebaseio.com/CardList.json").then(response => {
        const cards = response.data;
        console.log(cards);
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