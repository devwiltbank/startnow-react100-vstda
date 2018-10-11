import React, { Component } from 'react';
import { List } from './list';

let addClickCount = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      priority: 1,
      todoList: []
    };

    this.handleChange   = this.handleChange.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.deleteHandler  = this.deleteHandler.bind(this);
    this.saveHandler    = this.saveHandler.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name  = event.target.name;
    this.setState ({ [name]: value });
  }

  handleAddEvent(event) {
    event.preventDefault();
    addClickCount += 1;
    const todoList = this.state.todoList;
    const newListObject = this.createObject(this.state.text, this.state.priority, addClickCount);
    
    this.setState ({
      text: '',
      todoList: todoList.concat(newListObject)
    });
  }

  createObject (txt, prty, key) {
    return [{
      id: key,
      text: txt,
      priority: prty,
      editEnabled: false
    }];
  }

  deleteHandler (listItem) {
    const newList = [...this.state.todoList]; 
    const index = newList.map(key => key.id).indexOf(listItem.id);
    newList.splice(index, 1);
    this.setState ({ todoList: newList });
  }
  
  saveHandler (listItem) {
    const newList = [...this.state.todoList];
    const index   = newList.map(key => key.id).indexOf(listItem.id);
    newList.splice(index, 1, listItem);
    this.setState ({ todoList: newList });
  }
   
  render() {
    return (
      <div className='container'>
          <div className='light border-bottom text-light mb-4'>
            <h1>Very Simple Todo App</h1>
            <h4>Track all of the things</h4>
          </div> 
        <div className='row'>
          <div className='col-4'>
              <div className='card'>
              <h6 className='card-header text-secondary'>Add New Todo</h6>
              <div className='card-body'>
                  <div className='form-group text-secondary'>
                  <label htmlFor='create'>I want to..</label>
                  <textarea className='form-control create-todo-text'
                            rows='5' 
                            id='create-todo-text'
                            name='text'
                            value={ this.state.text }
                            onChange={ this.handleChange }
                            >
                  </textarea>
                  </div>
                  <div>
                  <label className='text-secondary'>How much of a priority is this?</label>
                      <div className='input-group mb-3'>
                          <select className='form-control custom-select text-secondary create-todo-priority' 
                                  id='create-todo-priority'
                                  name='priority'
                                  value={ this.state.priority }
                                  onChange={ this.handleChange }
                                  >
                          <option value='1'>Low Priority</option>
                          <option value='2'>Medium Priority</option>
                          <option value='3'>High Priority</option>
                          </select>
                      </div>         
                  </div>
              </div>
                  <div className='card-footer'>
                      <button
                      className='button btn btn-success text-white create-todo'
                      id='create-todo'
                      type='button'
                      name='create-todo'
                      onClick={ this.handleAddEvent }
                      >
                      Add
                      </button>
                  </div>
              </div>
          </div>
          <div className='col-8'>
              <div className='card'>
                <h6 className='card-header text-secondary'>View Todos</h6>
                  {( this.state.todoList.length === 0 ) ?
                  (<div className='alert alert-primary card-text'>
                  <label className='text-secondary'>Welcome to Very Simple ToDo App!</label>
                  <div className='text-secondary'>Get started now by adding a new todo on the left.</div>
                  </div>
                ) : 
                ( this.state.todoList.map(list => (
                   <List onDelete={ this.deleteHandler }
                         onSave={ this.saveHandler }
                         key={ list.id }
                         task={ list }
                   />)))
              }
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;