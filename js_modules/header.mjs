
export default function header() {

  const header = document.querySelector('header')

  header.innerHTML = `
  <h1>Minature Painting</h1>
  <div class="navBtns">
    <button id="homeBtn">Home</button>
    <button id="galleryBtn">Gallery</button>
    <button id="productsBtn">Products</button>
    <button id="aboutBtn">About Me</button>
  </div>
  `
}