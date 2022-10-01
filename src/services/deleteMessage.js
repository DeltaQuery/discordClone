import { getFirestore, doc, deleteDoc } from "firebase/firestore"
const firestore = getFirestore(firebaseApp)
import firebaseApp from "../firebase/credenciales"

export const deleteMessage = async (e, activeChannel, id) => {
  e.preventDefault()
  try {
    await deleteDoc(doc(
    firestore, 
    `channels/${activeChannel}/messages/${id}`))
  } catch(e) {
    console.log("It was not possible to delete this message", e)
  }
  }