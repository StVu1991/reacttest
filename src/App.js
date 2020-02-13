import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Adding Dynamic Data to our react App
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName : "Stjepan",
      todoItems : [
        {action:"Buy a flowers", done:false},
        {action:"Do workout", done:true},
        {action:"Study React", done:false},
        {action:"Call a friend", done:true}],
        newToDoItemText:" "
    }
  }

  updateNewToDoItemText = (event) => {
    this.setState({newToDoItemText : event.target.value});
  }

  createNewToDoTask = () => 
  {
    if (!this.state.todoItems.find(item => item.action === this.state.newToDoItemText))
    {
      this.setState ({
        todoItems :  [...this.state.todoItems,
            {action : this.state.newToDoItemText, done: false}], newToDoItemText : ""
      });
    }
  }

  changeStateData = () => {
    this.setState(
      {userName: this.state.userName === "Stjepan" ? "Dinosaur" : "Stjepan"}
      )
  }

  render()
  {
    return(
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName} Todo List
          ({this.state.todoItems.filter(t => !t.done).length}) items to do
        </h4>

          <div className = "container-fluid">
            <div className="m-1">
              <input className="form-control" value={this.state.newToDoItemText} onChange={this.updateNewToDoItemText}></input>
              <button className="btn btn-danger mt-1" onClick={this.createNewToDoTask}>
                Add a new task
              </button>
            </div>
          </div>
      </div>
    );
  }
}
