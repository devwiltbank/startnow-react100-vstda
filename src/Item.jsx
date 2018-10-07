import React, { Component } from 'react';

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    //this.something = this.something.bind(this);
  }

editToDo() {

}

delete() {

}

  render () {
    return (
    <div className='container'>
      <div className='col-8'>
      <div className='card'>
        <h6 className='card-header text-secondary'>View ToDos</h6>
          <div className='m-4'> 
              <div className='form-group'>
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
          </div> 
      </div>
      

                  {/* add another conditional render here() */}
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
    );
  }
}
