import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import PersonList from './components/PersonList'
import PersonAdd from './components/PersonAdd'
import PersonRemove from './components/PersonRemove'
import Manatee from './components/Manatee/Manatee'
import Narwhal from './components/Narwhal/Narwhal'
import Whale from './components/Whale/Whale'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <h1 className="text-4xl font-bold underline">
      Hello world!
    </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PersonAdd/>
      <PersonList/>
      <PersonRemove/>


      <div className="wrapper">
        <h1>Marine Animals</h1>
     
      </div>
    </div>
  )
}

export default App
