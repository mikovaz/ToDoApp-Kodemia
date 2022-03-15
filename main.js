import {tareas, elementos, numeroTareasPendientes} from './Global.js'

const init = ()=>{
    initTodo()
    
}

const initTodo = ()=>{

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
    const div = `<div class="d-flex justify-content-between align-items-center pointer" ondblclick="dobleClickTarea()">
                        <p class="fw-bold">${tarea.nombreTarea}</p>
                        <div>
                            <button class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
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

window.dobleClickTarea = () => {
    
}


