import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todosList: [],
      value: '',
      currentID: 1
    }
  }
  
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }
  
  addTodo = () => {
    if (this.state.value.trim() === '') {
      return;
    }
    
    const todo = {
      id: this.state.currentID,
      text: this.state.value,
      completed: false
    }
    const updatedTodosList = this.state.todosList.slice();
    updatedTodosList.push(todo);
    
    this.setState({
      todosList: updatedTodosList,
      value: '',
      currentID: this.state.currentID + 1
    });
  }
  
  toggleTodo = (todo, index) => {
    todo.completed = !todo.completed;
    const updatedTodosList = this.state.todosList.slice();
    updatedTodosList.splice(index, 1, todo);
    this.setState({
      todoList: updatedTodosList
    });
  }
  
  deleteTodo = (todo, index) => {
    const updatedTodosList = this.state.todosList.slice();
    console.log(updatedTodosList);
    updatedTodosList.splice(index, 1);
    console.log(updatedTodosList);
    this.setState({
      todosList: updatedTodosList
    });
  }
  
  render() {
    return(
      <div className="todo">
      <div className="todo__add">
        <input 
          type="text" 
          value={this.state.value} 
          className="todo__input" 
          placeholder="Введите текст задачи"
          onChange={(e) => this.handleChange(e)}
          />
        <button type="button" className="todo__add-btn" onClick={this.addTodo}>Добавить задачу</button>
      </div>
      <ol className="todo__list">
        {this.state.todosList.length === 0 ? '' : this.state.todosList.map((item, index) => {
          return (
            <li key={item.id} className="todo__item">
              <div className="todo__item-inner">
                <input type="checkbox" id={item.id} checked={item.completed} onChange={() => this.toggleTodo(item, index)}/>
                <label htmlFor={item.id} className={item.completed ? 'todo__label completed' : 'todo__label'}>{item.text}</label>
                <button className="todo__delete-btn" type="button" onClick={() => this.deleteTodo(item, index)}>Удалить</button>
              </div>
            </li>
          )
            
        })}
      </ol>
    </div>
    );
  }
}

export default App;
