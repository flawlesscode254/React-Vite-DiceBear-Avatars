import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState("")

  return (
    <div className="App">
      <img 
        src="https://avatars.dicebear.com/api/avataars/Duncan.svg" 
        alt=""
        width={60}
        height={60}
      />
    </div>
  )
}

export default App
