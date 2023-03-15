import React from 'react'
import Card from './card'

const numberOfCards = 9;

class CardList extends React.Component {
    insertCards(times: number) {
        let cards = [];
        for (let i = 0; i < times; i++) {
            cards.push(<Card key={i} />);
        }
        return <div className='cardsContainer'>{cards}</div>
    }

    render() {
        return (
            <>
                {this.insertCards(numberOfCards)}
            </>
        );
    }
}

export default CardList;