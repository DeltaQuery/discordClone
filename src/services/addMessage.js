import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore"
const firestore = getFirestore(firebaseApp)
import firebaseApp from "../firebase/credenciales"

import { filterContent } from "../utils/filterContent"

export const addMessage = async (e, activeChannel, user, inputMessage) => {
  e.preventDefault()
  try {
    const docuRef = doc(
      firestore,
      `channels/${activeChannel}/messages/${new Date().getTime()}`
    )

    const filteredMessage = filterContent(inputMessage)

    setDoc(docuRef, {
      picture: user.photoURL || user.picture,
      user: user.displayName,
      userId: user.uid,
      message: filteredMessage,
      id: new Date().getTime(),
      timestamp: serverTimestamp(),
    })
  } catch(e){
    console.log("It was not possible to send this message", e)
  } 
  }