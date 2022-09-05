import { useState, useEffect } from 'react'
import Start from './components/Start'
import Data from './Data'
import Question from './components/Question'
import Answers from './components/Answers'

function App() {
  const [showStart, setShowStart] = useState(true)
  const [showQuiz, setShowQuiz] = useState(true)
  const [formData, setFormData] = useState({
    group1: "",
    group2: "",
    group3: "",
    group4: "",
    group5: ""
  })

  function startQuiz() {
    setShowStart(false)
  }

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: value
        }
      }
    )
  }

  const questions = Data.questions.map(problem => {
    let form
    const group = "group" + problem.id
    if (problem.id === 1) {
      form = formData.group1
    } else if (problem.id === 2) {
      form = formData.group2
    } else if (problem.id === 3) {
      form = formData.group3
    } else if (problem.id === 4) {
      form = formData.group4
    } else if (problem.id === 5) {
      form = formData.group5
    }

    return <Question
      key={problem.id} 
      form={form}
      group={group}
      handleChange={handleChange}
      question={problem.question}
      choice_one={problem.choice_one}
      choice_two={problem.choice_two}
      choice_three={problem.choice_three}
      choice_four={problem.choice_four}
    />
  })

  const answers = Data.questions.map(problem => {
    let wrong
    if (problem.id === 1) {
      wrong = formData.group1
    } else if (problem.id === 2) {
      wrong = formData.group2
    } else if (problem.id === 3) {
      wrong = formData.group3
    } else if (problem.id === 4) {
      wrong = formData.group4
    } else if (problem.id === 5) {
      wrong = formData.group5
    }

    return (
      <Answers 
        key={problem.id}
        question={problem.question}
        choice_one={problem.choice_one}
        choice_two={problem.choice_two}
        choice_three={problem.choice_three}
        choice_four={problem.choice_four}
        answer={problem.answer}
        wrong={wrong}
      />
    )
  })
  
  function handleSubmit(event) {
    event.preventDefault()
    setShowQuiz(false)
  }

  function correctAnswers() {
    let correct = 0
    Data.questions.forEach(question => {
      if (question.answer === formData.group1) {
        correct++
      } else if (question.answer === formData.group2) {
        correct++
      } else if (question.answer === formData.group3) {
        correct++
      } else if (question.answer === formData.group4) {
        correct++
      }
    })
    return correct
  }

  function restart() {
    setShowStart(true)
    setShowQuiz(true)
    setFormData({
      group1: "",
      group2: "",
      group3: "",
      group4: "",
      group5: ""
    })
  }

  return (
    <div>
      {
        showStart ? <Start startQuiz={startQuiz}/> : 
        <div className="quiz">
            {
              showQuiz ?
              <form onSubmit={handleSubmit}>
                {questions}
                <div className="quiz--button">
                  <button className="big-button">Check Answers</button>
                </div>
              </form> :
              <div>
                {answers}
                <div className="quiz--button">
                  <h3 className='correct-answers'>You got {correctAnswers()}/5 correct answers</h3>
                  <button className="big-button" onClick={restart}>Play Again</button>
                </div>
              </div>
            }
        </div>
      }
    </div>
  )
}

export default App
