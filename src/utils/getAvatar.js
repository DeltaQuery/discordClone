import gaara from "../assets/gaara.jpg"
import itachi from "../assets/itachi.jpg"
import jiraiya from "../assets/jiraiya.jpg"
import kakashi from "../assets/kakashi.jpg"
import madara from "../assets/madara.jpg"
import naruto from "../assets/naruto.png"
import sakura from "../assets/sakura.jpg"
import sasori from "../assets/sasori.jpg"
import sasuke from "../assets/sasuke.jpg"
import tsunade from "../assets/tsunade.jpg"
import chiyo from "../assets/chiyo.jpg"
import tobi from "../assets/tobi.jpg"
import pein from "../assets/pein.jpg"
import deidara from "../assets/deidara.jpg"
import orochimaru from "../assets/orochimaru.webp"

export const getAvatar = () => {
    function generateRandomInteger(min, max) {
        return Math.floor(min + Math.random()*(max - min + 1))
      }
    const random = generateRandomInteger(1,15)

    if(random === 1) return gaara
    if(random === 2) return itachi
    if(random === 3) return jiraiya
    if(random === 4) return kakashi
    if(random === 5) return madara
    if(random === 6) return naruto
    if(random === 7) return sakura
    if(random === 8) return sasori
    if(random === 9) return sasuke
    if(random === 10) return tsunade
    if(random === 11) return chiyo
    if(random === 12) return tobi
    if(random === 13) return pein
    if(random === 14) return deidara
    if(random === 15) return orochimaru
}

