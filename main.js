import {tareas, elementos} from './Global.js'

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
    //elementos.alertaGuardar.style.display = '';
    setTimeout(() => {
       // elementos.alertaGuardar.style.display = 'none';
        window.renderizarTarea(tareas.tarea);
    }, 1000);
    console.log(tareas.tarea)
}

const divTarea = (tarea)=>{
    const div = `<div class="d-flex justify-content-between align-items-center pointer" ondblclick="dobleClickTarea(id)">
                        <p class="fw-bold">${tarea.nombreTarea}</p>
                        <div>
                            <button class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>`
    return div
}

window.renderizarTarea = (tareas) => {
    /**
     * const cardsEnDiv = divTarea.children;
     console.log(cardsEnDiv)
    if (cardsEnDiv.length > 0) {
        const cards = Array.from(cardsEnDiv);
        cards.forEach((card) => {
            divTarea.removeChild(card);
        })
    }
     */
     
    tareas.forEach((tarea) => {
        const card = divTarea(tarea);
        elementos.divTarea.insertAdjacentHTML('afterbegin', card);
    });
}
