import React, { useEffect, useState } from "react"
import { LogIn } from '../views/LogIn'
import { useSelector, useDispatch } from 'react-redux'
import firebaseApp from "../firebase/credenciales"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { setGlobalUser } from "../slices/dataSlice"
import { Sidebar } from "../views/Sidebar"
import { ChatScreen } from "../views/ChatScreen" 

const auth = getAuth(firebaseApp)

export const Chatboard = () => {
    const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 600 ? true : false)
    const [appH, setAppH] = useState(window.innerHeight <= 600 ? window.innerHeight : "100vh")

    const handleResize = () => {
        window.innerWidth >= 600 ? setOpenSidebar(true) : setOpenSidebar(false)
        setAppH(window.innerHeight)
      }
    
      useEffect(() => {
        window.addEventListener('resize', handleResize)
      },[])

    return (
        <div className="app">
            <Sidebar
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
                appH={appH}
            />
            <ChatScreen
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
                appH={appH}
            />
        </div>
    )
}
