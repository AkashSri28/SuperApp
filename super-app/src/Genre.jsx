import React, { useState } from 'react';
import styled from 'styled-components';
import './Genre.css';


function Genre() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [submitMessage, setSubmitMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const categories = [
    { id: 1, name: 'Music', image: "movie-genre/rrr.jpg" },
    { id: 2, name: 'Music', image: 'movie-genre/rrr.jpg' },
    { id: 3, name: 'Music', image: 'movie-genre/rrr.jpg' },
    { id: 4, name: 'Music', image: 'movie-genre/rrr.jpg' },
    { id: 5, name: 'Music', image: 'movie-genre/rrr.jpg' },
    { id: 6, name: 'Music', image: 'movie-genre/rrr.jpg' },
    { id: 7, name: 'Music', image: 'movie-genre/rrr.jpg' },
    { id: 8, name: 'Music', image: 'movie-genre/rrr.jpg' },
    { id: 9, name: 'Music', image: 'movie-genre/rrr.jpg' }
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
      setErrorMessage('Please select at least 3 categories');
      setSubmitMessage('');
    } else {
      setErrorMessage('');
      setSubmitMessage('Form submitted successfully!');
    }
  };

  return (
    <div id='container'>
      <div id='left-section'>
        <h1>Super App</h1>
        <h2>Choose your entertainment category</h2>
        <div className='category-list'>
          {selectedCategories.map((categoryId) => (
            <div className='category-item' key={categoryId}>
              <span>{categories.find((c) => c.id === categoryId).name}</span>
              <button onClick={() => handleCancelClick(categoryId)}>
                Cancel
              </button>
            </div>
          ))}
        </div>
        {errorMessage && <p id='error-message'>{errorMessage}</p>}
        <button id='submit-button' onClick={handleSubmit}>Submit</button>
        {submitMessage && <p>{submitMessage}</p>}
      </div>
      <div id='right-section'>
        <div className='category-list'>
          {categories.map((category) => (
            <div className='category-item' key={category.id}>
              <img src={category.image} alt={category.name} />
              <span
                onClick={() => handleCategoryClick(category.id)}
                style={{ cursor: 'pointer' }}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Genre