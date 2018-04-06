import React, { Component } from 'react';

import Entry from '../../components/Entry/Entry';

const CARDNUMBER = 12

class CardList extends Component {
    state = {
        cardNumber: CARDNUMBER
    }

    render() { 

        let entryList = [];

        for (var i = 0; i < this.state.cardNumber; i++) {
            entryList.push(
                <div>
                    <Entry/>
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