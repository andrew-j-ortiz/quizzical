import {useState, useEffect} from "react";

function Question({question, choice_one, choice_two, choice_three, choice_four}) {
    const [formData, setFormData] = useState({ choice: "" })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <form>
            <fieldset>
                <div className="question--title">
                    <h3>{question}</h3>
                </div>

                <div className="choices--container">
                    <input
                        type="radio" 
                        id={choice_one}
                        name="choice"
                        value={choice_one}
                        onChange={handleChange}
                        checked={formData.choice === choice_one}
                    />
                    <label htmlFor={choice_one}>{choice_one}</label>
                    <br />

                    <input 
                        type="radio" 
                        id={choice_two}
                        name="choice"
                        value={choice_two}
                        onChange={handleChange}
                        checked={formData.choice === choice_two}
                    />
                    <label htmlFor={choice_two}>{choice_two}</label>
                    <br />

                    <input 
                        type="radio" 
                        id={choice_three}
                        name="choice"
                        value={choice_three}
                        onChange={handleChange}
                        checked={formData.choice === choice_three}
                    />
                    <label htmlFor={choice_three}>{choice_three}</label>
                    <br />

                    <input 
                        type="radio" 
                        id={choice_four}
                        name="choice"
                        value={choice_four}
                        onChange={handleChange}
                        checked={formData.choice === choice_four}
                    />
                    <label htmlFor={choice_four}>{choice_four}</label>
                    <br />
                </div>
                <hr />
            </fieldset>
        </form>
    )
}

export default Question