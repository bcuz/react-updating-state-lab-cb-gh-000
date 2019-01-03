// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

  info = () => {
      console.log('Entering password...');
    }

  render() {
    return (
      <div>
        <input onKeyUp={this.info} type="password" />
      </div>
    )
  }
}