import React, { useState, useEffect } from "react"
import Avatar from '@mui/material/Avatar'
import { Tooltip } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import MicIcon from '@mui/icons-material/Mic'
import HeadsetIcon from '@mui/icons-material/Headset'
import LogoutIcon from '@mui/icons-material/Logout'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveChannel } from "../slices/dataSlice"
import { SidebarChannel } from "../components/SidebarChannel"
import firebaseApp from "../firebase/credenciales"
import { AddChannelModal } from "../components/AddChannelModal"
import { getChannels } from "../services/getChannels"
import { checkSwipeToClose } from "../utils/checkSwipe"
import { getAuth, signOut } from "firebase/auth"
const auth = getAuth(firebaseApp)

let touchStart
let touchEnd

function Sidebar({ openSidebar, setOpenSidebar, appH }) {
  const dispatch = useDispatch()
  const globalUser = useSelector(state => state.data.globalUser)

  const [channelList, setChannelList] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const checkSwipe = () => {
    const boolean = checkSwipeToClose(touchStart, touchEnd)
    boolean != undefined ? setOpenSidebar(boolean) : ""
  }

  useEffect(() => {
    const channelsArr = async () => {
      const channels = await getChannels()
      setChannelList(channels)
      if(channels.length > 0) {
        dispatch(setActiveChannel(channels[0].name))
    } 
    }
    channelsArr()
  }, [])

  return (
    <div
    className={`sidebar ${ openSidebar ? "sidebarDisplayed" : "sidebarHidden" }`}
    style={{height: appH}}
    onTouchStart={(e) => touchStart = [e.targetTouches[0].clientX, e.targetTouches[0].clientY]}
    onTouchMove={(e) => touchEnd = [e.changedTouches[0].clientX, e.targetTouches[0].clientY]}
    onTouchEnd={ checkSwipe }
    
    >
      { openModal && <AddChannelModal
                        openModal = {openModal}
                        setOpenModal = {setOpenModal} 
                        setChannelList = {setChannelList} 
                        /> 
      }
      <div className="sidebar__top">
        <h3> Servidor de DeltaQuery</h3>
        <ExpandMoreIcon className="expandMoreIcon sidebar__Micon" onClick={() => setOpenSidebar(false)}/>
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Canales de texto</h4>
          </div>

          <Tooltip title="Add a channel">
          <AddIcon className="sidebar__addChannel clickableIcon" onClick={() => setOpenModal(true)} />
          </Tooltip>
        </div>

        <div className="sidebar__channelsList">
          {channelList
            ? channelList.map((channel,index) => {
                return (
                  <div onClick={() => dispatch(setActiveChannel(channel.name))} key={index}>
                    <SidebarChannel name={channel.name}/>
                  </div>
                )
              })
            : null}
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src={globalUser.picture || "https://picsum.photos/420" } />
        <div className="sidebar__profileInfo">
          <h3>{globalUser.displayName || "Anon"}</h3>
          <p>{globalUser.uid.substring(0, 4)} </p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <Tooltip title="Logout">
          <LogoutIcon onClick={() => signOut(auth)} className="clickableIcon" />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
