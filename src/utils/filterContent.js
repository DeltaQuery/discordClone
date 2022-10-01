export const filterContent = (originalText) => {
    const badWords = ["tonto", "hdp", "mk"]
    const array = originalText.split(" ")
    array.forEach((word, index) => {
      if (badWords.includes(word)) {
        array[index] = "****"
      }
    })

    return array.join(" ")
  }