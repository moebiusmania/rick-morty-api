
import { useState, useEffect } from 'react';

import Card from './../Card';
import { http } from './../../utils/http';

const mock = {
  pagination: {
    count: 0,
    pages: 0,
    next: '',
    prev: ''
  }
}

const List = (props) => {
  /**
   * Component's data, props and state
   */
  const URL = 'https://rickandmortyapi.com/api/character';
  const filter = props.filter || '';

  const [pag, setPag] = useState(mock.pagination);
  const [items, setItems] = useState([]);

  /**
   * Internal utilities
   */
  const getData = (endpoint) => http(endpoint).then(data => {
    setPag(data.info);
    setItems(data.results);
  });

  const addFilter = (str, concat) => `${str}${concat ? '&' : '/?'}name=${filter}`;

  const navigate = (direction) => direction === 'next' ?
    getData(addFilter(pag.next, true)) : getData(addFilter(pag.prev, true));

  /**
   * Side Effects
   */
  useEffect(() => 
    window.scrollTo({ top: 0, behavior: 'smooth' })
  , [pag]);

  useEffect(() => {
    getData(addFilter(URL));
    // eslint-disable-next-line
  }, [filter]);

  useEffect(() => {
    getData(URL);
  }, []);

  /**
   * Template
   */
  return (
    <>
      <ul className="list-unstyled cards">
        {items.map(e => <li key={e.id}><Card data={e} /></li>)}
      </ul>
      
      <div className="btn-group navigation" role="navigation" aria-label="navigation">
        {pag.prev ? 
          <button type="button" className="btn btn-outline-primary" onClick={() => navigate('prev')}>&laquo; Prev</button> 
        : null }

        {pag.next ? 
          <button type="button" className="btn btn-outline-primary" onClick={() => navigate('next')}>Next &raquo;</button> 
        : null }
      </div>

      <p>Total: <strong>{pag.count}</strong> items in <strong>{pag.pages}</strong> pages</p>
    </>
  )
}

export default List;