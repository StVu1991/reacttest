import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Adding Dynamic Data to our react App
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName : "Stjepan"
    }
  }

  render()
  {
    return(
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName} React Course
        </h4>
      </div>
    );
  }
}
