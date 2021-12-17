import {useAuthState} from "react-firebase-hooks"

import Login from './LogIn'
import Profile from "./Profile"

function App() {
  const [user] = useAuthState()

  return (
    <div>
      {user ? (
        <Profile user />
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
