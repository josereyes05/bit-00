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