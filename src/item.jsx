import React, { Component } from 'react';

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    //this.something = this.something.bind(this);
  }
    
  render () {
    return (
      <div className='alert alert-warning custom-control custom-checkbox m-0'>
        <input type='checkbox' 
               className='custom-control-input ' 
               id='customCheck1'>
        </input>
        <label className='custom-control-label ml-3'
               >
               Insert Todo here
        </label>
        <span className='oi oi-trash pull-right' title='Delete To Do' aria-hidden='true'></span>
        <span className='oi oi-pencil pull-right' title='Edit To Do' aria-hidden='true'>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>               
    );   
  }
}
