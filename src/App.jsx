import { useState } from 'react'
import './App.css'
import CoinContainer from "./CoinContainer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CoinContainer />
    </div>
  )
}

export default App
