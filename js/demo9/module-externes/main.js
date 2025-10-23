import './style.css'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

document.querySelector('#successBtn').addEventListener('click', () => {
  Toastify({
    text: "Opération réussie!",
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast()
})

document.querySelector('#errorBtn').addEventListener('click', () => {
  Toastify({
    text: "Une erreur s'est produite",
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #ff5f6d, #ffc371)",
    }
  }).showToast()
})

document.querySelector('#infoBtn').addEventListener('click', () => {
  Toastify({
    text: "Voici une info utile",
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #00d2ff, #3a7bd5)",
    }
  }).showToast()
})
