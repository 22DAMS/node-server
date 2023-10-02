const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Lista de tareas predeterminada
const listaTareas = [
  { Id: "01", Descripcion: "Pasear al perro", Estado: "Completada" },
  { Id: "02", Descripcion: "Practicar programacion", Estado: "Completada" },
  { Id: "03", Descripcion: "Hacer ejercicio", Estado: "Pendiente" },
];

//Mostrar tareas:
let mostrarTareas = () => {
  console.log("Lista de tareas: ");
  listaTareas.forEach((tarea, index) => {
    console.log(`${index + 1}. ${tarea.Descripcion} - [${tarea.Estado}]`);
  });
};

//Agregar tarea:
let agregarTarea = (descripcion) => {
  const nuevaTarea = { Id: "", Descripcion: "", Estado: "Pendiente" };
  nuevaTarea.Id = listaTareas.length + 1;
  nuevaTarea.Descripcion = descripcion;
  listaTareas.push(nuevaTarea);
  console.log("Tarea agregada con exito: ");
  console.log(nuevaTarea);
};

//Eliminar tarea:
let eliminarTarea = (indice) => {
  listaTareas.splice(indice, 1);
  console.log("Tarea eliminada correctamente.");
};

//Completar una tarea:
let completarTarea = (indice) => {
  listaTareas[indice].Estado = "Completada";
  console.log("Tarea marcada como completada");
};

// Pregunta inicial readline: (no anda)
function inicio() {
  const opciones = [
    "1. Mostrar Lista de tareas",
    "2. Agregar nueva tarea",
    "3. Eliminar tarea",
    "4. Completar tarea",
    "5. Salir",
  ];
  console.log("Menu: \n");
  console.log(opciones);
  readline.question("Elije una opcion: ", (opcion) => {
    switch (opcion) {
      case "1":
        mostrarTareas();
        inicio();
        break;
      case "2":
        readline.question("¿Cual tarea deseas ingresar?", (tarea) => {
          agregarTarea(tarea);
          inicio();
        });
        break;
      case "3":
        readline.question("¿Cual tarea deseas eliminar?", (tarea) => {
          eliminarTarea(tarea);
          inicio();
        });
        break;
      case "4":
        readline.question("¿Cual tarea deseas completar?", (tarea) => {
          completarTarea(tarea);
          inicio();
        });
        break;
      case "5":
        readline.close();
        break;
      default:
        console.log("Opcion no valida");
        inicio();
        break;
    }
  });
}

inicio();
