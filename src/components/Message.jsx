import React, { useState } from "react"
import Avatar from '@mui/material/Avatar'
import { getHumanDate } from "../utils/getHumanDate"
import MessageMenu from "./MessageMenu"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useSelector } from 'react-redux'

export const Message = ({ firebaseMessage }) => {
  const user = useSelector(state => state.data.globalUser)
  const activeChannel = useSelector(state => state.data.activeChannel)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <div className="message">
      <div className="message__container">
      <Avatar src={firebaseMessage.picture || user.photoURL } />
      <div className="message__info">
        <h4>
          { firebaseMessage.user || "Anon"}
          <span className="message__timestamp">
            { firebaseMessage?.timestamp && getHumanDate(firebaseMessage?.timestamp?.seconds) }
          </span>
        </h4>
        <p>{firebaseMessage.message}</p>
      </div>
      </div>
      { user.uid === firebaseMessage.userId && <MoreHorizIcon onClick={handleMenuOpen} className="message__moreIcon" />}
      <MessageMenu
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      open={open}
      message={firebaseMessage}
      activeChannel={activeChannel}
      />
    </div>
  )
}