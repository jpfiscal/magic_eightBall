import { useState } from 'react'
import EightBall from './components/EightBall'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EightBall />
    </>
  )
}

export default App
