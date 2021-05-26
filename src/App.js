import { useState } from 'react';

import './App.scss';

import Search from './components/Search';
import List from './components/List';

function App() {
  /**
   * Component's data, props and state
   */
  const [filter, setFilter] = useState('');

  /**
   * Get data from <Search /> and set to internal state
   */
  const doSearch = (str) => {
    setFilter(str);
  }

  /**
   * Template
   */
  return (
    <div className="container app">
      <h1>Rick & Morty API homework</h1>

      <Search search={doSearch} />
      <List filter={filter} />
    </div>
  );
}

export default App;
