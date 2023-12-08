import React, { useState } from 'react';
import styled from 'styled-components';
import './Genre.css';
import { useNavigate } from 'react-router-dom';


function Genre() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: 'Music', image: "movie-genre/rrr.jpg", color:'red' },
    { id: 2, name: 'Music', image: 'movie-genre/rrr.jpg', color:'red' },
    { id: 3, name: 'Music', image: 'movie-genre/rrr.jpg', color:'red' },
    { id: 4, name: 'Music', image: 'movie-genre/rrr.jpg', color:'red' },
    { id: 5, name: 'Music', image: 'movie-genre/rrr.jpg', color:'red' },
    { id: 6, name: 'Music', image: 'movie-genre/rrr.jpg', color:'red' },
    { id: 7, name: 'Music', image: 'movie-genre/rrr.jpg', color:'red' },
    { id: 8, name: 'Music', image: 'movie-genre/rrr.jpg', color:'red' },
    { id: 9, name: 'Music', image: 'movie-genre/rrr.jpg', color:'red' }
    // Add more categories as needed
  ];

  const handleCategoryClick = (categoryId) => {
    const isSelected = selectedCategories.includes(categoryId);

    if (isSelected) {
      // Deselect the category
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((id) => id !== categoryId)
      );
    } else {
      // Select the category
      setSelectedCategories((prevSelected) => [...prevSelected, categoryId]);
    }
  };

  const handleCancelClick = (categoryId) => {
    // Deselect the category
    setSelectedCategories((prevSelected) =>
      prevSelected.filter((id) => id !== categoryId)
    );
  };

  const handleSubmit = () => {
    if (selectedCategories.length < 3) {
      setErrorMessage(' Minimum 3 category required');
      return
    }
    localStorage.setItem('userChoices', selectedCategories)
    navigate('/profile');
  };

  return (
    <div id='container'>
      <div id='left-section'>
        <h1>Super App</h1>
        <h2>Choose your entertainment category</h2>
        <div id='selected-list'>
          {selectedCategories.map((categoryId) => (
            <div className='selected-item' key={categoryId}>
              <span>{categories.find((c) => c.id === categoryId).name}</span>
              <button id='cancel-button' onClick={() => handleCancelClick(categoryId)}>
                X
              </button>
            </div>
          ))}
        </div>
        {errorMessage && <p id='error-message'>{errorMessage}</p>}
        
      </div>
      <div id='right-section'>
        <div className='category-list'>
          {categories.map((category) => (
            <div className='category-item' onClick={() => handleCategoryClick(category.id)}
            style={{ cursor: 'pointer' }} key={category.id}>
              {category.name}
              <img src={category.image} alt={category.name} />
            </div>
          ))}
        </div>
        <button id='submit-button' onClick={handleSubmit}>Next Page</button>
      </div>
    </div>
  )
}

export default Genre