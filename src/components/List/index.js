
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

const List = () => {
  const URL = 'https://rickandmortyapi.com/api/character'
  const [pag, setPag] = useState(mock.pagination);
  const [items, setItems] = useState([]);

  const getData = (endpoint) => http(endpoint).then(data => {
    setPag(data.info);
    setItems(data.results);
  });

  const navigate = (direction) => direction === 'next' ?
    getData(pag.next) : getData(pag.prev);

  useEffect(() => 
    window.scrollTo({ top: 0, behavior: 'smooth' })
  , [pag]);

  useEffect(() => {
    getData(URL);
  }, []);

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