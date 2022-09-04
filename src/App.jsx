import { useState, useEffect } from 'react'
import Start from './components/Start'
import Data from './Data'
import Question from './components/Question'

function App() {
  const [showStart, setShowStart] = useState(false)

  function startQuiz() {
    setShowStart(false)
  }

  const questions = Data.questions.map(problem => (
    <Question
      key={problem.id} 
      question={problem.question}
      choice_one={problem.choice_one}
      choice_two={problem.choice_two}
      choice_three={problem.choice_three}
      choice_four={problem.choice_four}
    />
  ))
  
  return (
    <div>
      {
        showStart ? <Start startQuiz={startQuiz}/> : 
        <div className='quiz'>
          {questions}
        </div>
      }
    </div>
  )
}

export default App
