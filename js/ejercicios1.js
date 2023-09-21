"use strict"


let nombre = prompt('Hola, ingresa tu nombre')

alert(`Hola ${nombre}, Como 'tas? :)`)

/*
let nombre = prompt('Hola, ingresa tu nombre')
let apellido = prompt('Hola, ingresa tu apellido')
alert(`Hola ${nombre} ${apellido}, Como 'tas? :)`)
let confirmacion = confirm('Hola'+' '+nombre+' '+apellido+' '+'¿Deseas continuar?')

//let con = confirmacion === true ? alert(`Bienvenido ${nombre} ${apellido}`) : alert(`Chao ${nombre} ${apellido}`)
if (confirmacion === true) {
    alert(`Bienvenido ${nombre} ${apellido}`)
    document.write(`Hola ${nombre} ${apellido}, Como tas? :)`)
}
else alert(`Chao ${nombre} ${apellido}`)
*/

/*
let nombre = prompt('Hola, ingresa tu nombre')

let edad = prompt(`Hola, ${nombre} ¿Cuantos años tienes?`)

let res = parseInt(edad)

if(res >= 18) alert(`Hola ${nombre} eres mayor de edad`)
else alert(`uy ${nombre} eres menor de edad`)
*/
/*
let rol = prompt('Hola, ¿Qué rol desempeñas?')

switch (rol){
    case'Admin':
        alert(`Acceso a ${rol} permitido :)`)
        break
    case 'admin':
        alert(`Acceso a ${rol} permitido :)`) 
        break
    case 'ventas':
        alert(`Acceso a ${rol} permitido :)`)
        break
    case 'Ventas':
        alert(`Acceso a ${rol} permitido :)`)
        break
    case 'cliente':
        alert(`Acceso a ${rol} permitido :)`)
        break
    case 'Cliente':
        alert(`Acceso a ${rol} permitido :)`)
        break
    default:
        alert(`${rol} no encontrado 😢`)
}
*/

/*
let doble = confirm("Por 2?");
let mitad = confirm("entre 2?");
let posneg = prompt("Inserta un número positivo o negativo");
let parimp = prompt("Inserta un número par o impar");
let nm = confirm("¿Vas a darme 2 números?");

let numpn = parseInt(posneg);
if (numpn === 0) {
  alert("Es 0 :)");
} else if (numpn < 0) {
  alert("Negativo");
} else if (numpn > 0) {
  alert("Positivo");
}

let npi = parseInt(parimp);
if (npi === 0) alert("Es 0");
else if (npi % 2 === 0) alert("Par");
else alert("Impar");

if (nm === true) {
  let n0 = prompt("Dame el primer numero");
  let n1 = parseInt(n0);
  let n02 = prompt("Dame el segundo numero");
  let n2 = parseInt(n02);
  if (n1 === n2) alert("Son iguales");
  else if (n1 > n2) alert(`${n1} es mayor`);
  else if (n2 > n1) alert(`${n2} es mayor`);
}
function Number(request, respnse) {
  if (doble === true) {
    let num = document.querySelector("#numero").value;
    let numero = parseInt(num);
    alert(numero * 2);
  } else if (mitad === true) {
    let num = document.querySelector("#numero").value;
    let numero = parseInt(num);
    alert(numero / 2);
  }
}
*/