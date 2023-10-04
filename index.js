const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const http = require("http");

//Lista de tareas predeterminada
const listaTareas = [
  { Id: "01", Descripcion: "Pasear al perro", Estado: "Completada" },
  { Id: "02", Descripcion: "Practicar programacion", Estado: "Completada" },
  { Id: "03", Descripcion: "Hacer ejercicio", Estado: "Pendiente" },
];

//Mostrar tareas:
let mostrarTareas = () => {
  return new Promise((resolve) => {
    console.log("Lista de tareas: ");
    setTimeout(() => {
      listaTareas.forEach((tarea, index) => {
        console.log(`${index + 1}. ${tarea.Descripcion} - [${tarea.Estado}]`);
      });
      resolve("Lista de tareas: ");
    }, 2000);
  });
};

//Agregar tarea:
let agregarTarea = (descripcion) => {
  return new Promise((resolve) => {
    const nuevaTarea = { Id: "", Descripcion: "", Estado: "Pendiente" };
    nuevaTarea.Id = listaTareas.length + 1;
    nuevaTarea.Descripcion = descripcion;

    setTimeout(() => {
      listaTareas.push(nuevaTarea);
      console.log("Tarea agregada con exito: ");
      resolve(nuevaTarea);
    }, 2000);
  });
};

//Eliminar tarea:
let eliminarTarea = (indice) => {
  return new Promise((resolve, reject) => {
    if (indice > listaTareas.length) {
      reject(new Error("El indice seleccionado no existe."));
      return;
    }
    setTimeout(() => {
      listaTareas.splice(indice, 1);
      resolve(console.log("Tarea eliminada correctamente."));
    }, 2000);
  });
};

//Completar una tarea:
let completarTarea = (indice) => {
  return new Promise((resolve, reject) => {
    if (indice > listaTareas.length) {
      reject(new Error("El indice seleccionado no existe."));
      return;
    }

    setTimeout(() => {
      listaTareas[indice].Estado = "Completada";
      resolve(console.log("Tarea marcada como completada"));
    }, 2000);
  });
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
  readline.question("Elije una opcion: \n", async (opcion) => {
    switch (opcion) {
      case "1":
        await mostrarTareas();
        inicio();
        break;
      case "2":
        readline.question("¿Cual tarea deseas ingresar? \n", (tarea) => {
          agregarTarea(tarea).then((data) => {
            console.log(data);
          });
          inicio();
        });
        break;
      case "3":
        readline.question("¿Cual tarea deseas eliminar? \n", async (tarea) => {
          await eliminarTarea(tarea);
          inicio();
        });
        break;
      case "4":
        readline.question("¿Cual tarea deseas completar? \n", async (tarea) => {
          await completarTarea(tarea);
          inicio();
        });
        break;
      case "5":
        console.log("programa finalizado.");
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

//--------------------------------------------------<>----------------------------------------------------------------
//Servidor

const host = "localhost";
const port = 8080;

const taskListener = function (req, res) {
  res.writeHead(200);
  res.write(JSON.stringify(listaTareas));
  res.end();
};

const server = http.createServer(taskListener);

server.listen(port);
