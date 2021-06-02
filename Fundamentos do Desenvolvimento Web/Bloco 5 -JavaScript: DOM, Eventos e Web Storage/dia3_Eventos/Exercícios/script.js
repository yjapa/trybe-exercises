function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function daysCalendar () {
  let elementoPai = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayLi = document.createElement('li');
    if (day === 4 || day ===  11 || day === 18) {
      dayLi.innerHTML = day;
      dayLi.className = 'day friday';
      elementoPai.appendChild(dayLi);
    } else if (day === 24 || day === 31) {
      dayLi.innerHTML = day;
      dayLi.className = 'day holiday';
      elementoPai.appendChild(dayLi);
    } else if (day === 25) {
      dayLi.innerHTML = day;
      dayLi.className = 'day holiday friday';
      elementoPai.appendChild(dayLi);
    } else {
      dayLi.innerHTML = day;
      dayLi.className = 'day';
      elementoPai.appendChild(dayLi);
    }
  };
};

daysCalendar();

function buttonHoliday (Feriados) {
  let buttonFather = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = 'Feriados';
  buttonFather.appendChild(button);
}

buttonHoliday('Feriados');

let eventButton = document.querySelector('#btn-holiday');
let backgroundOriginal = 'rgb(238,238,238)';
let background = 'red';

eventButton.addEventListener('click', function () {
  let holiday = document.querySelectorAll('.holiday');
  for (let index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor === background) {
      holiday[index].style.backgroundColor = backgroundOriginal;
    } else {
      holiday[index].style.backgroundColor = background;
    }
  }
})

function buttonSexta (Sextafeira){
  let buttonContainer = document.querySelector('.buttons-container');
  let buttonSextaFeira = document.createElement('button');
  buttonSextaFeira.id = 'btn-friday';
  buttonSextaFeira.innerHTML = 'Sexta-Feira';
  buttonContainer.appendChild(buttonSextaFeira);
}

buttonSexta();

let eventSexta =  document.querySelector('#btn-friday');
let todasSextas = document.querySelectorAll('.friday');
let textoSexta = 'Sextou';
let sextasFeira = [4, 11, 18, 25];

eventSexta.addEventListener('click', function(){
  for (let i = 0; i < todasSextas.length; i += 1) {
    if (todasSextas[i].innerHTML === textoSexta) {
      todasSextas[i].innerHTML = sextasFeira[i] ;
    } else {
      todasSextas[i].innerHTML = textoSexta;
    }
  }
})

let maisZ = document.querySelector('#days');


maisZ.addEventListener('mouseover', function (zoom){
  zoom.target.style.fontSize = '35px';
})


maisZ.addEventListener('mouseout', function (zoom) {
  zoom.target.style.fontSize = '20px';
})

let myTasks = document.querySelector('.my-tasks');

function tarefas (string) {

  let tagElemento = document.createElement('span');
  tagElemento.innerHTML = string;

  myTasks.appendChild(tagElemento);
}

tarefas('cozinhar');

function corLegenda (cor) {
  let tagDiv = document.createElement('div');

  tagDiv.className = 'task';
  tagDiv.style.backgroundColor = cor;
  
  myTasks.appendChild(tagDiv);
}

corLegenda('yellow');

let classeTask = document.querySelector('.task');

classeTask.addEventListener('click', function (event){
  if (classeTask.className === 'task selected') {
    classeTask.className = 'task';
  } else {
    classeTask.className = 'task selected';
  }
})

let elementoPai = document.querySelector('#days');
let diasColoridos = document.querySelectorAll('.day');

elementoPai.addEventListener('click', function () {
  diasColoridos = classeTask.value;
})

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();