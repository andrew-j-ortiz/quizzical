import React from "react";

function Question({ 
                    question, 
                    form, 
                    handleChange, 
                    group, 
                    choice_one, 
                    choice_two, 
                    choice_three, 
                    choice_four
                }) {
    const parser = new DOMParser();
    const parsedQuestion = parser.parseFromString(`<!doctype html><body>${question}`, 'text/html').body.textContent
    const parsedChoiceOne = parser.parseFromString(`<!doctype html><body>${choice_one}`, 'text/html').body.textContent
    const parsedChoiceTwo = parser.parseFromString(`<!doctype html><body>${choice_two}`, 'text/html').body.textContent
    const parsedChoiceThree = parser.parseFromString(`<!doctype html><body>${choice_three}`, 'text/html').body.textContent
    const parsedChoiceFour = parser.parseFromString(`<!doctype html><body>${choice_four}`, 'text/html').body.textContent

    return (
        <fieldset>
            <div className="question--title">
                <h3>{parsedQuestion}</h3>
            </div>

            <div className="choices--container">
                <input
                    type="radio" 
                    id={choice_one}
                    name={group}
                    value={choice_one}
                    onChange={()=>handleChange(event)}
                    checked={form === choice_one}
                />
                <label htmlFor={choice_one}>{parsedChoiceOne}</label>
                <br />

                <input 
                    type="radio" 
                    id={choice_two}
                    name={group}
                    value={choice_two}
                    onChange={()=>handleChange(event)}
                    checked={form === choice_two}
                />
                <label htmlFor={choice_two}>{parsedChoiceTwo}</label>
                <br />

                <input 
                    type="radio" 
                    id={choice_three}
                    name={group}
                    value={choice_three}
                    onChange={()=>handleChange(event)}
                    checked={form === choice_three}
                />
                <label htmlFor={choice_three}>{parsedChoiceThree}</label>
                <br />

                <input 
                    type="radio" 
                    id={choice_four}
                    name={group}
                    value={choice_four}
                    onChange={()=>handleChange(event)}
                    checked={form === choice_four}
                />
                <label htmlFor={choice_four}>{parsedChoiceFour}</label>
                <br />
            </div>
            <hr />
        </fieldset>
    )
}

export default Question