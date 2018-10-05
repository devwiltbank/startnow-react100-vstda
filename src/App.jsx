import React, { Component } from 'react';
// import AddToDo from './AddToDo';
// import ViewToDo from './ViewToDo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPriority: '',
      message: '',
      id: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
     [event.target.name] : event.target.value
    });
  }
  
  
  addToDo() {

    
  this.setState({
      priority: priority,
      message: message,
      id: id,
    });
  }

  render() {
    return (
      <div className='container'>
          <div className='light border-bottom text-light mb-4'>
            <h1>Very Simple Todo App</h1>
            <h4>Track all of the things</h4>
          </div> 
        <div className='row'>
            {/* Insert my AddToDo and ViewToDo REACT components below*/}
            <div className='col-4'>
           <div className='card'>
              <h6 className='card-header text-secondary'>Add New Todo</h6>
              <div className='card-body'>
                <div className='form-group'>
                  <label>I want to..</label>
                  <textarea className='form-control message '
                            rows='5' 
                            id='idtodoinput'
                            name='message'
                            // value={ this.state.message }
                            onChange={ this.handleChange }
                            >
                  </textarea>
                </div>
                <div className='card-text'>
                 <label>How much of a priority is this?</label>
                      <div className='input-group mb-3'>
                        <select className='custom-select' 
                                id='addselectid'
                                name='priority'
                                onChange={ this.handleChange }
                                >
                          <option>Choose...</option>
                          <option value='1'>High Priority</option>
                          <option value='2'>Medium Priority</option>
                          <option value='3'>Low Priority</option>
                        </select>
                      </div>         
                </div>
              </div>
              <div className='card-footer'>
                <button
                  className='button btn btn-success text-white submit'
                  onClick={ this.addToDo }
                >
                Add
                </button>
              </div>
            </div>
          </div>


          {/* <AddToDo.jsx />
          <ViewToDo.jsx /> */}
          <div className='col-8'>
            <div className='card'>
              <h6 className='card-header text-secondary'>View ToDos</h6>
                <div className='m-4'> 
                    <div className='form-group'>
                      <label>Description</label>
                        <textarea className='form-control' rows='5' id='editToDo'></textarea>
                    </div>
                  <div className='card-text'>
                    <label>Priority</label>
                        <div className='input-group mb-3 col-6'>
                          <select className='custom-select'
                                  id='editselectid'
                                  name='editPriority'
                                  onChange={ this.handleChange }
                                  >
                            <option>set current priority state here</option>
                            <option value='1'>High Priority</option>
                            <option value='2'>Medium Priority</option>
                            <option value='3'>Low Priority</option>
                          </select>
                        </div>
                      </div>  
                        <div className='col-2 btn pull-right'>
                      <button
                        className='button btn btn-success text-white submit'
                        name='submit'
                        onClick={ this.addToDo }
                      >
                      Save
                      </button>
                  </div>
                </div> 
            </div>
                <div className='well well-sm custom-control custom-checkbox'>
                  <input type='checkbox' 
                        className='custom-control-input' 
                        name='checkbox'
                        id='customCheck1'>
                  </input>
                  <label className='custom-control-label ml-3'>Insert Todo here</label>
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default App;