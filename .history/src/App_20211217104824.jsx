import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState("")



  return (
    <div className="App">
      <img 
        src={profile} 
        alt=""
        width={60}
        height={60}
      />
      <button>Get avatar</button>
    </div>
  )
}

export default App
