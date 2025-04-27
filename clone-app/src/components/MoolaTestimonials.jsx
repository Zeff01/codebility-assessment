import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import appleLogo from '../assets/apple-store.png'; 
import googleLogo from '../assets/google-store.png';
import playStoreLogo from '../assets/google-play-store.png';

const MoolaTestimonials = () => {
  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
        ))}
      </div>
    );
  };

  return (
    <Container className="testimonials-container my-5">
      <h2 className="text-center mb-5 testimonial-heading">What Do Customers Think About Moola</h2>
      
      <Row className="g-4">
        <Col md={4}>
          <Card className="testimonial-card h-100">
            <Card.Body className="d-flex flex-column">
              <p className="testimonial-text text-center">
                This is a great app that saves money. Saved over 200 dollars so far!
              </p>
              <div className="mt-auto">
                <div className="text-center">
                  <StarRating rating={5} />
                  <div className="store-logo mt-3">
                    <img src={appleLogo} alt="Apple Store" className="apple-logo" />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="testimonial-card h-100">
            <Card.Body className="d-flex flex-column">
              <p className="testimonial-text text-center">
                Great way to save on the stuff you buy anyway. I always check Moola first when 
                shopping online or in-store. It also helped me organize all my rewards cards in one place 
                which stream-lined my wallet.
              </p>
              <div className="mt-auto">
                <div className="text-center">
                  <StarRating rating={4} />
                  <div className="store-logo mt-3">
                    <img src={googleLogo} alt="Google" className="google-logo" />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="testimonial-card h-100">
            <Card.Body className="d-flex flex-column">
              <p className="testimonial-text text-center">
                It's very easy to use, has more than 200 brands, and also lots of discounts and 
                bonuses. Once you've paid you can receive the gift cards within 1 minute.
              </p>
              <div className="mt-auto">
                <div className="text-center">
                  <StarRating rating={5} />
                  <div className="store-logo mt-3">
                    <img src={playStoreLogo} alt="Google Play" className="play-store-logo" />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MoolaTestimonials;