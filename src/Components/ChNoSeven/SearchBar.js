import React, { Component } from 'react';

export class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit(event) {
    event.preventDefault();
    // console.log(this.state.term);
  }

  render() {
    return (
      <>
        <div className='ui segment'>
          <form onSubmit={this.onFormSubmit} className='ui form'>
            <div className='field'>
              <label>Image Search</label>
            </div>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </form>
        </div>
      </>
    );
  }
}

export default SearchBar;
