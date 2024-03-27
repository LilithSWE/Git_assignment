import homepage from "./homepage.mjs"
import gallery from "./gallery.mjs"

export default function header() {

  const header = document.querySelector('header')

  header.innerHTML = `
  <h1>Minature Painting</h1>
  <div class="navBtns">
    <button id="homeBtn">Home</button>
    <button id="galleryBtn">Gallery</button>
    <button id="productsBtn">Products</button>
    <button id="aboutBtn">About Me</button>
  </div>`

  addEventListerners()
}

function addEventListerners() {
  const title = document.querySelector('h1')
  const homeBtn = document.getElementById('homeBtn')
  const galleryBtn = document.getElementById('galleryBtn')
  const productsBtn = document.getElementById('productsBtn')
  const aboutBtn = document.getElementById('aboutBtn')

  title.addEventListener('click', () => {
    homepage();
    header();
  })

  homeBtn.addEventListener('click', () => {
    homepage();
    header();
  })

  galleryBtn.addEventListener('click', () => {
    gallery()
    header();
  })

  productsBtn.addEventListener('click', () => {
    header();
  })

  aboutBtn.addEventListener('click', () => {
    header();
  })

}