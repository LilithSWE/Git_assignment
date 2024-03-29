(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();function l(){const t=document.querySelector("main");t.innerHTML=`
    <h2>Home</h2>
    <div class= "homeText">
      <p>Welcome to my page!</p>
      <p>Here you will find inspiration about miniature painting. Press Gallery in the menu above to see all of my latest works! Or go to Products to see my best tips about which gear I use on the daily!</p>
      <p>If you wish to get into contant with me, that information can be found in the About Me section.</p>
    </div>
  `}const c=[{scr:"./images/wip.png",alt:"A miniature bust depicting a lady with two daggers and pearlecent cloth",title:"Current WIP",date:"31 januari 2024",imgText:"Got some more paint on the cloth today. This lady feels like an eternity project but she is getting closer to completion every session. "},{scr:"./images/hamster.png",alt:"A hamter minaiture with sword. Painted like Robin Hood.",title:"Sir Nibbles",date:"26 februari 2023",imgText:"Did a quick 1,5h somewhat sloppy paintjob on this little dude today. It was nice to get back to painting something after a long time away from the brush."},{scr:"./images/orc.png",alt:"An green orc miniature with an axe, shouting warcry.",title:"Orc",date:"23 oktober 2022",imgText:"Main focus on this one was using magenta to contrast the green skin, anything after that was semi hastily painted as to finish the model before it went to the 'shall never be finished/' - pile."},{scr:"./images/clown.png",alt:"A clown miniture painted in a menacing and haunting way",title:"Scary Clown",date:"17 juli 2022",imgText:"Finished up my clown I started on a week or so back! I'm quite pleased with how it turned out, got to try spraying a little with the airbrush as well "},{scr:"./images/troggoth.png",alt:"A blue miniature Warhammer troggoth holding a club and a goblin",title:"Troggoth",date:"25 maj 2022",imgText:"The paint job on the Troggoth is pretty much done. It's nowhere near his finish ofc but I do feel like my skill level has increased with this paintjob, especially the line work and leather texture."},{scr:"./images/squigs.png",alt:"A paintied miniature with two Warhammer Squigs on a desert base",title:"Squigs",date:"24 april 2022",imgText:"The mangler squigs are done! Super pleased with this one. Made an attempt at NMM but the real challenge for this project was the blending from one colour to another (belly to back) on the squigs. As I've yet to purchase an airbrush this was mainly make with stippling and drybrushing, with some glazing to smoothen things out."}];async function d(){const t=document.querySelector("main"),i=document.createElement("div");i.classList.add("gallery"),t.innerHTML="",i.innerHTML=`
  <h2>Gallery</h2>
  <p>Here you will find my old, and current, hobby projects! 
  I hope you like them! You can find more of these at my hobby instagram  
  <a href="https://www.instagram.com/amandasminiatures/">@amandasminatures</a>. 
  Hope to see you there as well!</p>`,c.forEach(a=>{i.innerHTML+=`
     <div class="post">
        <img src= ${a.scr} alt=${a.alt}>
        <div class="titleAndDateContainer">
          <h3 class="headline">${a.title}</h3>
          <p class="date">${a.date}</p>
        </div>
        <p class="imgtext">${a.imgText}</p>
      </div>
    `}),t.appendChild(i)}function u(){const t=document.querySelector("main");t.innerHTML=`
  <h2>About Me</h2>
  <p>My name is Amanda and I have been in the hobby for about a year and a half. 
  I wouldn't say I paint as regularly as I perhaps should, but I do enjoy painting with friends from time to time. 
  Recently I have joined up in a painting club in Gothenburg on Mondays, so I'm bound to increase the time spent painting going forward!</p>
  <p> You can find more of my work at: <a href="https://www.instagram.com/amandasminiatures/">@amandasminatures</a>.</p>`}function o(){const t=document.querySelector("header");t.innerHTML=`
  <h1>Minature Painting</h1>
  <div class="navBtns">
    <button id="homeBtn">Home</button>
    <button id="galleryBtn">Gallery</button>
    <button id="aboutBtn">About Me</button>
  </div>`,h()}function h(){const t=document.querySelector("h1"),i=document.getElementById("homeBtn"),a=document.getElementById("galleryBtn"),r=document.getElementById("aboutBtn");t.addEventListener("click",()=>{l(),o()}),i.addEventListener("click",()=>{l(),o()}),a.addEventListener("click",()=>{d(),o()}),r.addEventListener("click",()=>{u(),o()})}const m=document.querySelector("main");m.innerHTML=`
<h2>The JS module files are not connecting! Please contact your local software developer.</h2>`;o();l();
