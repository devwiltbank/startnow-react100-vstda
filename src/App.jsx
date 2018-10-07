import React, { Component } from 'react';
 import { AddToDo } from './AddToDo';
 import { Item } from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
   this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    
  }

  handleDelete({ index } ) {

  }
  
  defaultMessage() {
    if (this.state.message < messages.length) {
      return (
          <div className='container'>
          default message
          </div>
      ); 
  }
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
           
            

          <AddToDo />
          <Item />
          

        </div>
      </div>
    );
  }
}

export default App;