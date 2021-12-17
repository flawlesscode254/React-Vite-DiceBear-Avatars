import {useAuthState} from "react-firebase-hooks"

import Login from './LogIn'

function App() {
  const [user] = useAuthState()

  return (
    <div>
      
    </div>
  )
}

export default App
