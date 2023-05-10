const addOptionsToQuestion = (question) => {
    if (question.type === "select") {
      if (question.answer === "Option 1") {
        question.options = ["Option 1-1", "Option 1-2", "Option 1-3"];
      } else if (question.answer === "Option 2") {
        question.options = ["Option 2-1", "Option 2-2", "Option 2-3"];
      }
    }

export const questions = [{
    section: 1,
    items: 
    [
        {
            label: 'username',
            type: 'text'
        }, {
            label: 'password',
            type: 'password'
        }
    ]
},{
    section: 2,
    items: [
        {
            
            label:'Street Address',
            type: 'text'
        },{
            label:'Street Address',
            type: 'text'
        },
        {
            label:'Car',
            type: 'select',
            Options: ['Audi','Peugeot','BMW', 'Porsche','Mercedes']
        },
        
    ]
}]
