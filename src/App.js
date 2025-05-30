import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import { blog } from './Data/Blog';

function App() {
  let headerInfo = {
    'email': 'ws@gmail.com',
    'phone': '8293728738'
  }

  return (
    <div className="main">
      <Header headerInfo={headerInfo} cname="Rishi">
        <h1>Welcome to Header Section</h1>
      </Header>
      <div className='container'>
        {/* <Container fluid>
          <Container>
            <Row>
              <Col className='col-12 text-center py-4'>
                <h1>Our Courses</h1>
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
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
        </Container> */}

        <Container>
          <Row>
            {blog.map((v, i) => {
              return (
                <ProductItem pitems={v} key={i}/>
              )
            })}
          </Row>
        </Container>
      </div>
      <Footer />


    </div>
  );
}

export default App;


function ProductItem({pitems}) {
  return (
    <div className="col-lg-3 mb-4">
      <Card>
        <Card.Body>
          <Card.Title>
            { pitems.title }
          </Card.Title>
          <Card.Text>
            { pitems.body }
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}