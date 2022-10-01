import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore"
import firebaseApp from "../firebase/credenciales"
const firestore = getFirestore(firebaseApp)

export const addChannel = async (channelName) => {
    if (channelName !== undefined && channelName !== null && channelName.trim() !== "") {
      const docuRef = doc(firestore, `channels/${channelName}`)
      setDoc(docuRef, {
        id: new Date().getTime(),
        name: channelName,
        timestamp: serverTimestamp(),
      })
    }
  }