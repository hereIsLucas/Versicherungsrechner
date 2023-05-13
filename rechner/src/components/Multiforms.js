import { Form } from "react-bootstrap";
import { FormItems } from "./FormItems";
import { useState, useEffect } from "react";

export const MultiForms = (props) => {
  const [answers, setAnswers] = useState({ index: props.step });
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (Object.keys(answers).length > 1) {
      props.onPageUpdate(answers.index, answers);
      setAnswers({ index: props.step });
    } else {
      setAnswers({ index: props.step });
    }
  }, [props.step]);

  const updateAnswers = (value, category) => {
    let updatedAnswers = { ...answers, [category]: value };

    if (category === "quantity" || category === "duration") {
      let newTotalCost = 0;
      if (updatedAnswers.quantity && updatedAnswers.duration && props.pricePerUnit) {
        newTotalCost = updatedAnswers.quantity * updatedAnswers.duration * props.pricePerUnit;
      }
      updatedAnswers = { ...updatedAnswers, totalCost: newTotalCost };
      setTotalCost(newTotalCost);
    }

    const updatedPagesAnswers = {
      ...props.pagesAnswers,
      [props.step]: updatedAnswers,
      [props.step + 1]: {
        ...props.pagesAnswers[props.step + 1],
        totalCost: updatedAnswers.totalCost,
      },
    };

    setAnswers(updatedAnswers);
    props.onPageUpdate(props.step, updatedAnswers);
    props.onPageUpdate(props.step + 1, updatedPagesAnswers[props.step + 1]);
  };

  console.log("props.pagesAnswers[2]?.totalCost:", props.pagesAnswers[2]?.totalCost);

  return (
    <div className="text-left">
      {props.list[props.step - 1].items?.map((item, index) => {
        return (
          <FormItems key={item.label} item={item} onChange={updateAnswers} answer={props.pagesAnswers[props.step] ? props.pagesAnswers[props.step][item.value] : null} />
        );
      })}
      {props.step === 3 && (
        <Form.Group>
          <Form.Label>Choose your billing option:</Form.Label>
          <div>
            <Form.Check
              type="button"
              name="billingOption"
              id="annualFee"
              label={`Annual fee ($${(totalCost || 0) * 12 * 0.95.toFixed(2)})`}
              onClick={() => {
                if (totalCost) {
                  props.onPageUpdate(props.step, {
                    ...answers,
                    billingOption: "Annual fee",
                    fee: (totalCost * 12 * 0.95).toFixed(2),
                  });
                }
              }}
            />
            <Form.Check
              type="button"
              name="billingOption"
              id="monthlyFee"
              label={`Monthly fee ($${(totalCost || 0).toFixed(2)})`}
              onClick={() => {
                if (totalCost) {
                  props.onPageUpdate(props.step, {
                    ...answers,
                    billingOption: "Monthly fee",
                    fee: (totalCost || 0).toFixed(2),
                  });
                }
              }}
            />
          </div>
        </Form.Group>
      )}
    </div>
  );
};