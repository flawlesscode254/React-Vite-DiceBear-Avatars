import Button from '@mui/material/Button'
import React from 'react'
import { auth, provider } from "./Firebase"

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
    }
    return (
        <div className="login">
            <Button
                onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Login