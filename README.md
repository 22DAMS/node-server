Antes de usar Async y await la función principal (inicio()), se ejecutaba antes que las funciones elegibles, por lo cual arrojaba la respuesta según lo indicado por consola posterior a mostrar el menu de inicio, lo cual era confuso, luego que la implemente, el programa espera que se de la respuesta para luego si ejecutar inicio() y volver a mostrar las opciones de manera correcta.

Cuando use el metodo .then() pude traer a la consola el contenido del objeto PROMESA nuevaTarea sin consologuearlo desde la función, una vez en el resolve tengo el dato, con el then muestra cada propiedad de la nueva tarea creada.

La diferencia que veo entre async/await y .then() es que la función asincronica permite que el programa se ejecute de forma coherente y mas clara para el usuario y con el then puedo acceder facilmente al contenido de la promesa resuelta.
