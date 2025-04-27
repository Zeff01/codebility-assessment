import React from 'react';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import bottom1 from '../assets/pic1.png';
import bottom2 from '../assets/pic2.png';

const Header = () => {
  const images = [slide1, slide2]; 
  const bottomImages = [bottom1, bottom2]; 

  return (
    <div className="container py-3 px-5">
    
      <div
        id="carouselExample"
        className="carousel slide rounded-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded-5">
          {images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img
                src={image}
                className="d-block w-100 mx-auto rounded-5" 
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="row mt-3 justify-content-center">
        {bottomImages.map((image, index) => (
          <div className="col-6 col-md-6 mb-3" key={index}>
            <img
              src={image}
              className="img-fluid rounded-5 w-100" 
              alt={`Bottom image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
