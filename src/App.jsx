import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter, Routes, Route } from "react-router-dom"
import firebaseApp from "./firebase/credenciales"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { setGlobalUser } from "./slices/dataSlice"
import { Chatboard } from "./routes/Chatboard"
import { Login } from "./routes/Login"
import { Error } from "./routes/Error"
import { setHeight } from "./slices/uiSlice"
import { AuthRoute } from "./routes/AuthRoute"
import { PublicRoute } from "./routes/PublicRoute"
const auth = getAuth(firebaseApp)

function App() {
  const dispatch = useDispatch()
  const nickname = useSelector(state => state.data.nickname)
  const avatarImg = useSelector(state => state.data.avatarImg)

  const handleResize = () => {
    dispatch(setHeight(window.innerHeight))
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        firebaseUser.displayName = nickname
        firebaseUser.picture = avatarImg
        dispatch(setGlobalUser(firebaseUser))
      } else {
        dispatch(setGlobalUser(null))
      }
    })
  })

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<AuthRoute><Chatboard /></AuthRoute>} />
        <Route exact path="/chatboard" element={<AuthRoute><Chatboard /></AuthRoute>} />
        <Route exact path="/login" element={<PublicRoute><Login/></PublicRoute>} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  )
}

export default App
