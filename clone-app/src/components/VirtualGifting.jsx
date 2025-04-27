import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import phoneGif from '../assets/phone.gif'; 

const VirtualGifting = () => {
  return (
    <div className="virtual-gifting-wrapper container px-5 my-5 ">
      <Container className="py-5">
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h1 className="heading-primary">Virtual Gifting With A Personal Touch</h1>
            <p className="lead mt-3">
              You can't always be there in person for special celebrations, but you can always send your
              regards and congratulations through email or text. <span className="font-italic">It's the thought that counts!</span> Through
              Moola, you can send gifts from big and niche brands to your loved ones instantly.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center">
            <Col lg={4}>
                <div className="feature-box d-flex flex-column justify-content-center h-100">
                <h3 className="feature-title">Hassle-free<br />long distance gift giving</h3>
                <p className="feature-text">
                    Say goodbye to the stress of finding the perfect gift and having it arrive on-time.
                    With Moola, you can easily search, purchase and send digital gift cards in
                    less than 1 minute.
                </p>
                </div>
            </Col>

            <Col lg={4} className="text-center my-4 my-lg-0">
                <img src={phoneGif} alt="Moola App Interface" className="phone-mockup" />
            </Col>

            <Col lg={4}>
                <div className="feature-box d-flex flex-column justify-content-center h-100">
                <h3 className="feature-title">Monitor gift delivery as if you're there</h3>
                <p className="feature-text">
                    Stop questioning if a recipient has received your gift. Track gift card delivery
                    and open rates on the Moola App.
                </p>
                </div>
            </Col>
            </Row>
      </Container>
    </div>
  );
};

export default VirtualGifting;