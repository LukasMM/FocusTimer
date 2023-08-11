export const buttonPressAudio = new Audio('./assets/button-press.wav')

export const kitchenTimer = new Audio('./assets/kichen-timer.mp3')

const forest = new Audio('./assets/Floresta.wav')
const rain = new Audio('./assets/Chuva.wav')
const coffe = new Audio('./assets/Cafeteria.wav')
const fireplace = new Audio('./assets/Lareira.wav')

forest.loop = true
rain.loop = true
coffe.loop = true
fireplace.loop = true

export const musics = { forest, rain, coffe, fireplace }