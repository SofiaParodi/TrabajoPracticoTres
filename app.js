const moduloTareas = require('./tareas')
const process = require('process');
let Accion = process.argv[2];

switch (Accion) { 
    case 'agregar' :
     let Titulo = process.argv[3];
     if (!Titulo) {
         console.log("Por favor, ingrese un título");
         break;
     }
     let Estado = process.argv[4];
     moduloTareas.agregarTarea(Titulo, Estado);
    break;

    case 'listar' :
        moduloTareas.listarTareas();
    break;

    case 'filtrar':
        moduloTareas.filtrarPorEstado(process.argv[3])
     break;

    case undefined : 
        console.log("Atención - Tenés que pasar una acción.")
    break;

    default :
        console.log("No entiendo qué querés hacer.")
    break;
}