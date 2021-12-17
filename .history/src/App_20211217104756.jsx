import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState("")



  return (
    <div className="App">
      <img 
        src={profile} 
        alt=""
        style={} 
      />
    </div>
  )
}

export default App
