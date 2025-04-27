import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const HeroComponent = () => {
  return (
    <div className="container-fluid py-4 hero-section">
      <div className="container">
        <div className="input-group rounded-pill overflow-hidden py-2">
          <input type="text" className="form-control textbox-search border-0 py-3" placeholder="Search over 250 gift card brands"/>
          <button className="btn btn-search pe-3 border-0" type="submit">
            <FontAwesomeIcon icon={faSearch} className='search-icon' /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;