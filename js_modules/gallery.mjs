import imageArray from "../images.json";

export default function gallery() {
  const main = document.querySelector('main');
  main.innerHTML = `
  <h2>Gallery</h2>
  <p>Here you will find my old, and current, hobby projects! 
  I hope you like them! You can find more of these at my hobby instagram  
  <a href="https://www.instagram.com/amandasminiatures/">@amandasminatures</a>. 
  Hope to see you there as well!</p>`
  imageArray.forEach(image => {
    main.innerHTML += `
     <div class="post">
        <img src= ${image.scr} alt=${image.alt}>
        <div class="titleAndDateContainer">
          <h3 class="headline">${image.title}</h3>
          <p class="date">${image.date}</p>
        </div>
        <p class="imgtext">${image.imgText}</p>
      </div>
    `
  });
}