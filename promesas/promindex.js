// Reto 4 (DIA1)

//Crea tres archivos, index.js, writeAndReadObject.js y readConsole.js.


const writeAndRead = require('./promwriteAndReadObject');
const readConsole = require('./promreadConsole')
let fs = require('fs/promises'); //para poder trabajar con promesas

let path = './prommifichero.json';

//CON CALLBACK (DIA1)
// readConsole((obj) =>{
//     writeAndRead(path, obj)
// });

////////////////////////////////////////////////////

//THEN/CATCH

// readConsole()
//     .then(obj => writeAndRead(path, obj))
    
//     .catch(error => {
//         console.log(error);
//     })

//importamos los modulos
//creamos el path para el jsoon y despues
//llamamos la funcion importada readconsole con callback(obj): captura lo que introduce el user en la consola y crea el objeto con la info del usuario
//writeandread muestra el objeto creado en el json (path)


//ASYN/AWAIT

async function asyncAwait(){
    try{
        let obj = await readConsole();
        await writeAndRead(path, obj);
    } catch (error){
        console.log(error);
    }
}
asyncAwait();