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
          <div className="formCardImage">
            <p className='pictureText'>{this.props.picture}</p></div>
          <hr></hr>
          <p className="mainText cardText">Name: {this.props.name}</p>
          <p className="mainText cardText">Date of creation: {this.props.date}</p>
          <p className="mainText cardText">Has own weapon: {this.props.hasWeapon ? 'absolutely' : 'liar'}</p>
          <p className="mainText cardText">Preferred side: {this.props.preferredSide}</p>
          <p className="mainText cardText">Home Planet: {this.props.homePlanet}</p>
        </div>
      </div>
    );
  }
}

export default FormCard;
