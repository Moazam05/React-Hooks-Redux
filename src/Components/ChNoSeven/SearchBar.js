import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <>
        <div className='ui input'>
          <input type='text' placeholder='Search...' autoComplete='off' />
        </div>
        {/* <div>
          <form>
            <input type='text' />
          </form>
        </div> */}
      </>
    );
  }
}

export default SearchBar;
