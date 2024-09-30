const alunos = [
  "Lian",
  "Nicolas",
  "Paulino",
  "Felipe",
  "Isadora",
  "Lucas",
  "Guilherme ",
  "Andrei",
  "Tais"
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function sortearAluno() {
  const numeroAleatorio = getRndInteger(0, alunos.length); // Gera um número entre 0 e 8
  let aluno;

  if (numeroAleatorio === 0) {
    aluno = alunos[0];
  } else if (numeroAleatorio === 1) {
    aluno = alunos[1];
  } else if (numeroAleatorio === 2) {
    aluno = alunos[2];
  } else if (numeroAleatorio === 3) {
    aluno = alunos[3];
  } else if (numeroAleatorio === 4) {
    aluno = alunos[4];
  } else if (numeroAleatorio === 5) {
    aluno = alunos[5];
  } else if (numeroAleatorio === 6) {
    aluno = alunos[6];
  } else if (numeroAleatorio === 7) {
    aluno = alunos[7];
  } else if (numeroAleatorio === 8) {
    aluno = alunos[8];
  }

  const resultado = document.getElementById('sorteio');
  resultado.innerHTML = aluno; // Mostra o nome do aluno correspondente
  resultado.classList.remove('visible'); // Remove a classe de visibilidade
  setTimeout(() => {
    resultado.classList.add('visible'); // Adiciona a classe após um tempo para a animação
  }, 10); // Pequeno delay para garantir que a animação ocorra
}
