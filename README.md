no HTML:

<button onclick="document.getElementById('sorteio').innerHTML = getRndInteger(1,9)">Aluno favorito</button>

<p id="sorteio"></p>


no app.js:

function getRndInteger(min, max) {

  return Math.floor(Math.random() * (max - min) ) + min;

}
DESAFIO: Encontrar como colocar um número pra cada aluno, e aparecer o nome.
