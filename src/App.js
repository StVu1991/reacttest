import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import{ToDoBanner} from "./ToDoBanner"
import{ToDoCreator} from "./ToDoCreator"
import{ToDoRow} from "./ToDoRow"

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
    }
  }

  updateNewToDoItemText = (event) => {
    this.setState({newToDoItemText : event.target.value});
  }

  createNewToDo = (task) => 
  {
    if (!this.state.todoItems.find(item => item.action === task))
    {
      this.setState ({
        todoItems :  [...this.state.todoItems,
            {action : task, done: false}]
      });
    }
  }

  toggleToDo = (todo) => this.setState ({
    todoItems : this.state.todoItems.map(item => item.action === todo.action ? {...item, done:!item.done} : item )}
    );

  toDoTableRows = () => this.state.todoItems.map( item => 
                        <ToDoRow key={item.action}  item={item} callback={this.toggleToDo}></ToDoRow>
                          );

  render = () =>
      <div>

          <ToDoBanner name={this.state.userName}></ToDoBanner>

          <div className = "container-fluid">
            <div className="m-1">
              <input className="form-control" value={this.state.newToDoItemText} onChange={this.updateNewToDoItemText}></input>
              <button className="btn btn-danger mt-1" onClick={this.createNewToDoTask}>
                Add a new task
              </button>
            </div>


            <table className="table table-striper table-bordered">
              <thead>
                <tr>
                  <th>
                    ToDo Task Name
                  </th>
                  <th>
                    Done
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.toDoTableRows()}
              </tbody>
            </table>

          </div>
      </div>

}
