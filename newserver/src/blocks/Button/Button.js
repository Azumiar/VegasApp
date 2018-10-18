import React, { Component } from 'react';

import './Button.css';

export class Button extends Component {
  render() {
    return (
        <button
          className={"vegas-btn transparent " + this.props.className}
          onClick={this.props.onClick}>
            {this.props.text}
        </button>
    );
  }
}
