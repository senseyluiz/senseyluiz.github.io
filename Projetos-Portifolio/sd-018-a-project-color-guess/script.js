// Requisito3
// Adicionando o formato RGB que precisa ser adivinhado
const corRandom = document.querySelector('#rgb-color');
const responder = document.querySelector('#answer');
const placar = document.querySelector('#score');
placar.innerHTML = 0;

const paleta = document.querySelector('#paleta');
let cor = '';
let score = 0;
score = Number(localStorage.getItem('score'));
placar.innerText = score;

const corGerada = corRandom.innerText;
console.log(`Cor gerada: ${corGerada}`);

function criarPaleta() {
  for (let i = 0; i < paleta.children.length; i += 1) {
    const r = parseInt(Math.random() * 255);
    const g = parseInt(Math.random() * 255);
    const b = parseInt(Math.random() * 255);
    paleta.children[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}
criarPaleta();

function gerarRGB() {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  corRandom.innerText = paleta.children[parseInt(Math.random() * 5)].style.backgroundColor;
  cor = corRandom.innerText;
}
gerarRGB();

paleta.addEventListener('click', (e) => {
  if (e.target.style.backgroundColor === cor) {
    score += 3;
    responder.innerHTML = 'Acertou!';
    placar.innerText = score;
    localStorage.setItem('score', score);
  } else {
    responder.innerHTML = 'Errou! Tente novamente!';
  }
});
