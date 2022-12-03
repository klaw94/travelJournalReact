import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import data from './data'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const cardElements = data.map(
    (card)=>
    <Card
      key={card.id}
      item={card}
    />
  )

  return (
    <div className="App">
      <Header />
      <div className='cardDiv'>
        {cardElements}
      </div>
    </div>
  )
}

export default App
