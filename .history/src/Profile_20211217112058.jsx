import "./App.css";
import { auth } from "./Firebase";
import Button from "@mui/material/Button";

function Profile({ username }) {

    const signOut = () => {
        auth
    }

  return (
    <div className="App">
      <img
        src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`}
        alt=""
        style={{
          width: 50,
          height: 50,
          borderRadius: 999,
        }}
      />
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}

export default Profile;
