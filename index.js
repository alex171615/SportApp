// buscamos referencia al objeto button con id = agregar_alumno
const button_agregar = document.getElementById('agregar_alumno')

// forma clasica
// se indica que cada vez que se realice un click en el boton 'button_agregar'
// se ejecute la funcion 'acciones_del_click'
// button_agregar.addEventListener('click', acciones_del_click)

// defino una funcion en js
// function acciones_del_click() {
//     console.error('hola mundo!')
//     alert('hola mundo!')
// }

const nombre_alumno = document.getElementById('nombre')
const apellido_alumno = document.getElementById('apellido')
const dni_alumno = document.getElementById('dni')
const usuario_alumno = document.getElementById('usuario')
const contrasenia_alumno = document.getElementById('contrasenia')

// forma moderna
// funcion definida con 'funcion de flecha'
button_agregar.addEventListener('click', () => {
    //para acceder al contenido del objeto (input) se debe colocar el atributo 'value'

    // crea un objeto js Alumno
    const alumno = {
        nombre: nombre_alumno.value,
        apellido: apellido_alumno.value,
        dni: parseInt(dni_alumno.value),
        usuario: usuario_alumno.value,
        contrasenia: contrasenia_alumno.value
    }

    // acceder a atributos del objeto mediante el punto
    console.log(alumno.nombre)

    // informa objeto Alumno en formato JSON
    console.log(alumno)

    // informa objeto Alumno en formato de tabla
    console.table(alumno)
})

