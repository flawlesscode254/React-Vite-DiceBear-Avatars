import Button from '@mui/material/Button'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
    }
    return (
        <div className="login">
            <Button
                type="submit"
                onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Login