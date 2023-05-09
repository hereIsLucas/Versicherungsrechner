import './App.css';
import { MultiFormsProgressBar } from "./components/MultiFormsProgressBar";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="h-100">
        <Row className="h-100">
          <Col className="align-self-center">
            <MultiFormsProgressBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
