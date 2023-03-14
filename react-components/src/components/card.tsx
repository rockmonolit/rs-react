import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="cardContent">
          <div className="cardImage">Image</div>
          <p className="titleText cardTitle">Title</p>
          <p className="mainText cardAuthor">Authot</p>
          <hr></hr>
          <p className="mainText cardText">Text</p>
        </div>
      </div>
    );
  }
}

export default Card;
