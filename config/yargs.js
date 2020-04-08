const argv = require("yargs")
    .command('crear', 'Crear un elemento por hacer ', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }

    })
    .command('borrar', 'Elimina un elemento', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por borrar'
        }

    })
    .command('listar', 'Lista tareas por hacer')
    .command('actualizar', 'Actualizar el estado completado de un tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por actualizar'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Indica si el estado en completado'

        }

    })
    .help()
    .argv;


module.exports = {
    argv
}