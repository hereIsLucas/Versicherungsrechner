import React from 'react';
import '../App.css';
import { MultiFormsProgressBar } from "../components/MultiFormsProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { MultiForms } from "../components/Multiforms";
import { questions } from "../Questions";



export default function VRMainPage() {
  const [index, setIndex] = useState(1)
  const totalPagesCount = questions.length
  const [pagesAnswers, setPagesAnswers] = useState({})

  const onPagesAnswersUpdate = (step, answerObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answerObj })
  }

  const prevButton = () => {
    if (index > 1) {
      setIndex(prevIndex => prevIndex - 1);
    }
  }
  const nextButton = () => {
    if (index < 3) {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div id="padding">
      <h2>Please give all the necessary infos for your approximate billing</h2>
      <Container className="h-100">
        <Row className="m-5">
          <Col className="align-self-center">
            <MultiFormsProgressBar step={index} />
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <MultiForms step={index} list={questions} onPageUpdate={onPagesAnswersUpdate} pagesAnswers={pagesAnswers} />
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between'>
              <Button onClick={prevButton} disabled={index === 1}>Previous</Button>
              <Button onClick={nextButton}>{index === totalPagesCount ? 'Submit' : 'Next'}</Button>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  )
}
