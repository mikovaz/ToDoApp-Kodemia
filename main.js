import {tareas, elementos, numeroTareasPendientes, numeroTareasCompletadas} from './Global.js'

const init = ()=>{
    initTodo()
    
}

const initTodo = ()=>{
    tareas.cargarLocalTarea()
    window.renderizarTarea(tareas.tarea)
    contadorTareas()
}

window.guardaTarea = (e) => {
    e.preventDefault();
    const tiempoActual = new Date();
    const inputsNode = e.target.querySelector('input');
    const inputs = Array.from(inputsNode);
    let tarea = {}
    tarea.nombreTarea = inputsNode.value;
    tarea.id = `${tiempoActual.getTime()}-${tiempoActual.getMilliseconds()}`;
    tarea.tareaCompletada = false;
    tareas.tarea.push(tarea);
    tareas.guardarStorage();
    window.renderizarTarea(tareas.tarea);
    inputsNode.value = ''
    contadorTareas()    
}

const divTarea = (tarea)=>{
    const div = `<div class="d-flex justify-content-between align-items-center pointer border rounded p-2" ondblclick="dobleClickTarea('${tarea.id}')">
                        <p id=${tarea.id} class="fw-bold">${tarea.nombreTarea}</p>
                        <div>
                            <button  class="btn btn-primary" onclick="modificarTarea('${tarea.id}')"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn btn-danger" onclick="eliminarTarea('${tarea.id}')"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>`
    return div
}

window.renderizarTarea = (tareas) => {
    const divTareas = document.getElementById("divTareas")
     while (divTareas.firstChild) {
         divTareas.removeChild(divTareas.firstChild);
     }

    tareas.forEach((tarea) => {
        const card = divTarea(tarea);
        elementos.divTarea.insertAdjacentHTML('afterbegin', card);
        const divClase = elementos.divTarea.firstChild
        if (tarea.tareaCompletada == true) {
            let childDiv = divClase.firstChild
            let pChildDiv =childDiv.nextElementSibling
            divClase.classList.add('border-success')
            pChildDiv.classList.add('complete')
        }
    });
}

window.eliminarTarea = (id)=>{
    console.log('Entro '+id)
    const data = tareas.tarea.filter((tarea) => {
        return tarea.id != id;
    });
    console.log(data)
    tareas.tarea=data
    tareas.guardarStorage()
    renderizarTarea(tareas.tarea)
    contadorTareas()

}

window.modificarTarea = (id) =>{
    let nombreTarea = prompt('Modifica tu tarea')
    const tarea = tareas.tarea.find((tarea) => {
        return tarea.id == id
    })
    console.log(tarea)
    tarea.nombreTarea = nombreTarea
    renderizarTarea(tareas.tarea)
}

window.dobleClickTarea = (id) => {
    const idP = document.getElementById(`${id}`)
    let idPChecker = idP.classList.contains('complete')
    idP.classList.toggle('complete')
    const parentDeP = document.getElementById(`${id}`).parentElement;
    parentDeP.classList.toggle('border-success')

    let lengthArrayToDo = tareas.tarea.length;
    for (let i = 0; i < lengthArrayToDo; i++){
        if (tareas.tarea[i].id == id){
            if (idPChecker == false){
                tareas.tarea[i].tareaCompletada = true
                tareas.guardarStorage()
                console.log(`entro al if y ${tareas.tarea[i].tareaCompletada}`)
            } else {
                tareas.tarea[i].tareaCompletada = false
                tareas.guardarStorage()
                console.log(`entro al else y ${tareas.tarea[i].tareaCompletada}`)
            }
        }
    }

    contadorTareas()
    tareas.guardarStorage()
}

const contadorTareas = () => {
    let contadorTareasPendientes = tareas.tarea.filter(tarea => tarea.tareaCompletada == false);


    let contadorTareasCompletadas = tareas.tarea.filter(tarea => tarea.tareaCompletada == true)

    numeroTareasPendientes.innerText = contadorTareasPendientes.length
    numeroTareasCompletadas.innerText = contadorTareasCompletadas.length

    tareas.guardarStorage()
    }

initTodo()
contadorTareas()