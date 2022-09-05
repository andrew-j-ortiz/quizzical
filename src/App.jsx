import { useState, useEffect } from 'react'
import Start from './components/Start'
import Data from './Data'
import Question from './components/Question'

function App() {
  const [showStart, setShowStart] = useState(false)
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
      group={problem.group}
      handleChange={handleChange}
      question={problem.question}
      choice_one={problem.choice_one}
      choice_two={problem.choice_two}
      choice_three={problem.choice_three}
      choice_four={problem.choice_four}
      choice_five={problem.choice_five}
    />
  })
  
  function handleSubmit() {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      {
        showStart ? <Start startQuiz={startQuiz}/> : 
        <div className='quiz'>
          <form onSubmit={handleSubmit}>
            {questions}
            <button className="big-button">Check Answers</button>
          </form>
        </div>
      }
    </div>
  )
}

export default App
