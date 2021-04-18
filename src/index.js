import { consola } from './js/componentes.js';
import './styles.css';

import logo from './assets/webpack.svg';
import gemini from './assets/saga-kanon.png';


// const nombre = 'Alex';
// saludar( nombre );


const d = document,
    $app = d.getElementById('app'),
    $h1 = d.createElement("h1"),
    $logo = d.createElement('img'),
    $img = d.createElement('img');


$h1.textContent = 'Hola Mundo con Webpack en 2021';
$logo.src = logo;
$logo.classList.add('icon');
$img.src = gemini;


$app.append($h1);
$app.append($logo);
$app.append($img);



consola();
