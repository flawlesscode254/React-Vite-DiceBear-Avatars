import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {useAuthState} from "react-firebase-hooks"

import App from './App'
import LogIn from "./LogIn"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LogIn />
  </React.StrictMode>,
  document.getElementById('root')
)
