//definir evento 'DOMContentLoaded' con funcion declarada
// document.addEventListener('DOMContentLoaded', cargaInicial)

// function cargaInicial() {

// }

//definir evento 'DOMContentLoaded' con funcion anonima
document.addEventListener('DOMContentLoaded', () => {

    let Cristhian = {
        nombre: 'Cristhian',
        apellido: 'mayta',
        edad: 19,
        email: 'voy@rtucasa.com'
        
    }

    let Beymar = {
        nombre: 'Beymar',
        apellido: 'leon',
        edad: 20,
        email: 'algo@mail.com'
    }
    let Jorge = {
        nombre: 'Jorge',
        apellido: 'Claros',
        edad: 20,
        email: 'algo@mail.com'
    }
    let alexis = {
        nombre: 'Alexis',
        apellido: 'n',
        edad: 20,
        email: 'algo@mail.com'
    }
    let jhonny = {
        nombre: 'jhonny',
        apellido: 'vicente',
        edad: 20,
        email: 'algo@mail.com'
    }
    let Arturo = {
        nombre: 'arturo',
        apellido: 'perez',
        edad: 20,
        email: 'algo@mail.com'
    }
    let Andres = {
        nombre: 'andres',
        apellido: 'perez',
        edad: 20,
        email: 'algo@mail.com'
    }
    let juan = {
        nombre: 'juan',
        apellido: 'sacaca',
        edad: 20,
        email: 'algo@mail.com'
    }
    let jennifer = {
        nombre: 'jenifer',
        apellido: 'tafur',
        edad: 20,
        email: 'algo@mail.com'
    }
    let diana = {
        nombre: 'diana',
        apellido: 'galeano',
        edad: 20,
        email: 'algo@mail.com'
    }
    let jessi = {
        nombre: 'jesii',
        apellido: 'torrez',
        edad: 20,
        email: 'algo@mail.com'
    }
    let cristian = {
        nombre: 'cristian',
        apellido: 'centurion',
        edad: 20,
        email: 'algo@mail.com'
    }
    let Nicolas = {
        nombre: 'Nicolas',
        apellido: 'Benitez',
        edad: 20,
        email: 'algo@mail.com'
    }
    let Brus = {
        nombre: 'Brus',
        apellido: 'kim',
        edad: 20,
        email: 'algo@mail.com'
    }
    let inti = {
        nombre: 'inti',
        apellido: 'kim',
        edad: 20,
        email: 'algo@mail.com'
    }

    let alumnos = []

    alumnos.push(Cristhian)
    alumnos.push(Beymar)
    alumnos.push(Brus)
    alumnos.push(Andres)
    alumnos.push(Arturo)
    alumnos.push(Jorge)
    alumnos.push(jhonny)
    alumnos.push(jessi)
    alumnos.push(diana)
    alumnos.push(cristian)
    alumnos.push(Nicolas)
    alumnos.push(alexis)
    alumnos.push(juan)
    alumnos.push(jennifer)
    alumnos.push(inti)
    


    console.log(alumnos)

    // let alumno1 = document.getElementById('alumno1')
    // alumno1.innerHTML = alumnos[0].nombre

    // let alumno2 = document.getElementById('alumno2')
    // alumno2.innerHTML = alumnos[1].nombre
    let clase = document.getElementById('clase')
    let tarjetas = `<div class="columns">`

    for (var i = 0; i < alumnos.length; i++) {
        //crear una tarjeta para cada alumno con el nombre
        tarjetas += `
        <div class="column is-one-fifth">
            <div class="box">
                ${alumnos[i].nombre + i}
            </div>
        </div>
        `
        if ((i + 1) % 5 == 0 && i > 0) {
            tarjetas += `
            </div> 
            <div class="columns">
            `
        }
    }

    tarjetas += `</div>`

    console.log(tarjetas)
    clase.innerHTML = tarjetas
})