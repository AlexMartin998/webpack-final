import { consola } from './js/componentes.js';
import './styles.css';

import logo from './assets/webpack.svg';
import gemini from './assets/saga-kanon.png';
import data from './data.json';


// const nombre = 'Alex';
// saludar( nombre );


const d = document,
    $app = d.getElementById('app'),
    $h1 = d.createElement("h1"),
    $logo = d.createElement('img'),
    $img = d.createElement('img'),
    $nav = d.createElement('nav');

let menu = '';
data.links.forEach(e => {
    menu += `<a href="${e[1]}">${e[0]}</a>`
});

$h1.textContent = 'Hola Mundo con Webpack en 2021';
$logo.src = logo;
$logo.classList.add('icon');
$img.src = gemini;
$nav.innerHTML = menu;
$nav.classList.add('menu');


$app.append($h1);
$app.append($logo);
$app.append($nav);
$app.append($img);



consola();
