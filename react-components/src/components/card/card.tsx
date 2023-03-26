import React from 'react';

export type CardProps = {
  title: string;
  author: string;
  description: string;
};

class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="cardContent">
          <div className="cardImage"></div>
          <p className="titleText cardTitle">{this.props.title}</p>
          <p className="mainText cardAuthor">{this.props.author}</p>
          <hr></hr>
          <p className="mainText cardText">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
