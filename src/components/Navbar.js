import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Navbar.css';
import { Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { fetchSearchMeal } from '../redux/meal/mealActions';

function Navbar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClickSearch = () => {
    if (search !== '') {
      dispatch(fetchSearchMeal(search));
      history.push('/search');
      setSearch('');
    }
    setSearch('');
  };

  return (

    <nav className="my-navbar">
      <ul className="nav-list">
        <div className="meal-logo">
          <Link to="/">Meal catalogue</Link>
        </div>
        <div className="list-item">
          <Link to="/">Home</Link>
          <Link to="/random">Random meal</Link>
          <Link to="/about">About us</Link>
        </div>
        <div className="search-item">
          <button type="button" className="search-icon" onClick={handleClickSearch}>
            {}
            <SearchIcon />
          </button>
          <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
          <label>
            <Input placeholder="search meals" color="primary" onChange={onInputChange} value={search} />
          </label>
        </div>
      </ul>
    </nav>

  );
}

export default Navbar;
