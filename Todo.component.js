export default class Todo{
    tarea= []
    tareaCompleta = []
    cargarLocalTarea(){
        const tareasLocal = localStorage.getItem('tareas')
        if (tareasLocal) {
            this.tarea = JSON.parse();
        }
    }

    guardarStorage() {
        const tareaJson = JSON.stringify(this.tarea);
        localStorage.setItem('tareas', tareaJson);
    }
}