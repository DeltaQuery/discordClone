import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { LogIn } from "./views/LogIn"
import Sidebar from "./views/Sidebar"
import { ChatScreen } from "./views/ChatScreen"
import firebaseApp from "./firebase/credenciales"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { setGlobalUser } from "./slices/dataSlice"
const auth = getAuth(firebaseApp)

function App() {
  const dispatch = useDispatch()
  const globalUser = useSelector(state => state.data.globalUser)
  const nickname = useSelector(state => state.data.nickname)
  const avatarImg = useSelector(state => state.data.avatarImg)
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 600 ? true : false)
  const [appH, setAppH] = useState(window.innerHeight <= 600 ? window.innerHeight : "100vh")

  const handleResize = () => {
    window.innerWidth >= 600 ? setOpenSidebar(true) : setOpenSidebar(false)
    setAppH(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  },[])

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
    <div className="app">
      {globalUser ? (
        <>
          {" "}
          <Sidebar
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
            appH={appH}
          />{" "}
          <ChatScreen
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          appH={appH}
          />{" "}
        </>
      )
        :
        <LogIn
          appH={appH}
        />}
    </div>
  )
}

export default App
