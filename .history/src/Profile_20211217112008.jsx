import './App.css'
import { auth } from "./Firebase"


function Profile({username}) {
    return (
        <div className="App">
            <img 
            src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`}
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

export default Profile
