import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function running() {
  state.isRunning = document.documentElement.classList.toggle('running')
  
  state.isRunning ? timer.countdown() : clearTimeout(state.idCountdown)
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')

  clearTimeout(state.idCountdown)

  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function set() {
  sounds.buttonPressAudio.play()

  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function add() {
  sounds.buttonPressAudio.play()

  let minutes = Number(el.minutes.textContent) + 5
  let seconds = Number(el.seconds.textContent)

  if (minutes > 60) {
    minutes = 60
    seconds = 0
  }

  timer.updateDisplay(minutes, seconds)
}

export function remove() {
  sounds.buttonPressAudio.play()

  let minutes = Number(el.minutes.textContent) - 5
  let seconds = Number(el.seconds.textContent)

  if (minutes < 0) {
    return
  }

  timer.updateDisplay(minutes, seconds)
}

export function play(music) {
  document.getElementById(music).classList.toggle('active')
  sounds.musics[music].paused ? sounds.musics[music].play() : sounds.musics[music].pause()
}