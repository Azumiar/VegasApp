import React, { Component } from 'react';

import { Header } from './blocks/Header/Header';
import { Users } from './blocks/Users/Users';
import { News } from './blocks/News/News';
import { Footer } from './blocks/Footer/Footer';

import './App.css';

class App extends Component {
  state = {
    users: [],
    news: [],
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Users onSubmit={this.onUserSubmit} data={this.state.users}/>
          <News onSubmit={this.onNewsSubmit} data={this.state.news}/>
        </div>
        <Footer/>
      </div>
    );
  }

  componentDidMount() {
    fetch('/api/users')
      .then(data => data.json())
      .then(data => {
        this.setState({ users: data });
      }).catch(e => {});

    fetch('/api/news')
      .then(data => data.json())
      .then(data => {
        this.setState({ news: data });
      }).catch(e => {});
  }

  onUserSubmit(data) {
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }

  onNewsSubmit(data) {
    fetch("http://localhost:3000/api/news",{
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
}

export default App;
