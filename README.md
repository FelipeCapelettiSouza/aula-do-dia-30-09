# aula-do-dia-30-09
# ativiade Fazer um botão pra cada evento comum: 
1. onchange
2. onclick
3. onmouseover
4. onmouseout
5. onkeydown
6. onload

no HTML:

<button onclick="document.getElementById('sorteio').innerHTML = getRndInteger(1,9)">Aluno favorito</button>

<p id="sorteio"></p>


no app.js:

function getRndInteger(min, max) {

  return Math.floor(Math.random() * (max - min) ) + min;

}
DESAFIO: Encontrar como colocar um número pra cada aluno, e aparecer o nome.
