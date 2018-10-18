import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header>
          <nav>
              <div className="nav-wrapper container">
                  <a href="#" className="brand-logo">Панель управления</a>
              </div>
          </nav>
      </header>
    );
  }
}
