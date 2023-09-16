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
