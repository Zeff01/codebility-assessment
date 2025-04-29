import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
  return (
    <header style={{ backgroundColor: '#7514e3' }} className="w-full py-4 flex justify-center">
      <div style={{ width: '1216px', height: '40px' }} className="flex">
        <input
          type="text"
          placeholder="Search over 250 gift card brands"
          style={{
            borderTopLeftRadius: '30px',
            borderBottomLeftRadius: '30px',
            height: '100%',
            paddingLeft: '20px',
            fontSize: '1rem',
          }}
          className="flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="button"
          style={{
            width: '80px',
            height: '100%',
            backgroundColor: '#4c0d94',
            color: 'white',
            borderTopRightRadius: '30px',
            borderBottomRightRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </header>
  );
};

export default Searchbar;