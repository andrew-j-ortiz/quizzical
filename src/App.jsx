import { useState, useEffect } from 'react'
import Start from './components/Start'
import Question from './components/Question'
import Answers from './components/Answers'

function App() {
  const [showStart, setShowStart] = useState(true)
  const [showQuiz, setShowQuiz] = useState(true)
  const [triviaData, setTriviaData] = useState([])
  const [orderOfChoices, setOrderOfChoices] = useState([])
  const [formData, setFormData] = useState({
    group1: "",
    group2: "",
    group3: "",
    group4: "",
    group5: ""
  })

  
  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res => res.json())
      .then(data => setTriviaData(data))
  }, [showStart])

  useEffect(()=>{
    for (let index = 0; index < 5; index++) {
      let num = Math.floor(Math.random() * 3);
      const order = orders[num]
      setOrderOfChoices(prevState => {
        return [...prevState, order]
      })
    }
  }, [showStart])

  function startQuiz() {
    setShowStart(false)
    console.log(triviaData)
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

  const keys = [1, 2, 3, 4, 5]
  const orders = [
    [0, 1, 2, 3],
    [3, 2, 1, 0],
    [3, 2, 0, 1],
    [0, 2, 3, 1]
  ]

  const questions = triviaData.results?.map((problem, index) => {
    let form
    const choices = [...problem.incorrect_answers, [...problem.correct_answer].join("")]
    const group = "group" + keys[index]
    if (keys[index] === 1) {
      form = formData.group1
    } else if (keys[index] === 2) {
      form = formData.group2
    } else if (keys[index] === 3) {
      form = formData.group3
    } else if (keys[index] === 4) {
      form = formData.group4
    } else if (keys[index] === 5) {
      form = formData.group5
    }

    return <Question
      key={keys[index]}
      form={form}
      group={group}
      handleChange={handleChange}
      question={problem.question}
      choice_one={choices[orderOfChoices[index][0]]}
      choice_two={choices[orderOfChoices[index][1]]}
      choice_three={choices[orderOfChoices[index][2]]}
      choice_four={choices[orderOfChoices[index][3]]}
    />
  })

  const answers = triviaData.results?.map((problem, index) => {
    let wrong
    const choices = [...problem.incorrect_answers, [...problem.correct_answer].join("")]
    if (keys[index] === 1) {
      wrong = formData.group1
    } else if (keys[index] === 2) {
      wrong = formData.group2
    } else if (keys[index] === 3) {
      wrong = formData.group3
    } else if (keys[index] === 4) {
      wrong = formData.group4
    } else if (keys[index] === 5) {
      wrong = formData.group5
    }

    return (
      <Answers 
        key={keys[index]}
        question={problem.question}
        choice_one={choices[orderOfChoices[index][0]]}
        choice_two={choices[orderOfChoices[index][1]]}
        choice_three={choices[orderOfChoices[index][2]]}
        choice_four={choices[orderOfChoices[index][3]]}
        wrong={wrong}
        answer={problem.correct_answer}
      />
    )
  })
  
  function handleSubmit(event) {
    event.preventDefault()
    setShowQuiz(false)
  }

  function correctAnswers() {
    let correct = 0
    triviaData.results?.forEach(question => {
      if (question.correct_answer === formData.group1) {
        ++correct
      } else if (question.correct_answer === formData.group2) {
        ++correct
      } else if (question.correct_answer === formData.group3) {
        ++correct
      } else if (question.correct_answer === formData.group4) {
        ++correct
      } else if (question.correct_answer === formData.group5) {
        ++correct
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
