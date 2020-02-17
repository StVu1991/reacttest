import React, {Component} from 'react';

export class ToDoCreator extends Component
{
    constructor(props){
        super(props);
        this.state = {newToDoItemText : " "}
    } 

    updateNewTextValue = (event) => 
    {
        this.setState({newToDoItemText : event.target.value});
    }

    createNewToDo = () => 
    {
        this.props.callback(this.state.newToDoItemText);
        this.setState({newToDoItemText:""});
    }

    render = () => 
    <div className="my-1">
        <input className="form-control" value={this.state.newToDoItemText} onChange={this.updateNewTextValue}></input>
        <button className="btn btn-primary mt-1" onClick={this.createNewToDo}>Add New Task</button>
    </div>

}