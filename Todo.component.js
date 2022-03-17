export default class Todo{
    tarea= []
    cargarLocalTarea(){
        const tareasLocal = localStorage.getItem('tareas');
        if (tareasLocal) {
            this.tarea = JSON.parse(tareasLocal);
            
        }
    }

    guardarStorage() {
        const tareaJson = JSON.stringify(this.tarea);
        localStorage.setItem('tareas', tareaJson);
    }
}