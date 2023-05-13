import React, { useState } from "react";
import { MultiFormsProgressBar } from "../components/MultiFormsProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MultiForms } from "../components/Multiforms";
import { questions } from "../Questions";

export default function VRMainPage() {
  const [index, setIndex] = useState(2);
  const totalPagesCount = questions.length;
  const [pagesAnswers, setPagesAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onPagesAnswersUpdate = (step, answerObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answerObj });
  };

  const prevButton = () => {
    if (index > 1) {
      setIndex(index - 1);
      console.log("index after button click:", index);
    }
  };

  const nextButton = () => {
    if (index < totalPagesCount) {
      setIndex(index + 1);
      console.log("index after button click:", index);
    }
  };

  const handleNextButton = (e) => {
    e.preventDefault();
    if (index === totalPagesCount) {
      handleSubmit();
    } else {
      nextButton();
    }
  };

  const onPageUpdate = (pageNumber, answer) => {
    setPagesAnswers({
      ...pagesAnswers,
      [pageNumber]: answer
    });

    if (pageNumber === 2) {
      const carBrand = answer.carBrand;
      const tachoDistance = answer.tachoDistance;
      let carCost = 0;
      switch (carBrand) {
        case "Audi":
          carCost = 10000;
          break;
        case "Peugeot":
          carCost = 8000;
          break;
        case "BMW":
          carCost = 12000;
          break;
        case "Porsche":
          carCost = 20000;
          break;
        case "Mercedes":
          carCost = 15000;
          break;
        default:
          carCost = 0;
          break;
      }
      const totalCost = parseInt(tachoDistance) * 0.1;
      console.log("Total cost:", totalCost);
    }
  };

  const handleSubmit = () => {
    const tachoDistance = pagesAnswers[2]?.tachoDistance;
    const totalCost = parseInt(tachoDistance) * 0.1;
    console.log("Total cost:", totalCost);
    console.log("index after button click:", index);
    setSubmitted(true);
  };

  const handleRestart = () => {
    setIndex(1);
    setPagesAnswers({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div>
        <h2>Thank you for submitting the form!</h2>
        <Button onClick={handleRestart}>Restart</Button>
      </div>
    );
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
              <MultiForms 
              step={index} 
              list={questions} 
              onAnswerUpdate={onPagesAnswersUpdate}
              onPageUpdate={onPageUpdate} 
              pagesAnswers={pagesAnswers} />
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between'>
              <Button onClick={prevButton} disabled={index === 1}>Previous</Button>
              <Button onClick={handleNextButton}>{index === totalPagesCount ? 'Submit' : 'Next'}</Button>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  )
}
