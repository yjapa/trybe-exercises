// const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

// let select = document.getElementById('input-state');

// for (let i = 0; i < estados.length; i += 1) {
//   let options = document.createElement('option');
//   options.innerHTML = estados[i];
//   options.value = estados[i];
//   select.appendChild(options);
// }

// Função verifica formato data

let button = document.getElementById('button');

button.addEventListener('click',(event) => {
  event.preventDefault();
  let data = document.getElementById('input-date').value;
  let data = /^\d\d\/\d\d\/\d\d\d\d$/;
  if(!data.test(input.value)){
    return {
      message: 'Data: Formato inválido'
    };
  }
}) 



