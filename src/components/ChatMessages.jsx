import React, { useEffect } from 'react'
import { MessageList } from './MessageList'
import { useSelector, useDispatch } from 'react-redux'
import { setMessageList } from '../slices/dataSlice'
import { getFirestore, collection, onSnapshot } from "firebase/firestore"
import firebaseApp from "../firebase/credenciales"
const firestore = getFirestore(firebaseApp)

export const ChatMessages = () => {
    const dispatch = useDispatch()
    const activeChannel = useSelector(state => state.data.activeChannel)
    const messageList = useSelector(state => state.data.messageList)

    useEffect(() => {
        if (activeChannel) {
          onSnapshot(collection(firestore, "channels", activeChannel, "messages"), (snapshot) => {
            const messagesArr = []
            snapshot.docs.forEach(message => {
              messagesArr.push(message.data())
            })
            dispatch(setMessageList([...messagesArr.reverse()]))
          })
        }
      }, [activeChannel])

  return (
    <div className="chat__messages">
        {messageList && <MessageList/>}
        <div className="chat__welcome">
        <div><span>#</span></div>
        <div>¡Te damos la bienvenida a #{activeChannel}!</div>
        <div>Aquí empieza el canal #{activeChannel}.</div>
        </div>
      </div>
  )
}
