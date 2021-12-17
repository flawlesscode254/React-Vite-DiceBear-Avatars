import './App.css'
import {useAuthState} from "react-firebase-hooks"


function App() {
  const [user] = useAuthState()

  return (
    <div className="App">
      <img 
        src="https://avatars.dicebear.com/api/avataaars/Duncan.svg" 
        alt=""
        style={{
          width: 50,
          height: 50,
          borderRadius: 999
        }}
      />
    </div>
  )
}

export default App
