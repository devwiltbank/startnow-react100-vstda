import React, { Component } from 'react';

class App extends Component {

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
                <div className="form-group">
                  <label for="comment">I want to..</label>
                  <textarea className="form-control" rows="5" id="comment"></textarea>
                </div>
                <div Name='card-text'>
                 <label for="comment">How much of a priority is this?</label>
                      <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                          <option selected>Choose...</option>
                          <option value="1">High Priority</option>
                          <option value="2">Medium Priority</option>
                          <option value="3">Low Priority</option>
                        </select>
                      </div>         
                </div>
              </div>
              <div className='card-footer'>
                <button
                  className='button btn btn-success text-white'
                  id='calculateChange'
                  name='submit'
                  onClick=''
                >
                Add
                </button>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div className='card'>
              <h6 className='card-header text-secondary'>View ToDos</h6>
                
                  
             
              {/* <div className='form-group'>
                      <label for='comment'>Description</label>
                      <textarea className='form-control' rows='5' id='comment'></textarea>
                  </div>
                  <div Name='card-text'>
                  <label for='comment'>Priority</label>
                        <div className='input-group mb-3 col-6'>
                          <select className='custom-select' id='inputGroupSelect01'>
                            <option selected>set current priority state here</option>
                            <option value='1'>High Priority</option>
                            <option value='2'>Medium Priority</option>
                            <option value='3'>Low Priority</option>
                          </select>
                        </div>
                        <div className='col-2 btn pull-right'>
                      <button
                        className='button btn btn-success text-white'
                        id='calculateChange'
                        name='submit'
                        onClick=''
                      >
                      Save
                      </button>
                  </div>
                </div> */}
           

          </div>



                <div className='well well-sm custom-control custom-checkbox'>
                  <input type='checkbox' 
                         className='custom-control-input' 
                         id='customCheck1'>
                  </input>
                  <label className='custom-control-label ml-3'
                         for='customCheck1'>
                         Insert Todo here
                  </label>
                </div>



          </div>
        </div>
      </div>
    );
  }
}

export default App;


// class List extends App{
//   render() {
//     return(
//       <div className='list'>
        
//       </div>
//     )
//   }
// }

// class Search extends App{
//   render() {
//     return(
//       <div className='search'>
//         <input/>
//         <button> Add ToDo </button>
//       </div>
//     )
//   }
// }
