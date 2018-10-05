AddToDo() {
  render () {
    return (
        <div>
         <div className='col-4'>
           <div className='card'>
              <h6 className='card-header text-secondary'>Add New Todo</h6>
              <div className='card-body'>
                <div className='form-group'>
                  <label for='comment'>I want to..</label>
                  <textarea className='form-control'
                            rows='5' 
                            id='id'
                            name='message'
                            value={ this.state.message }
                            onChange={ this.addToDo }
                            >
                  </textarea>
                </div>
                <div name='card-text'>
                 <label for='comment'>How much of a priority is this?</label>
                      <div className='input-group mb-3'>
                        <select className='custom-select' 
                                id='inputGroupSelect01'
                                name='priority'
                                onChange={ this.handleChange }
                                >
                          <option selected>Choose...</option>
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
        </div>
    );
  }
}

export default AddToDo;