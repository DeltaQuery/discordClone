import React, { useState } from "react"

import AddCircleIcon from '@mui/icons-material/AddCircle'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import GifIcon from '@mui/icons-material/Gif'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import { addMessage } from "../services/addMessage"
import { getMessages } from "../services/getMessages"

import { useSelector, useDispatch } from 'react-redux'
import { setMessageList } from "../slices/dataSlice"

export const ChatInput = () => {
    const dispatch = useDispatch()
    const activeChannel = useSelector(state => state.data.activeChannel)
    const user = useSelector(state => state.data.globalUser)
    const [inputMessage, setInputMessage] = useState("")

    const sendMessage = async (e) => {
        await addMessage(e, activeChannel, user, inputMessage)
        setInputMessage("")
        getMessageList()
      }
    
      const getMessageList = async () => {
        const messagesArr = await getMessages(activeChannel)
        dispatch(setMessageList([...messagesArr.reverse()]))
      }

  return (
    <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form onSubmit={sendMessage}>
          <input
            type="text"
            className="sendMessageInput"
            disabled={activeChannel ? false : true}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={`Enviar mensaje a # ${activeChannel || ""}`}
          />
          <button
            disabled={activeChannel ? false : true}
            className="chat__inputButton"
            type="submit"
          >
            Enviar Mensaje
          </button>
        </form>

        <div className="chat__inputIcons">
          <CreditCardIcon className="chatScreen__Dicon" fontSize="large" />
          <GifIcon className="chatScreen__Dicon" fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
  )
}
