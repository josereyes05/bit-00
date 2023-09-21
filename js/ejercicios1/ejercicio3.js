let nombre = prompt('Hola, ingresa tu nombre')

let edad = prompt(`Hola, ${nombre} ¿Cuantos años tienes?`)

let res = parseInt(edad)

if(res >= 18) alert(`Hola ${nombre} eres mayor de edad`)
else alert(`uy ${nombre} eres menor de edad`)