import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "./Firebase"

import Login from './LogIn'
import Profile from "./Profile"

function App() {
  const [user] = useAuthState()

  return (
    <div>
      {user ? (
        <Profile username={auth.currentUser.displayName} />
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
