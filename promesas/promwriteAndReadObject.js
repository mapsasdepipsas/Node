//Reto 4 (DIA1)
// • Mete la parte de fs en una función en writeAndReadObject, su cabecera debe ser:
// writeAndRead(path, obj)

// En esta función se debe escribir en el fichero cuyo nombre está en el parámetro path el objeto literal
// guardado en el parámetro obj. Y luego leer dicho fichero y mostrarlo
// por consola.


//const fs = require('fs');
let fs = require('fs/promises'); //para poder trabajar con promesas

// function writeAndRead(path, obj) {

//     fs.writeFile(path, JSON.stringify(obj), (error) =>{

//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Guardado :)');

//             fs.readFile(path, (error, data) =>{
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     console.log(data.toString());
//                 }
//             });
//         }
//     });
// }

///////////////////////////////////////////////////////////////

//THEN/CATCH

// function writeAndRead (path, obj) {
    
//     return fs.writeFile(path, JSON.stringify(obj))

//     .then(() =>{
//         console.log('Guardado :)');
//     })

//     .then(() => {
//         return fs.readFile(path)
//     })

//     .then(data => {
//         console.log(data.toString());
//     })

//     .catch(error =>{
//         console.log(error);
//     })
// }





//funcion writeandread parametros= path y obj
//el fs.writefile hace que guardemos objeto en datos json (desde index)
//fs.readfile lee lo que escribimos en archivo (desde index)


//ASYNC/AWAIT

async function writeAndRead(path, obj){
    try{
        await fs.writeFile(path, JSON.stringify(obj));
        console.log("Guardado :)");

        let data = await fs.readFile(path);
        console.log(data.toString());
    }catch(error){
        console.log(error);
    }
}

module.exports = writeAndRead;