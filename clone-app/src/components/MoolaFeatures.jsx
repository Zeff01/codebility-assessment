import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const MoolaFeatures = () => {
  return (
    <Container className="my-5">
      <Row className="g-4">

        <Col md={4}>
          <Card className="feature-card h-100">
            <Card.Body className="d-flex flex-column">
              <div className="tag-icon mb-3">
                <span className="price-tag">%</span>
                <h3 className="feature-heading">Deals Each Week</h3>
              </div>
              <p className="feature-text">
                Each week, we feature new deals in the Moola Marketplace where you can save up to 15% on 
                popular brands. Check out this week's feature deal.
              </p>
              <div className="mt-auto">
                <Button className="moola-button w-100">SHOP DEALS</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="feature-card h-100">
            <Card.Body className="d-flex flex-column">
              <div className="tag-icon mb-3">
                <span className="price-tag">%</span>
                <h3 className="feature-heading">Everyday Essentials</h3>
              </div>
              <p className="feature-text">
                Moola has deals on all your everyday essentials such as grocery, fuel, pharmacy, 
                food delivery, and more. It all adds up to great savings!
              </p>
              <div className="mt-auto">
                <Button className="moola-button w-100">SHOP ESSENTIALS</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="feature-card h-100">
            <Card.Body className="d-flex flex-column">
              <div className="tag-icon mb-3">
                <span className="price-tag">%</span>
                <h3 className="feature-heading">Download App</h3>
              </div>
              <p className="feature-text">
                Download the Moola App and start collecting cash back and bonus gift vouchers.
              </p>
              <div className="mt-auto">
                <Button className="moola-button w-100">DOWNLOAD APP</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MoolaFeatures;