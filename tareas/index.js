const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json','utf-8'));


module.exports = { agregarTarea : function(Titulo, Estado) {
    let nuevaTarea = {
        Titulo,
        Estado,
    }
    tareas.push(nuevaTarea)
    this.guardarJson(tareas);
},

listarTareas : function (){
    tareas.forEach(tareas => {
        console.log(tareas);
    });
},

filtrarPorEstado : function(filtro){
    let tareasFiltradas = tareas.filter(tareas => tareas.Estado === filtro );
    console.log(tareasFiltradas)
},

guardarJson : function (tareas) {
    fs.writeFileSync('./db/tareas.json', JSON.stringify(tareas), 'utf-8')
}

}