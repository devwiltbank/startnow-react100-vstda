import React, { Component } from 'react';

export class List extends Component {
  constructor(props) {
    super(props);
    this.state            = props.task;
    this.handleChange     = this.handleChange.bind(this);
    this.handleSaveTask   = this.handleSaveTask.bind(this);
    this.handleEditTask   = this.handleEditTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  handleChange (event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  handleSaveTask () {
    const save = this.state;
    save.editEnabled = false;
    this.setState ({ save });
    this.props.onSave(this.state);
  }

  handleEditTask () {
    this.setState ({ editEnabled: true });
  }

  handleDeleteTask () {
    this.props.onDelete(this.state);
  }
  
  render () {
    const alertType = {
      1: 'alert alert-success m-0',
      2: 'alert alert-warning m-0',
      3: 'alert alert-danger m-0'
    };

    const alertT = alertType[this.state.priority];

    if ( this.state.editEnabled === true ) {
      return (
        <div className={ alertT } role='alert'>
              <label htmlFor='edit'>Description</label>
                <textarea className='form-control update-todo-text' 
                          id='update-todo-text'
                          rows='5' 
                          value={ this.state.text}
                          name='text'
                          onChange={ this.handleChange }
                          >
                </textarea>
            <div className='card-text'>
              <label htmlFor='priority'>Priority</label>
                <div className='input-group mb-3 col-6'>
                  <select className='custom-select update-todo-priority'
                          id='update-todo-priority'
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
              <div className='col-2 btn pull-right'>
                <button
                  className='button btn btn-success text-white update-todo'
                  id='update-todo'
                  name='submit'
                  onClick={ this.handleSaveTask }
                  type='button'
                >
                Save
                </button>
              </div>
        </div>
 
      );
    }
    return (
      <div className={ alertT } role='alert'>
        <input type='checkbox' ></input>
          <label className='align-bottom'>
            { this.state.text }
          </label>
        <span className='delete-todo oi oi-trash pull-right' 
              id='delete-todo'
              name='delete-todo'
              role='button' 
              onClick={ this.handleDeleteTask }>
        </span>
        <span className='edit-todo oi oi-pencil pull-right' 
              id='edit-todo'
              role='edit' 
              name='edit-todo'
              onClick={ this.handleEditTask }
              >&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>       
    ); 
  }
}