import { Form } from "react-bootstrap";
import { FormItems } from "./FormItems"

export const MultiForms = (props) => { 
    return (
    <div className="text-left">
      {
        props.list[0].items?.map((item, index) => {
          return (
            <FormItems key={item.label} item={item}/>
          )
        })
      }
    </div>
  )
}