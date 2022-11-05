import { getFirestore, collection, getDocs } from "firebase/firestore"
const firestore = getFirestore(firebaseApp)
import firebaseApp from "../firebase/credenciales"

export const getChannels = async () => {
    let channelsArr = []
    const collectionRef = collection(firestore, "channels")
    const canalesCifrados = await getDocs(collectionRef)
    canalesCifrados.forEach((canalCifrado) => {
      channelsArr.push(canalCifrado.data())
    })
    //channelsArr = channelsArr.sort(function (a, b) { return a.timestamp.seconds - b.timestamp.seconds })
    return channelsArr
  }