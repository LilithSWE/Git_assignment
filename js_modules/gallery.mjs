export default function gallery() {

  const main = document.getElementById('main');
  const imageArray = require("../images")


  imageArray.forEach(image => {

    main.innerHTML = `
     <div class="item">
        <img src= ${image.scr} alt=${image.alt}>
        <div class="titleAndDateContainer">
          <h2 class="headline">${image.title}</h2>
          <p class="date">${image.date}</p>
        </div>
        <p class="imgtext">${image.imgText}</p>
      </div>
    `
  });
}