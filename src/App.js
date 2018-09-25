import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: 'App title'
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      title: 'New app title'
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}>Click here!</div>
        <MyComponent
          title='This is the component title'
          name='learn react'
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
