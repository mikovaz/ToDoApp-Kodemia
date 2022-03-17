export default class Todo{
    tarea= []
    tareaCompleta =0
    cargarLocalTarea(){
        const tareasLocal = localStorage.getItem('tareas')
        if (tareasLocal) {
            this.tarea = JSON.parse(tareasLocal);
            
        }
    }

    guardarStorage() {
        const tareaJson = JSON.stringify(this.tarea);
        localStorage.setItem('tareas', tareaJson);
    }
}