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

    return (
        <fieldset>
            <div className="question--title">
                <h3>{question}</h3>
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
                <label htmlFor={choice_one}>{choice_one}</label>
                <br />

                <input 
                    type="radio" 
                    id={choice_two}
                    name={group}
                    value={choice_two}
                    onChange={()=>handleChange(event)}
                    checked={form === choice_two}
                />
                <label htmlFor={choice_two}>{choice_two}</label>
                <br />

                <input 
                    type="radio" 
                    id={choice_three}
                    name={group}
                    value={choice_three}
                    onChange={()=>handleChange(event)}
                    checked={form === choice_three}
                />
                <label htmlFor={choice_three}>{choice_three}</label>
                <br />

                <input 
                    type="radio" 
                    id={choice_four}
                    name={group}
                    value={choice_four}
                    onChange={()=>handleChange(event)}
                    checked={form === choice_four}
                />
                <label htmlFor={choice_four}>{choice_four}</label>
                <br />
            </div>
            <hr />
        </fieldset>
    )
}

export default Question