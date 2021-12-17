import {useAuthState} from "react-firebase-hooks"

import Login from './LogIn'
import Profile from "./Profile"

function App() {
  const [user] = useAuthState()

  return (
    <div>
      {user ? (
        <Profile username={user} />
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
