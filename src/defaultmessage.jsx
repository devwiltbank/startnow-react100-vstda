import React, { Component } from 'react';

export class DefaultMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    //this.something = this.something.bind(this);
  }
  
  render () {
    return (
      
        <div className='alert alert-primary card-text'>
            <label className='text-secondary'>Welcome to Very Simple ToDo App!</label>
            <div className='text-secondary'>Get started now by adding a new todo on the left.</div>
        </div>
    
    );
  }
}

//use this below

<div className={ alertT } role='alert'>
       
{/* <input type='checkbox' className='form-check-input'></input> */}
<input className="form-check-input"type="checkbox" id="checkbox"></input>
  <label className='form-check-label' for='checkbox'>
    { this.state.text }
  </label>
<span className='oi oi-trash pull-right delete-todo' 
      name='delete'
      role='button' 
      
      onClick={ this.handleDeleteTask }>
</span>
<span className='oi oi-pencil pull-right edit-todo' 
      role='edit' 
          name='edit'
      onClick={ this.handleEditTask }
      >&nbsp;&nbsp;&nbsp;&nbsp;
</span>
</div>       
