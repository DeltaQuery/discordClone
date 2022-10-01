import { getFirestore, collection, getDocs } from "firebase/firestore"
const firestore = getFirestore(firebaseApp)
import firebaseApp from "../firebase/credenciales"

export const getMessages = async (activeChannel) => {
    const messagesArr = []

    const coleccionRef = collection(
      firestore,
      `channels/${activeChannel}/messages`
    )
    const mensajesJeroglificos = await getDocs(coleccionRef)
    mensajesJeroglificos.forEach(message => {
      messagesArr.push(message.data())
    })

    return messagesArr
  }