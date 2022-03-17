import {tareas, elementos, numeroTareasPendientes} from './Global.js'

const init = ()=>{
    initTodo()
    
}

const initTodo = ()=>{
    tareas.cargarLocalTarea()
    window.renderizarTarea(tareas.tarea)
    numeroTareasPendientes.innerText = tareas.tarea.length
}

window.guardaTarea = (e) => {
    e.preventDefault();
    const tiempoActual = new Date();
    const inputsNode = e.target.querySelector('input');
    const inputs = Array.from(inputsNode);
    let tarea = {}
    tarea.nombreTarea = inputsNode.value;
    tarea.id = `${tiempoActual.getTime()}-${tiempoActual.getMilliseconds()}`;
    tareas.tarea.push(tarea);
    tareas.guardarStorage();
    window.renderizarTarea(tareas.tarea);
    console.log(tareas.tarea.length)
    console.log(numeroTareasPendientes)
    numeroTareasPendientes.innerText = tareas.tarea.length
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
    numeroTareasPendientes.innerText = tareas.tarea.length

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
    let pivo
    const idP = document.getElementById(`${id}`)
    const varTareComple= document.getElementById('tareasCompletas')
    console.log(idP)
    pivo = idP.classList.toggle('complete')
    console.log(pivo)
    if(pivo == true ) tareas.tareaCompleta++
   
        else tareas.tareaCompleta--
     
    varTareComple.innerText = tareas.tareaCompleta
    const parentDeP = document.getElementById(`${id}`).parentElement;
    parentDeP.classList.toggle('border-success')
}

initTodo()