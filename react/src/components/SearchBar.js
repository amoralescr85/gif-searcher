import React from 'react';

const SearchBar = (props) => {

  return(
    <div>
      <form className="searchbar" onSubmit={props.handleFormSubmit}>
        <input
          type='text'
           placeholder='Search Gif'
          onChange={props.handleFormChange}
          className="searchtext"
          />

        <input className="buttonz"
        input type="submit"  value="Submit"  className="searchsubmit"/>

      </form>
    </div>

  )
}

export default SearchBar;
