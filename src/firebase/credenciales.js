// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app"

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyBYHaiUcl5dmgfyVwiXVRJKulm3d_zhPew",
  authDomain: "discord-clone-73830.firebaseapp.com",
  projectId: "discord-clone-73830",
  storageBucket: "discord-clone-73830.appspot.com",
  messagingSenderId: "25544176933",
  appId: "1:25544176933:web:4f4eb70584ea5c9eff16cc",
  measurementId: "G-SH2STRGV2Z"
}

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig)
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp
