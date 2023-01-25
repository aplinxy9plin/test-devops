import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const URL = import.meta.env.VITE_BACKEND_URL

function App() {
  const [secret, setSecret] = useState("")

  useEffect(() => {
    if(URL){
      fetch(URL)
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if(data){
          setSecret(data.secret)
        }
      })
      .catch(console.error)
    }
  }, [])
  
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>URL: {URL}</h1>
      <h1>SECRET: {secret}</h1>
    </div>
  )
}

export default App
