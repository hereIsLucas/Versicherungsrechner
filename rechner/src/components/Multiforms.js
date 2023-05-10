import { Form } from "react-bootstrap";
import { FormItems } from "./FormItems";
import { useState } from "react";

export const MultiForms = (props) => { 
    const [answers, setAnswers] =  useState ([]);

    const updateAnswers = (value, category) => {
        setAnswers({...answers, [category] : value})
    }
    return (
    <div className="text-left">
      {
        props.list[props.step - 1].items?.map((item, index) => {
          return (
            <FormItems key={item.label} item={item} onChange={updateAnswers}/>
          )
        })
      }
    </div>
  )
}