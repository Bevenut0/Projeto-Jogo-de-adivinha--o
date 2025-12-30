/*
 1- o usuario deve chutar um numero e o sistema dar a resposta se é maior ou menor
 1.1 criar numero aleatorio - FEITO
 1.2 pegar numero do chute do usuario - FEITO
 1.3 ver se numero do usuario é maior ou menor - FEITO
 1.4 colocar no html se o numero do usuario é maior ou menor 
 */
//dados
const numberID = document.getElementById('number');
const buttonID = document.getElementById('chutar');


const geradorNumeroRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

const numeroAleatorio = parseInt(geradorNumeroRandom(1, 100))

let contagem = 0;


buttonID.addEventListener('click', () => {
  const textoHtml = document.getElementById('resposta');
  const final = document.getElementById('resposta-final');
  const contador = document.getElementById('contador')
  contagem = ++contagem
  contador.textContent = contagem
  numberValue = numberID.value;
  
  if (numeroAleatorio > numberValue) {
    textoHtml.textContent = `O NÚMERO É MAIOR QUE ${numberValue}`
  } else if (numeroAleatorio == numberValue) {
    textoHtml.style.color = '#6aff6a';
    textoHtml.textContent = `PARABENS O NUMERO É (${numberValue}), REINICIE PRA JOGAR DENOVO`;
    final.textContent =  numeroAleatorio
  } else {
    textoHtml.textContent = `O NÚMERO É MENOR QUE ${numberValue}`
  }
})





