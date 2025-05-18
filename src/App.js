import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';

function App() {
  let headerInfo={
    'email': 'ws@gmail.com',
    'phone': '8293728738'
  }

  return (
    <div className="main">
      <Header headerInfo={headerInfo} cname="Rishi"/>
      <div className='container'>
        <Container fluid>
          <Container>
            <Row>
              <Col className='col-12 text-center py-4'>
                <h1>Our Courses</h1>
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Course1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Course1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Course1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Course1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
      <Footer />


    </div>
  );
}

export default App;
