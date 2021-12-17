import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "./Firebase"

import Login from './LogIn'
import Profile from "./Profile"

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      {user ? (
        <Profile username={auth.currentUser.displayName} />
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
