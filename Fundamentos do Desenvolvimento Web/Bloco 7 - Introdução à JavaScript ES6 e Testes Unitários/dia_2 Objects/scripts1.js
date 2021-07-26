
function asd(obj, key, value) {
  obj = {};
  const objeto = obj;
  let chave = key;
const valor = value;
objeto[chave] = valor;
console.log(objeto);
}

(asd('cliente', 'nome','elias'));

//

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);




