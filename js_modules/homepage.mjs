export default function homepage() {

  const main = document.querySelector('main');

  main.innerHTML = `
    <h2>Home</h2>
    <div class= "homeText">
      <p>Welcome to my page!</p>
      <p>Here you will find inspiration about miniature painting. Press Gallery in the menu above to see all of my latest works! Or go to Products to see my best tips about which gear I use on the daily!</p>
      <p>If you wish to get into contant with me, that information can be found in the About Me section.</p>
    </div>
  `
}