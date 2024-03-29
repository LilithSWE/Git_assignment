import './styling/style.css'
import homepage from './js_modules/homepage.mjs';
import header from './js_modules/header.mjs';

const main = document.querySelector('main');
main.innerHTML = `
<h2>The JS module files are not connecting! Please contact your local software developer.</h2>`


header();
homepage();

