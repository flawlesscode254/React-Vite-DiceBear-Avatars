import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState("")

  return (
    <div className="App">
      <img 
        src="https://avatars.dicebear.com/api/human/Duncan.svg" 
        alt=""
        width={60}
        height={60}
      />
      <button onClick={getAvatar}>Get avatar</button>
    </div>
  )
}

export default App
