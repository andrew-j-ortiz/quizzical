import { useState, useEffect } from 'react'
import Start from './components/Start'

function App() {
  const [showStart, setShowStart] = useState(true)

  function startQuiz() {
    setShowStart(false)
  }

  return (
    <div>
      {showStart ? <Start startQuiz={startQuiz}/> : ""}
    </div>
  )
}

export default App
