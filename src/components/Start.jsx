import React from "react"

function Start({startQuiz}) {
    return (
        <div className="start">
            <div className="start--content">
                <div className="start--title start--letter-container">
                    <h1>Quizzical</h1>
                </div>
                <div className="start--description start--letter-container">
                    <p>Good luck!</p>
                </div>
                <button className="big-button" onClick={startQuiz}>Start quiz</button>
            </div>
        </div>
    )
}

export default Start