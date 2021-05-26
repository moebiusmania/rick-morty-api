import { useState } from 'react';

const Search = (props) => {
  /**
   * Component's data, props and state
   */
  const [name, setName] = useState('');

  /**
   * Pass data to parent component
   */
  const doSearch = (evt) => {
    evt.preventDefault();
    if (props.search) {
      props.search(name.toLocaleLowerCase());
    }
  }

  /**
   * Template
   */
  return (
    <form onSubmit={doSearch}>
      <div class="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search a character by name"
          aria-label="Search a character by name" aria-describedby="button-addon2"
          onChange={evt => setName(evt.target.value)} value={name} />
        <button className="btn btn-outline-primary" type="button">Search</button>
      </div>
    </form>
  )
}

export default Search;