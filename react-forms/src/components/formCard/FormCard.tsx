import React from 'react';

export interface FormCardProps {
  name: string;
  date: string;
  hasWeapon: boolean;
  preferredSide: string;
  homePlanet: string;
  picture: string;
}

class FormCard extends React.Component<FormCardProps> {
  constructor(props: FormCardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card formCard">
        <div className="cardContent">
          <div className="cardImage">{this.props.picture}</div>
          <hr></hr>
          <p className="mainText">Name: {this.props.name}</p>
          <p className="mainText">Date of creation: {this.props.date}</p>
          <p className="mainText">Has own weapon: {this.props.hasWeapon ? 'absolutely' : 'liar'}</p>
          <p className="mainText">Preferred side: {this.props.preferredSide}</p>
          <p className="mainText">Home Planet: {this.props.homePlanet}</p>
        </div>
      </div>
    );
  }
}

export default FormCard;
