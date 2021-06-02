const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function recebeClick(eventoDeOrigem) {
  let techButton = document.querySelector('.tech');
  techButton.classList.remove('tech');
  eventoDeOrigem.target.classList.add('tech');
}


divUm.addEventListener('click', recebeClick);
divDois.addEventListener('click', recebeClick);
divTres.addEventListener('click', recebeClick);

function caixaTexto (evento){
let techButton = document.querySelector('.tech');
techButton.innerText = evento.target.value;
}

input.addEventListener('input', caixaTexto);

let redirecionar = document.querySelector('#mySpotrybefy');

redirecionar.addEventListener('dblclick', function (){
  window.open('https://blog.betrybe.com/');
})

// podemos utilizar window.replace ou window.assing ( a diferença é que não abrem em outra aba e o replace não volta no browser)

redirecionar.addEventListener('mouseover', function (eventoMouse){
  eventoMouse.target.style.color = 'red';
})

redirecionar.addEventListener('mouseout', function (eventoMouse){
  eventoMouse.target.style.color = 'white';
})

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
