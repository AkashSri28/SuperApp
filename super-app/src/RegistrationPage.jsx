import React, { useState } from 'react';
import './RegistrationPage.css'; // You can create a CSS file for styling
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import { useNavigate } from 'react-router-dom';

const StyledInput = styled.input`
  background-color: #292929;
  border: ${({ isEmpty }) => (isEmpty ? '1px solid red' : 'none')};
  padding: 10px;

  width: 100%;
  box-sizing: border-box;
  color: #7C7C7C;
`;

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    username: false,
    email: false,
    mobile: false,
    agreeToTerms: false
  });

  const handleChange = (e) => {
    // Clear error when the user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: false,
      username: false,
      email: false,
      mobile: false,
      agreeToTerms: false
    }));

    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    // Use a switch statement to handle each field individually
    switch (name) {
      case 'name':
        setFormData((prevFormData) => ({
          ...prevFormData,
          name: fieldValue,
        }));
        break;

      case 'username':
        setFormData((prevFormData) => ({
          ...prevFormData,
          username: fieldValue
        }));
        break;

      case 'email':
        setFormData((prevFormData) => ({
          ...prevFormData,
          email: fieldValue
        }));
        break;

      case 'mobile':
        setFormData((prevFormData) => ({
          ...prevFormData,
          mobile: fieldValue
        }));
        break;
        
      // Handle other fields if needed
      default:
        setFormData((prevFormData) => ({
          ...prevFormData,
          agreeToTerms: checked
        }));
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your registration logic here
    // Check for empty fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = true;
      }
    });

    // If there are errors, set them and prevent form submission
    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    navigate('genre');
  };

  return (
    <div className="registration-page">
      <div className="left-half">
        <div className="background-image">
          <h2>Discover new things on Superapp</h2>
        </div>
      </div>
      <div className="right-half">
        {/* Registration form */}
        <form onSubmit={handleSubmit}>
          <h2>Super app</h2>
          <p>Create your new account</p>
          <div className="form-group">
            <StyledInput
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              isEmpty={errors.name}
            />
            {errors.name && <ErrorMessage/>}
          </div>
          <div className="form-group">
            <StyledInput
              type="text"
              id="username"
              name="username"
              placeholder='UserName'
              value={formData.username}
              onChange={handleChange}
              isEmpty={errors.username}
            />
            {errors.username && <ErrorMessage/>}
          </div>
          <div className="form-group">
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              isEmpty={errors.email}
            />
            {errors.email && <ErrorMessage/>}
          </div>
          <div className="form-group">
            <StyledInput
              type="tel"
              id="mobile"
              name="mobile"
              placeholder='Mobile'
              value={formData.mobile}
              onChange={handleChange}
              isEmpty={errors.mobile}
            />
            {errors.mobile && <ErrorMessage/>}
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="agreeToTerms"
                className="checkbox-input"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              Share my registration data with Superapp
            </label>
            {errors.agreeToTerms && <ErrorMessage/>}
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
          <p className="disclaimer-text">
            By clicking on Sign up. you agree to Superapp <a>Terms and Conditions of Use</a>
          </p>
          <p className="disclaimer-text">
            To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a>Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
  );
};


export default RegistrationPage;
