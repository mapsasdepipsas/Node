// Reto 4
// • Crear un directorio que se llame proyecto_node.

// • Dentro, inicia un proyecto de Node.

// • Una vez ahí, crea tres archivos, index.js, writeAndReadObject.js y readConsole.js.


const writeAndRead = require('./writeAndReadObject');
const readConsole = require('./readConsole')

let path = './mifichero.json';

readConsole((obj) =>{
    writeAndRead(path, obj)
});

//importamos los modulos
//creamos el path para el jsoon y despues
//llamamos la funcion importada readconsole con callback(obj): captura lo que introduce el user en la consola y crea el objeto con la info del usuario
//writeandread muestra el objeto creado en el json (path)