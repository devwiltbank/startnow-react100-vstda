import React, { Component } from 'react';

export class Addtodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
   
  }
  
  render () {
    return (
        <div className='col-4'>
            <div className='card'>
            <h6 className='card-header text-secondary'>Add New Todo</h6>
            <div className='card-body'>
                <div className='form-group text-secondary'>
                <label>I want to..</label>
                <textarea className='form-control'
                            rows='5' 
                            id='id'
                            name='message'
                            // value={ this.state.message }
                            onChange={ this.setState }
                            >
                </textarea>
                </div>
                <div>
                <label className='text-secondary'>How much of a priority is this?</label>
                    <div className='input-group mb-3'>
                        <select className='form-control custom-select text-secondary' 
                                id='inputGroupSelect01'
                                name='priority'
                                onClick={ this.addToDo }
                                >
                        <option defaultValue='' disabled hidden>Select a Priority</option>      
                        <option value='1'>High Priority</option>
                        <option value='2'>Medium Priority</option>
                        <option value='3'>Low Priority</option>
                        </select>
                    </div>         
                </div>
            </div>
                <div className='card-footer'>
                    <button
                    className='button btn btn-success text-white'
                    id='id2'
                    name='submit'
                    onClick={ this.addToDo }
                    >
                    Add
                    </button>
                </div>
            </div>
        </div>      
             
    
    );
  }
}
