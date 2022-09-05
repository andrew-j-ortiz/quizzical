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
    return (
        <div>
            <div className="question--title">
                <h3>{question}</h3>
            </div>
            <div className="choices--container">
                <div className={classList(choice_one)}>
                    {choice_one}
                </div>
                <br />

                <div className={classList(choice_two)}>
                    {choice_two}
                </div>
                <br />

                <div className={classList(choice_three)}>
                    {choice_three}
                </div>
                <br />

                <div className={classList(choice_four)}>
                    {choice_four}
                </div>
                <br />
            </div>
            <hr />
        </div>
    )
}

export default Answers