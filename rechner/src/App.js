import './App.css';
import { MultiFormsProgressBar } from "./components/MultiFormsProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { MultiForms } from "./components/Multiforms";
import { questions } from "./Questions";

function App() {
  const [index, setIndex] = useState(2)

  const prevButton =  () => {
    if (index > 1){
      setIndex(prevIndex => prevIndex - 1);
    }
  }
  const nextButton =  () => {
    if (index < 3){
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div className="App">
      <Container className="h-100">
        <Row className="m-5">
          <Col className="align-self-center">
            <MultiFormsProgressBar step={index} />
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <MultiForms list={questions} />
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between'>
              <Button onClick={prevButton} disabled={index===1}>Previous</Button>
              <Button onClick={nextButton} disabled={index===3}>Next</Button>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
