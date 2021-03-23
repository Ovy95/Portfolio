import React from 'react';

const Categories = ({ filterItems }) => {
  return(
    <div className='btn-container'>
      <button className='filter-btn' onClick={() =>
      filterItems('all')}>all
      </button>

      <button className='filter-btn' onClick={() =>
      filterItems('Golang')}>Golang
      </button>

      <button className='filter-btn' onClick={() =>
      filterItems('JavaScript')}>JavaScript
      </button>

      <button className='filter-btn' onClick={() =>
      filterItems('Python')}>Python
      </button>

      <button className='filter-btn' onClick={() =>
      filterItems('React')}>React
      </button>
      <button className='filter-btn' onClick={() =>
      filterItems('Ruby on Rails')}>Ruby on Rails
      </button>

    </div>


  ) 
};

export default Categories;