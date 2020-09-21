import React, { Component } from 'react';
import ItemList from './components/ItemList';
import './App.css';

class App extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          items:data
        });
      })
      .catch((err) => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
