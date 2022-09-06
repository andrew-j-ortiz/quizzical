import React from "react";

function Answers({  
                    question, 
                    choice_one, 
                    choice_two, 
                    choice_three, 
                    choice_four,
                    answer,
                    wrong
                }) {
    
    function classList(choice) {
        if (choice === answer) {
            return "answer correct"
        } else if (choice === wrong) {
            return "answer wrong"
        } else {
            return "answer"
        }
    }

    const parser = new DOMParser();
    const parsedQuestion = parser.parseFromString(`<!doctype html><body>${question}`, 'text/html').body.textContent
    const parsedChoiceOne = parser.parseFromString(`<!doctype html><body>${choice_one}`, 'text/html').body.textContent
    const parsedChoiceTwo = parser.parseFromString(`<!doctype html><body>${choice_two}`, 'text/html').body.textContent
    const parsedChoiceThree = parser.parseFromString(`<!doctype html><body>${choice_three}`, 'text/html').body.textContent
    const parsedChoiceFour = parser.parseFromString(`<!doctype html><body>${choice_four}`, 'text/html').body.textContent

    return (
        <div className="answers">
            <div className="question--title">
                <h3>{parsedQuestion}</h3>
            </div>
            <div className="choices--container">
                <div className={classList(choice_one)}>
                    {parsedChoiceOne}
                </div>
                <br />

                <div className={classList(choice_two)}>
                    {parsedChoiceTwo}
                </div>
                <br />

                <div className={classList(choice_three)}>
                    {parsedChoiceThree}
                </div>
                <br />

                <div className={classList(choice_four)}>
                    {parsedChoiceFour}
                </div>
                <br />
            </div>
            <hr />
        </div>
    )
}

export default Answers