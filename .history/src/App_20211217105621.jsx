import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState("")

  return (
    <div className="App">
      <img 
        src="https://avatars.dicebear.com/api/avataaars/Duncan.svg" 
        alt=""
        width={50}
        height={60}
      />
    </div>
  )
}

export default App
