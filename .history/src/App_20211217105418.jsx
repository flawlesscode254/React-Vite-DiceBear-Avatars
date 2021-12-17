import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState("")

  const getAvatar = async () => {
    const response = await fetch("https://avatars.dicebear.com/api/human/john.svg")
    await setProfile(response)
  }

  return (
    <div className="App">
      <img 
        src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad" 
        alt=""
        width={60}
        height={60}
      />
      <button onClick={getAvatar}>Get avatar</button>
    </div>
  )
}

export default App
