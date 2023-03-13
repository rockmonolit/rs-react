import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="cardContent">
          <div className="cardImage">Image</div>
          <p className="cardTitle">Title</p>
          <p className="cardText">Text</p>
        </div>
      </div>
    );
  }
}

export default Card;
