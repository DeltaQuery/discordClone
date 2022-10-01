import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'
import { useSelector, useDispatch } from 'react-redux'
import { setAvatarImg } from "../slices/dataSlice"
import { setNickname } from "../slices/dataSlice"
import firebaseApp from "../firebase/credenciales"
import { getAuth, signInAnonymously, setPersistence, inMemoryPersistence } from "firebase/auth"
import { getAvatar } from "../utils/getAvatar"
import { Footer } from "../components/Footer"
const auth = getAuth(firebaseApp)

export const LogIn = ({ appH }) => {
  const dispatch = useDispatch()
  const nickname = useSelector(state => state.data.nickname)
  const avatarImg = useSelector(state => state.data.avatarImg)
  const [validNick, setValidNick] = useState(true)

  const logInAnon = e => {
    e.preventDefault()
    if (nickname !== undefined && nickname !== null && nickname.trim() !== "") {
      setPersistence(auth, inMemoryPersistence)
        .then(() => {
          signInAnonymously(auth)
        })
        .catch((error) => {
          console.log(error.code, error.message)
        })
    } else {
      setValidNick(false)
      setTimeout(() => {
        setValidNick(true)
      }, 4000)
    }
  }

  useEffect(() => {
    dispatch(setAvatarImg(getAvatar()))
  }, [])

  const handleNickname = (value) => {
    dispatch(setNickname(value))
  }

  return (
    <div className="login" style={{ height: appH }}>
    <form onSubmit={logInAnon} className="loginForm" >
      <Collapse in={validNick === false}><Alert className="nicknameAlert" severity="error" onClose={() => { setValidNick(true) }}>¡Ingresa un nickname válido!</Alert></Collapse>
      <div className="login__logo">
        <img src={avatarImg || "https://picsum.photos/420"} alt="" />
      </div>
      <TextField className="nicknameInput" label="Introduce tu Nickname" variant="filled" onChange={(e) => handleNickname(e.target.value)} value={nickname} />
      <Button type="submit" className="submitButton">Acceder de forma ANÓNIMA</Button>
    </form>
    <Footer/>
    </div>
  )
}