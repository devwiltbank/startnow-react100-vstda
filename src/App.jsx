import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className='container'>

      </div>
    );
  }
}

export default App;


class List extends App{
  render() {
    return(
      <div className='list'>
        
      </div>
    )
  }
}

class Search extends App{
  render() {
    return(
      <div className='search'>
        <input/>
        <button> Add ToDo </button>
      </div>
    )
  }
}
